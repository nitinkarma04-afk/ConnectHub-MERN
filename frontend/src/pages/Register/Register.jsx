import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <div className="grid lg:grid-cols-2 min-h-screen">

        {/* Left Side */}

        <div className="hidden lg:flex flex-col justify-center px-20 relative overflow-hidden">

          <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"></div>

          <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl"></div>

          <div className="mb-6 flex items-center gap-3">

            <div className="h-3 w-3 rounded-full bg-blue-500 shadow-[0_0_20px_#3b82f6]" />

            <span className="text-2xl font-bold">
              Connect<span className="text-blue-500">Hub</span>
            </span>

          </div>

          <h1 className="text-7xl font-extrabold leading-tight">

            Join.
            <br />

            Connect.
            <br />

            <span className="text-blue-500">
              Inspire.
            </span>

          </h1>

          <p className="mt-8 text-slate-400 text-xl max-w-lg">

            Create your profile, connect with
            people, share ideas and build your
            network on ConnectHub.

          </p>

        </div>

        {/* Right Side */}

        <div className="flex items-center justify-center px-6">

          <div className="w-full max-w-md bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 shadow-2xl">

            <h2 className="text-4xl font-bold text-center">
              Create Account
            </h2>

            <p className="text-center text-xs text-slate-500 mt-4">
  By creating an account, you agree to our Terms & Privacy Policy.
</p>

            <form className="mt-8 space-y-5">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-4 outline-none focus:border-blue-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-4 outline-none focus:border-blue-500"
              />

              <input
                type="password"
                placeholder="Password"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-4 outline-none focus:border-blue-500"
              />

              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-4 outline-none focus:border-blue-500"
              />

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02]"
              >
                Create Account
              </button>

            </form>

            <p className="mt-6 text-center text-slate-400">

              Already have an account?

              <Link
                to="/login"
                className="text-blue-500 ml-2 hover:underline"
              >
                Login
              </Link>

            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Register;