import React, { FC, useEffect, useState } from "react"
import { IPost } from "../models/IPost"
import { postAPI } from "../services/PostService"
import PostItem from "./PostItem"

const PostContainer2:FC = () => {
    const {data: posts, isLoading, error, refetch} = postAPI.useFetchAllPostsQuery(100)
    const [updatePost, {}] = postAPI.useUpdatePostMutation()
    const [deletePost, {}] = postAPI.useDeletePostMutation()

    const handleUpdate = (post: IPost) => {
        updatePost(post)
    }

    const handleRemove = (post: IPost) => {
        deletePost(post)
    }

    return (
        <div>
            <div>
                <button onClick={refetch}>Refetch</button>
                {isLoading && <h1>Идёт загрузка...</h1>}
                {error && <h1>Произошла ошибка при загрузке</h1>}
                {posts && posts.map(post => 
                    <PostItem remove={handleRemove} update={handleUpdate} key={post.id} post={post}/>    
                )}
            </div>
        </div>
    )
}

export default PostContainer2;