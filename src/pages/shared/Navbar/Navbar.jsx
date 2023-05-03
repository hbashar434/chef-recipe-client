import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import banner from "../../../assets/banner.avif";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("successfully logout");
      })
      .catch((error) => {
        const errorMessage = error.message;

        console.log(errorMessage);
      });
  };

  return (
    <div className="mx-8 md:mx-16 lg:mx-24">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-1 p-2 shadow bg-base-100 rounded-box w-32"
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-indigo-600" : "text-gray-700"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    isActive ? "text-indigo-600" : "text-gray-700"
                  }
                >
                  Blog
                </NavLink>
              </li>
            </ul>
          </div>
          <Link
            to="/"
            className="normal-case text-orange-500 border-none text-lg md:text-3xl font-bold"
          >
            The Chef's Table
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="font-semibold mr-2">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-indigo-600" : "text-gray-700"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="font-semibold">
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive ? "text-indigo-600" : "text-gray-700"
                }
              >
                Blog
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className=" flex gap-4 items-center">
              <img
                className="w-14 h-14 rounded-full"
                title={user?.displayName}
                src={user?.photoURL}
              />
              <Link
                onClick={handleLogOut}
                className="btn bg-orange-500 hover:bg-orange-600 border-none text-white text-xs md:text-lg md:font-semibold normal-case"
              >
                Logout
              </Link>
            </div>
          ) : (
            <Link
              to="/login"
              className="btn bg-orange-500 hover:bg-orange-600 border-none text-white text-xs md:text-lg md:font-semibold normal-case"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
