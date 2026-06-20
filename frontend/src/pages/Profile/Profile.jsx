import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import {
  getProfile,
  updateProfile,
} from "../../services/userService";

import toast from "react-hot-toast";

const Profile = () => {

const currentUser = JSON.parse(
  localStorage.getItem("user")
);
 

const [profileData, setProfileData] =
  useState(null);
  const [showModal, setShowModal] =
  useState(false);

const [editData, setEditData] =
  useState({
    name: "",
    bio: "",
  });

useEffect(() => {
  fetchProfile();
}, []);

const fetchProfile = async () => {

  try {

    const data =
      await getProfile(
        currentUser.id
      );

    console.log(data);

    setProfileData(data);

  } catch (error) {

    console.log(error);

  }

};

const handleUpdateProfile =
  async () => {


    try {
      const token =
  localStorage.getItem("token");
      const response =
  await updateProfile(
    editData,
    token
  );

localStorage.setItem(
  "user",
  JSON.stringify({
    ...currentUser,
    name: response.user.name,
  })
);

toast.success(
  "Profile Updated 🚀"
);

      setShowModal(false);

      fetchProfile();

    } catch (error) {

      toast.error(
        "Update Failed"
      );

      console.log(error);

    }

};

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <Navbar />

      {/* Cover */}

      <div className="h-64 bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 relative">

        <div className="absolute inset-0 bg-black/20"></div>
       {
  showModal && (

    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

      <div className="bg-slate-900 w-full max-w-md p-6 rounded-3xl border border-slate-800">

        <h2 className="text-2xl font-bold mb-6">
          Edit Profile
        </h2>

        <input
          type="text"
          value={editData.name}
          onChange={(e) =>
            setEditData({
              ...editData,
              name: e.target.value,
            })
          }
          placeholder="Name"
          className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 mb-4"
        />

        <textarea
          value={editData.bio}
          onChange={(e) =>
            setEditData({
              ...editData,
              bio: e.target.value,
            })
          }
          placeholder="Bio"
          rows="4"
          className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3"
        />

        <div className="flex justify-end gap-3 mt-6">

          <button
            onClick={() =>
              setShowModal(false)
            }
            className="px-5 py-2 bg-slate-700 rounded-xl"
          >
            Cancel
          </button>

          <button
            onClick={
              handleUpdateProfile
            }
            className="px-5 py-2 bg-blue-600 rounded-xl"
          >
            Save
          </button>

        </div>

      </div>

    </div>

  )
}
      </div>

      <div className="max-w-5xl mx-auto px-6">

        {/* Profile Section */}

        <div className="-mt-20 relative">

          <div className="h-40 w-40 rounded-full border-4 border-slate-950 bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center text-5xl font-bold shadow-2xl">
           {profileData?.user?.name?.[0]}

          </div>

          <div className="mt-6">

            <h1 className="text-4xl font-bold">

              {profileData?.user?.name}

            </h1>

            <p className="text-slate-400 mt-2">

              {profileData?.user?.email}

            </p>

           <p className="text-slate-500 mt-3 max-w-2xl">
  {profileData?.user?.bio || "No bio added yet."}
</p>

          </div>

        </div>

        {/* Stats */}

        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 text-center">

            <h2 className="text-3xl font-bold">
  {profileData?.totalPosts || 0}
</h2>

            <p className="text-slate-400 mt-2">
              Posts
            </p>

          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 text-center">

            <h2 className="text-3xl font-bold">
  {profileData?.user?.followers?.length || 0}
</h2>

            <p className="text-slate-400 mt-2">
              Followers
            </p>

          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 text-center">

            <h2 className="text-3xl font-bold">
             {profileData?.user?.following?.length || 0}
            </h2>

            <p className="text-slate-400 mt-2">
              Following
            </p>

          </div>

        </div>

        {/* Edit Button */}

        <div className="mt-8">

         <button
  onClick={() => {

    setEditData({
      name:
        profileData?.user?.name || "",

      bio:
        profileData?.user?.bio || "",
    });

    setShowModal(true);

  }}
  className="bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-3 rounded-xl font-semibold hover:scale-105 transition"
>
  Edit Profile
</button>

        </div>

        {/* Recent Activity */}

        <div className="mt-12">

          <h2 className="text-2xl font-bold mb-6">

            Recent Activity

          </h2>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">

            <p className="text-slate-400">

              No activity yet.

            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Profile;