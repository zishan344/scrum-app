import React from "react";
import logo from "../../img/logo.png";

const Navbar = () => {
  const navItem = (
    <>
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>About</a>
      </li>
      <li>
        <a>Course</a>
      </li>
      <li>
        <a>Blogs</a>
      </li>
    </>
  );
  return (
    <div className="navbar bg-[#9426e9]">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabindex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            className="text-black menu menu-compact dropdown-content mt-3 p-2 shadow bg-accent opacity-20 rounded-box w-52"
          >
            {navItem}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">
          <img src={logo} className="w-[36px] height-[34] pr-2" alt="" />{" "}
          <span className="text-white font-semibold">scrumverse</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="text-white menu menu-horizontal p-0">{navItem}</ul>
      </div>
      <div className="navbar-end">
        <a className="text-white mr-4 btn no-animation btn-ghost">Login</a>
        <button class="btn btn-sm btn-outline no-animation  text-white rounded-full">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
