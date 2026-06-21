import {
  FiHeart,
  FiMessageCircle,
  FiSend,
} from "react-icons/fi";

import { useState } from "react";

const PostCard = ({
  post,
  handleLike,
  handleComment,
  handleFollow,
}) => {

  const [comment, setComment] =
    useState("");

    const currentUser =
  JSON.parse(
    localStorage.getItem(
      "user"
    )
  );

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:border-blue-500/40 hover:-translate-y-1 transition-all duration-300">

      {/* User Info */}

      <div className="flex items-center gap-4">

        <div className="h-12 w-12 rounded-full bg-blue-600 flex items-center justify-center font-bold">

          {post.user?.name?.[0]}

        </div>

        <div>

          <h3 className="font-semibold">
            {post.user?.name}
          </h3>

          <p className="text-slate-400 text-sm">
            {new Date(
              post.createdAt
            ).toLocaleDateString()}
          </p>

        </div>

      </div>

      {/* Post Content */}

      <p className="mt-5 text-slate-300">
        {post.content}
      </p>

      {/* Actions */}

      <div className="flex gap-8 mt-6 text-slate-400">

        <button
          onClick={() =>
            handleLike(post._id)
          }
          className="flex items-center gap-2 hover:text-red-500 transition"
        >
          <FiHeart />
          {post.likes?.length}
        </button>

        <button className="flex items-center gap-2 hover:text-blue-500 transition">

          <FiMessageCircle />
          {post.comments?.length}

        </button>

        <button className="flex items-center gap-2 hover:text-cyan-500 transition">

          <FiSend />
          Share

        </button>
      {currentUser?.id !==
 post.user?._id && (

  <button
    onClick={() =>
      handleFollow(
        post.user._id
      )
    }
    className="flex items-center gap-2 text-green-400 hover:text-green-500"
  >
    Follow
  </button>

)}
      </div>

      {/* Comment Section */}

      <div className="mt-6">

        <input
          type="text"
          value={comment}
          onChange={(e) =>
            setComment(
              e.target.value
            )
          }
          placeholder="Write a comment..."
          className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
        />

        <button
          onClick={() => {

            if (
              !comment.trim()
            ) return;

            handleComment(
              post._id,
              comment
            );

            setComment("");

          }}
         className="mt-3 w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-medium transition"
        >
          Comment
        </button>

        {/* Comments List */}

       {post.comments?.length > 0 && (

  <div className="mt-4 space-y-3">

    {post.comments.map((c) => (

      <div
        key={c._id}
        className="bg-slate-800 p-3 rounded-xl text-slate-200"
      >
        {c.text}
      </div>

    ))}

  </div>

)}

      </div>

    </div>
  );
};

export default PostCard;