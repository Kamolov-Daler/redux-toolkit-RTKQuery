import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { postAPI, userAPI } from "../services/PostService";
import userReducer from "./reducers/UserSlice"

const rootReducer = combineReducers({
    user:userReducer,
    [postAPI.reducerPath]: postAPI.reducer,
    [userAPI.reducerPath]: userAPI.reducer,
})

export const setupStore = () => {
    return  configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => 
            getDefaultMiddleware().concat(postAPI.middleware, userAPI.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']