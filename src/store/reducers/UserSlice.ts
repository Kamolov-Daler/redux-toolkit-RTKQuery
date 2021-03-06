import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUSer } from "../../models/IUser";
import { fetchUsers } from "./ActionCreators";


interface UserState {
    users: IUSer[];
    isLoading: boolean;
    error: string;
}

const initialState: UserState = {
    users: [],
    isLoading: false,
    error: '',
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchUsers.fulfilled.type]: (state, action: PayloadAction<IUSer[]>)  => {
            state.isLoading = false;
            state.error = "";
            state.users = action.payload;
        },
        [fetchUsers.pending.type]: (state) => {
            state.isLoading = true;
        },
        [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
            state.users = [];
        },
    }
})

export default userSlice.reducer;
