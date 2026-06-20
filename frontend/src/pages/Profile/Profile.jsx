import Navbar from "../../components/Navbar/Navbar";

const Profile = () => {

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <Navbar />

      {/* Cover */}

      <div className="h-64 bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 relative">

        <div className="absolute inset-0 bg-black/20"></div>

      </div>

      <div className="max-w-5xl mx-auto px-6">

        {/* Profile Section */}

        <div className="-mt-20 relative">

          <div className="h-40 w-40 rounded-full border-4 border-slate-950 bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center text-5xl font-bold shadow-2xl">

            {user?.name?.[0]}

          </div>

          <div className="mt-6">

            <h1 className="text-4xl font-bold">

              {user?.name}

            </h1>

            <p className="text-slate-400 mt-2">

              {user?.email}

            </p>

            <p className="text-slate-500 mt-3 max-w-2xl">

              Full Stack Developer • MERN Stack Enthusiast •
              Building ConnectHub 🚀

            </p>

          </div>

        </div>

        {/* Stats */}

        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 text-center">

            <h2 className="text-3xl font-bold">
              12
            </h2>

            <p className="text-slate-400 mt-2">
              Posts
            </p>

          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 text-center">

            <h2 className="text-3xl font-bold">
              245
            </h2>

            <p className="text-slate-400 mt-2">
              Followers
            </p>

          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 text-center">

            <h2 className="text-3xl font-bold">
              180
            </h2>

            <p className="text-slate-400 mt-2">
              Following
            </p>

          </div>

        </div>

        {/* Edit Button */}

        <div className="mt-8">

          <button className="bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-3 rounded-xl font-semibold hover:scale-105 transition">

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