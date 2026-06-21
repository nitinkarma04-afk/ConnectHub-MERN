import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FiHome,
  FiUser,
  FiBell,
  FiSearch,
} from "react-icons/fi";

import { searchUsers } from "../../services/userService";

const Navbar = () => {
  const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const [search, setSearch] =
    useState("");

  const [results, setResults] =
    useState([]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  const handleSearch = async (e) => {
    const value = e.target.value;

    setSearch(value);

    if (value.length < 1) {
      setResults([]);
      return;
    }

    try {
      const data =
        await searchUsers(value);

      setResults(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/70 backdrop-blur-xl shadow-xl">

      <div className="max-w-7xl mx-auto px-6">

        <div className="h-20 flex items-center justify-between">

          {/* Logo */}

          <Link
            to="/"
            className="flex items-center gap-3"
          >
            <div className="h-3 w-3 rounded-full bg-blue-500 shadow-[0_0_20px_#3b82f6]" />

            <span className="text-3xl font-extrabold text-white">
              Connect
              <span className="text-blue-500">
                Hub
              </span>
            </span>
          </Link>

          {/* Search */}

          <div className="relative hidden lg:block">

            <div className="flex items-center bg-slate-900 border border-slate-800 rounded-full px-4 py-3 w-96">

              <FiSearch className="text-slate-400" />

              <input
                type="text"
                value={search}
                onChange={handleSearch}
                placeholder="Search users..."
                className="bg-transparent outline-none ml-3 w-full text-white placeholder:text-slate-500"
              />

            </div>

            {results.length > 0 && (

              <div className="absolute top-16 left-0 w-full bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-2xl">

                {results.map((u) => (

                  <div
                    key={u._id}
                    onClick={() => {

                      navigate(
                        `/profile/${u._id}`
                      );

                      setSearch("");
                      setResults([]);

                    }}
                    className="p-3 border-b border-slate-800 cursor-pointer hover:bg-slate-800 transition"
                  >

                    <p className="font-semibold text-white">
                      {u.name}
                    </p>

                    <p className="text-sm text-slate-400">
                      {u.email}
                    </p>

                  </div>

                ))}

              </div>

            )}

          </div>

          {/* Menu */}

          <nav className="flex items-center gap-6">

            <Link
              to="/feed"
              className="text-slate-300 hover:text-blue-500 transition"
            >
              <FiHome size={22} />
            </Link>

            <Link
              to={`/profile/${user?.id}`}
              className="text-slate-300 hover:text-blue-500 transition"
            >
              <FiUser size={22} />
            </Link>

            <button className="text-slate-300 hover:text-blue-500 transition">
              <FiBell size={22} />
            </button>

            <div className="flex items-center gap-3">

              <span className="text-sm text-slate-300">
                {user?.name}
              </span>

              <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-full font-semibold transition"
              >
                Logout
              </button>

            </div>

          </nav>

        </div>

      </div>

    </header>
  );
};

export default Navbar;