import {
  FiHeart,
  FiMessageCircle,
  FiSend,
} from "react-icons/fi";

const PostCard = ({
  post,
  handleLike,
}) => {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:border-blue-500/40 hover:-translate-y-1 transition-all duration-300">

      <div className="flex items-center gap-4">

        <div className="h-12 w-12 rounded-full bg-blue-600 flex items-center justify-center font-bold">
          {post.user?.name?.[0]}
        </div>

        <div>

          <h3 className="font-semibold">
             {post.user?.name}
          </h3>

          <p className="text-slate-400 text-sm">
            {new Date(post.createdAt).toLocaleDateString()}
          </p>

        </div>

      </div>

      <p className="mt-5 text-slate-300">
        {post.content}
      </p>

      <div className="flex gap-8 mt-6 text-slate-400">

        <button
  onClick={() =>
    handleLike(post._id)
  }
  className="flex items-center gap-2 hover:text-red-500"
>
  <FiHeart />
  {post.likes?.length}
</button>
        <button className="flex items-center gap-2 hover:text-blue-500">
          <FiMessageCircle />
         {post.comments?.length}
        </button>

        <button className="flex items-center gap-2 hover:text-cyan-500">
          <FiSend />
          Share
        </button>

      </div>

    </div>
  );
};

export default PostCard;