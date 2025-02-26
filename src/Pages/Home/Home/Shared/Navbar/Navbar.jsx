import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { FaRegUser } from "react-icons/fa6";
import { IoLogoElectron } from "react-icons/io5";
import { Link, NavLink, useNavigate } from "react-router-dom";
import ThemeController from "../../../../../components/ThemeController /ThemeController";
import useAuth from "../../../../../hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth() || {};
  const navigate = useNavigate();
  const [userOpen, setUserOpen] = useState(false);
  const [items, setItems] = useState([]);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Successfully LogOut");
      })
      .catch((error) => toast.error(error.message));
    setUserOpen(false);
  };
  

  const navInfo = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-primary btn-link font-extrabold transition hover:scale-110"
              : "font-bold"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addProduct"
          className={({ isActive }) =>
            isActive
              ? "text-primary btn-link font-extrabold transition hover:scale-110"
              : "font-bold"
          }
        >
          Add Product
        </NavLink>
      </li>
      <li>
        {user && (
          <NavLink
            to="#"
            className={({ isActive }) =>
              isActive
                ? "text-primary btn-link font-extrabold transition hover:scale-110"
                : "font-bold"
            }
          >
            Dashboard
          </NavLink>
        )}
      </li>
    </>
  );
  return (
    <div className="navbar glass w-full sticky z-50 top-0 shadow-lg border-b mb-2 ">
      <div className="flex-1 gap-0 font-extrabold text-red-600 ">
        <IoLogoElectron className="text-4xl font-extrabold" />
        <Link to="/">
          <h1 className=" gap-0 font-extrabold text-sm">
            <span className=" lg:text-3xl bg-300% font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient">
              Wire-Nest
            </span>
          </h1>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navInfo}</ul>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator p-1">
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
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm rounded-full  indicator-item bg-red-500">
                {items.length}
              </span>
            </div>
          </div>
          <div
            tabIndex={0}
            className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
          >
            <div className="card-body">
              <span className="text-lg font-bold ">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <Link to="/viewCart" className="btn btn-primary btn-block">
                  View cart
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end ">
          <div
            tabIndex={0}
            role="button"
            data-tip={user?.email}
            className="btn btn-ghost  btn-circle avatar"
          >
            <div className="w-10 rounded-full ">
              {user ? (
                <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
              ) : (
                <div className="text-3xl p-1">
                  <FaRegUser />
                </div>
              )}
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <div className=" dropdown lg:hidden">{navInfo}</div>
            <li>
              <Link to={"/profile"} className="justify-between">
                Profile
              </Link>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              {user ? (
                <button onClick={handleLogOut} className="btn btn-primary">
                  Logout
                </button>
              ) : (
                <Link to="/login" className="btn btn-primary">
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>
        <ThemeController />
      </div>
    </div>
  );
};

export default Navbar;
