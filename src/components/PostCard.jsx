import React from "react";
import { Link } from "react-router-dom";
import service from "../appwrite/config";

const PostCard = ({ $id, title, imageFile }) => {
  return (
    <Link to={`/post/${$id}`} className="flex flex-col gap-4">
      <div className="w-full rounded-xl shadow-emerald-400">
        <div className="w-full rounded-xl">
          <img src={service.getFilePreview(imageFile)} alt={title} />
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
    </Link>
  );
};

export default PostCard;
