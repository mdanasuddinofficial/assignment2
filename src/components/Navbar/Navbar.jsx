import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-md px-4 md:px-8">
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost">
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
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-52 gap-1"
          >
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  isActive ? "bg-white text-black font-semibold" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/movies"
                className={({ isActive }) =>
                  isActive ? "bg-white text-black font-semibold" : ""
                }
              >
                Movies
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Logo / Brand Name as Home link with active effect */}
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `btn btn-ghost text-xl font-bold ${
              isActive ? "bg-white text-black" : ""
            }`
          }
        >
          Movie Explorer
        </NavLink>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-base font-medium gap-2">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? "bg-white text-black font-semibold" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/movies"
              className={({ isActive }) =>
                isActive ? "bg-white text-black font-semibold" : ""
              }
            >
              Movies
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;