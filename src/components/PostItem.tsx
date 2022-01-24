import { FC } from "react";
import { IPost } from "../models/IPost";

interface PostItemProps {
  post: IPost;
  remove: (post: IPost) => void;
  update: (post: IPost) => void;
}

const PostItem: FC<PostItemProps> = ({ post, remove, update }) => {
  const handleRemove = (event: React.MouseEvent) => {
    event.stopPropagation();
    remove(post);
  };

  const handleUpdate = (event: React.MouseEvent) => {
    const title = prompt();
    if (title) {
      update({ ...post, title });
    }
  };

  return (
    <div
      style={{ padding: 20, border: "1px solid black", display: "flex", justifyContent: "space-between" }}
      onClick={handleUpdate}
    >
      <div style={{marginRight: 20}}>
        {post.id}. {post.title}
      </div>
      <button onClick={handleRemove}>Delete</button>
    </div>
  );
};

export default PostItem;
