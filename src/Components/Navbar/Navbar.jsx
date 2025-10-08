import React from "react";
import { Link, NavLink } from "react-router";
import logo from "../../assets/logo.png";
import "./Navbar.css";
import { Github } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="navbar max-w-7xl mx-auto p-5">
        <div className="navbar-start gap-3">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to={"/home"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/apps"}>Apps</NavLink>
              </li>
              <li>
                <NavLink to={"installation"}>Installation</NavLink>
              </li>
            </ul>
          </div>
          <Link>
            <span className="flex justify-between items-center gap-3">
              <img className="max-w-10" src={logo} alt="appLogo" />
              <span className="font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                AppNest
              </span>
            </span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to={"/home"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/apps"}>Apps</NavLink>
            </li>
            <li>
              <NavLink to={"installation"}>Installation</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link
            to={"https://github.com/hashemm621"}
            target="blank"
            className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white"
          >
            <Github /> Contribute
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
