
import React, { useState, useEffect } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";
import Rotate from "./Rotate";
const Nav = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    if (toggleMenu) {
      document.body.style.overflow = "hidden";
      document.body.classList.add("blurred");
    } else {
      document.body.style.overflow = "auto";
      document.body.classList.remove("blurred");
    }
  }, [toggleMenu]);
  return (
    <>
      <div className="flex justify-between items-center w-full px-4 md:px-10 bg-white shadow-md">
        <div>
          <NavLink to="/" className="flex gap-1 items-center justify-center">
            <Rotate />
            <div className="w-32 h-14 md:w-40 md:h-14 flex items-center">
              <Logo />
            </div>
          </NavLink>
        </div>
        {/* primary */}
        <div className="hidden lg:flex gap-4 text-md font-base text-shfPurple font-inter">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "border-b-2 border-shfPurple font-semibold" : ""
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "border-b-2 border-shfPurple font-semibold" : ""
            }
          >
            About us
          </NavLink>
          <NavLink
            to="/events"
            className={({ isActive }) =>
              isActive ? "border-b-2 border-shfPurple font-semibold" : ""
            }
          >
            Events
          </NavLink>
          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              isActive ? "border-b-2 border-shfPurple font-semibold" : ""
            }
          >
            Gallery
          </NavLink>
          <NavLink
            to="/contactus"
            className={({ isActive }) =>
              isActive ? "border-b-2 border-shfPurple font-semibold" : ""
            }
          >
            Contact Us
          </NavLink>
          <NavLink
            to="/workwithus"
            className={({ isActive }) =>
              isActive ? "border-b-2 border-shfPurple font-semibold" : ""
            }
          >
            Work With Us
          </NavLink>
          <NavLink
            to="/journey-so-far"
            className={({ isActive }) =>
              isActive ? "border-b-2 border-shfPurple font-semibold" : ""
            }
          >
            Journey So Far
          </NavLink>
        </div>

        {/* secondary */}
        <div className="flex">
          <div className="hidden md:flex items-center text-sm">
            <div>
              <NavLink to="/donate">
                <button className="bg-shfOrange hover:bg-shfPurple transition duration-300 text-white font-inter px-6 py-2 font-semibold rounded-full">
                  Donate Now
                </button>
              </NavLink>
            </div>
          </div>

          {/* Mobile navigation toggle */}
          <div className="lg:hidden flex items-center ml-8">
            <button onClick={() => setToggleMenu(!toggleMenu)}>
              <Bars3Icon className="h-8" />
            </button>
          </div>
        </div>
      </div>

      {/* mobile navigation */}
      <div
        className={`inset-0 top-0 fixed bg-shfPurple overflow-hidden flex flex-col items-center justify-center lg:hidden gap-12 transition-transform duration-300 ${toggleMenu ? "translate-y-0" : "-translate-y-full"
          }`}
      >
        <div className="px-8 py-8 flex items-start text-xl">
          <div className="flex flex-col gap-8 font-semi bold tracking-wider text-white text-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "bg-transparent py-1 px-2 border-2 border-white rounded-full"
                  : ""
              }
              onClick={() => setToggleMenu(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "bg-transparent py-1 px-2 border-2 border-white rounded-full"
                  : ""
              }
              onClick={() => setToggleMenu(false)}
            >
              About us
            </NavLink>
            <NavLink
              to="/events"
              className={({ isActive }) =>
                isActive
                  ? "bg-transparent py-1 px-2 border-2 border-white rounded-full"
                  : ""
              }
              onClick={() => setToggleMenu(false)}
            >
              Events
            </NavLink>
            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                isActive
                  ? "bg-transparent py-1 px-2 border-2 border-white rounded-full"
                  : ""
              }
              onClick={() => setToggleMenu(false)}
            >
              Gallery
            </NavLink>
            <NavLink
              to="/contactus"
              className={({ isActive }) =>
                isActive
                  ? "bg-transparent py-1 px-2 border-2 border-white rounded-full"
                  : ""
              }
              onClick={() => setToggleMenu(false)}
            >
              Contact Us
            </NavLink>
            <NavLink
              to="/workwithus"
              className={({ isActive }) =>
                isActive
                  ? "bg-transparent py-1 px-2 border-2 border-white rounded-full"
                  : ""
              }
              onClick={() => setToggleMenu(false)}
            >
              Work With Us
            </NavLink>
            <NavLink
              to="/workwithus"
              className={({ isActive }) =>
                isActive
                  ? "bg-transparent py-1 px-2 border-2 border-white rounded-full"
                  : ""
              }
              onClick={() => setToggleMenu(false)}
            >
              Work With Us
            </NavLink>
            <NavLink
              to="/donate"
              className={({ isActive }) =>
                isActive
                  ? "bg-transparent py-1 px-2 border-2 border-white rounded-full"
                  : ""
              }
              onClick={() => setToggleMenu(false)}
            >
              Donate Us
            </NavLink>

          </div>
        </div>
      </div>
    </>
  );
}

export default Nav