 import { useState } from "react";

import { createPost } from "../../services/postService";

import toast from "react-hot-toast";



const CreatePost = ({ onPostCreated }) => {
      
  const [postContent, setPostContent] = useState("");

  

 const handleSubmit = async () => {

  if (!postContent.trim()) {
    toast.error("Write something first");
    return;
  }

  const token = localStorage.getItem("token");

  try {

     

    const response = await createPost(
      { content: postContent.trim() },
      token
    );

     

   toast.success("Post Created 🚀");

setPostContent("");

onPostCreated();
  } catch (error) {

    console.log(error.response?.data);

    toast.error("Failed To Create Post");

  }

};



  return (

    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">



      <textarea

  value={postContent}

  onChange={(e) =>

    setPostContent(e.target.value)

  }

  placeholder="What's happening today?"

  rows="3"

  className="w-full bg-slate-950 border border-slate-800 rounded-2xl p-4 outline-none resize-none focus:border-blue-500"

/>
 


      <div className="flex justify-end mt-4">



        <button

  onClick={handleSubmit}

  className="bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 rounded-xl font-semibold"

>

  Create Post

</button>



      </div>



    </div>

  );

};



export default CreatePost;