 import { useEffect, useState } from "react";
import {
  getAllPosts,
  likePost,
  addComment,
}
from "../../services/postService";
import {
  getProfile,
  followUser,
}
from "../../services/userService";

import Navbar from "../../components/Navbar/Navbar";
import CreatePost from "../../components/CreatePost/CreatePost";
import PostCard from "../../components/PostCard/PostCard";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const data = await getAllPosts();
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLike =
  async (postId) => {

    try {

      const token =
        localStorage.getItem(
          "token"
        );

      await likePost(
        postId,
        token
      );

      fetchPosts();

    } catch (error) {

      console.log(error);

    }

};

const handleComment =
  async (
    postId,
    text
  ) => {

    try {

      const token =
        localStorage.getItem(
          "token"
        );

      await addComment(
        postId,
        { text },
        token
      );

      fetchPosts();

    } catch (error) {

      console.log(error);

    }

}
  
const handleFollow =
  async (
    userId
  ) => {

    try {

      const token =
        localStorage.getItem(
          "token"
        );

      await followUser(
        userId,
        token
      );

      fetchPosts();

    } catch (error) {

  console.log(
    error.response?.data
  );

    }

}
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-4 gap-8">

          {/* Feed Section */}
          <div className="lg:col-span-3">

           <CreatePost onPostCreated={fetchPosts} />

            {/* Posts */}
            <div className="space-y-6 mt-8">
              {posts.map((post) => (
               <PostCard
  key={post._id}
  post={post}
  handleLike={handleLike}
  handleComment={handleComment}
  handleFollow={handleFollow}
/>
              ))}
            </div>

          </div>

          {/* Sidebar */}
          <div className="space-y-6">

            {/* Trending */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">

              <h2 className="font-bold text-xl">
                Trending Topics
              </h2>

              <div className="space-y-4 mt-4">

                <div className="flex justify-between">
                  <span>#MERN</span>
                  <span className="text-slate-500 text-sm">
                    2.3k
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>#ReactJS</span>
                  <span className="text-slate-500 text-sm">
                    1.8k
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>#JavaScript</span>
                  <span className="text-slate-500 text-sm">
                    4.1k
                  </span>
                </div>

              </div>

            </div>

            {/* Suggested Users */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">

              <h2 className="font-bold text-xl">
                Suggested Users
              </h2>

              <div className="space-y-4 mt-4">

                {["Rahul", "Priya", "Aman"].map((user) => (

                  <div
                    key={user}
                    className="flex items-center justify-between"
                  >

                    <div className="flex items-center gap-3">

                      <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center">
                        {user[0]}
                      </div>

                      <span>{user}</span>

                    </div>

                    <button className="text-sm bg-blue-600 px-3 py-1 rounded-lg">
                      Follow
                    </button>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Feed;