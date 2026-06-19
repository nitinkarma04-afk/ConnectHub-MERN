import { Link } from "react-router-dom";
import {
  FiHome,
  FiUser,
  FiBell,
  FiSearch,
} from "react-icons/fi";

const Navbar = () => {
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

          <div className="hidden lg:flex items-center bg-slate-900 border border-slate-800 rounded-full px-4 py-3 w-96">

            <FiSearch className="text-slate-400" />

            <input
              type="text"
              placeholder="Search people, posts..."
              className="bg-transparent outline-none ml-3 w-full text-white placeholder:text-slate-500"
            />

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
              to="/profile"
              className="text-slate-300 hover:text-blue-500 transition"
            >
              <FiUser size={22} />
            </Link>

            <button className="text-slate-300 hover:text-blue-500 transition">
              <FiBell size={22} />
            </button>

            <button className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-full font-semibold transition">
              Login
            </button>

          </nav>

        </div>

      </div>

    </header>
  );
};

export default Navbar;