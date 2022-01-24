import { FC, useEffect, useState } from "react";
import { IPost } from "../models/IPost";
import { postAPI } from "../services/PostService";
import PostItem from "./PostItem";

const PostContainer: FC = () => {
  const { data: posts, isLoading, error } = postAPI.useFetchAllPostsQuery(100);
  const [createPost, {}] = postAPI.useCreatePostMutation();
  const [updatePost, {}] = postAPI.useUpdatePostMutation();
  const [deletePost, {}] = postAPI.useDeletePostMutation();

  const addPost = async () => {
    const title = prompt();
    if (title) {
      await createPost({ title, body: title } as IPost);
    }
  };

  const handleUpdate = (post: IPost) => {
    updatePost(post);
  };

  const handleRemove = (post: IPost) => {
    deletePost(post);
  };

  return (
    <div>
      <div>
        <button onClick={addPost}>Добавить пост</button>
        {isLoading && <h1>Идёт загрузка...</h1>}
        {error && <h1>Произошла ошибка при загрузке</h1>}
        {posts && posts.map((post) => <PostItem remove={handleRemove} update={handleUpdate} key={post.id} post={post} />)}
      </div>
    </div>
  );
};

export default PostContainer;
