 import {
  Link,
  useNavigate
} from "react-router-dom";

import { useState } from "react";
import toast from "react-hot-toast";

import { loginUser }
from "../../services/authService";

const Login = () => {
  const navigate = useNavigate();

const [formData, setFormData] =
  useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {

  setFormData({
    ...formData,
    [e.target.name]:
      e.target.value,
  });

};
  const handleLogin =
  async (e) => {

    e.preventDefault();

    try {

      const data =
        await loginUser(
          formData
        );

      localStorage.setItem(
        "token",
        data.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(
          data.user
        )
      );

      toast.success(
        "Login Successful 🚀"
      );

      navigate("/feed");

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
        "Login Failed"
      );

    }

};
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

            Connect.
            <br />

            Share.
            <br />

            <span className="text-blue-500">
              Grow.
            </span>

          </h1>

          <p className="mt-8 text-slate-400 text-xl max-w-lg">

            Join thousands of creators,
            developers and professionals
            building communities on ConnectHub.

          </p>

        </div>

        {/* Right Side */}

        <div className="flex items-center justify-center px-6">

          <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl">

            <h2 className="text-4xl font-bold text-center">

              Welcome Back

            </h2>

            <p className="text-slate-400 text-center mt-3">

              Login to your account

            </p>

            <form
  onSubmit={handleLogin}
  className="mt-8 space-y-5"
>

             <input
  type="email"
  name="email"
  value={formData.email}
  onChange={handleChange}
  placeholder="Email Address"
  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-4 outline-none focus:border-blue-500"
/>

             <input
  type="password"
  name="password"
  value={formData.password}
  onChange={handleChange}
  placeholder="Password"
  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-4 outline-none focus:border-blue-500"
/>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/20"
              >
                Login
              </button>

            </form>

            <p className="mt-6 text-center text-slate-400">

              Don't have an account?

              <Link
                to="/register"
                className="text-blue-500 ml-2 hover:underline"
              >
                Register
              </Link>

            </p>
            <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950 p-4">

  <p className="text-sm text-slate-400">
    Demo Account
  </p>

  <p className="text-sm mt-2">
    Email: demo@connecthub.com
  </p>

  <p className="text-sm">
    Password: 123456
  </p>

</div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Login;