import React from "react";
import { HiX } from "react-icons/hi";
import { MdSettings } from "react-icons/md";
import { links } from "./data";

import { useSelector, useDispatch } from "react-redux";
import { toggleSideBar } from "../Home/actions";

import Logo from "../../assets/Logo.png";

const Sidebar = () => {
  const dispatch = useDispatch();
  const isSidebarOpen = useSelector((state) => state.dashboard.isSidebarOpen);

  return (
    <div
      className={`transition-all  duration-500  fixed top-0 ${
        isSidebarOpen ? "left-0" : "-left-72"
      }`}
    >
      <div className="flex h-screen overflow-y-auto flex-col bg-white  w-72 px-4 py-8 border-r min-h-screen relative">
        <button
          onClick={() => dispatch(toggleSideBar())}
          className="absolute top-1 right-1  text-gray-600 w-8 h-8 rounded-full flex items-center justify-center active:bg-gray-300 focus:outline-none ml-6 hover:bg-gray-200 hover:text-gray-800"
        >
          <HiX className="w-5 h-5" />
        </button>

        <img src={Logo} alt="" />

        <div className="flex flex-col mt-6  justify-between flex-1">
          <nav className="text">
            {links.map((link, index) => {
              const { id, url, text, icon } = link;
              return (
                <a
                  key={id}
                  href={url}
                  className={`capitalize flex items-center px-4 py-2 ${
                    index === 0 ? "bg-blue-600 text-white" : null
                  } ${
                    index > 0
                      ? "mt-4 text-gray-600 hover:bg-gray-200 hover:text-gray-700 transition-colors duration-200 transform"
                      : null
                  } rounded-md`}
                >
                  {icon}
                  <span className="mx-4 font-medium">{text}</span>
                </a>
              );
            })}
            <hr className="my-6" />

            <a
              href="/settings"
              className="flex items-center px-4 py-2 mt-5 rounded-md text-gray-600 hover:text-gray-700 hover:bg-gray-200 transition-colors transform"
            >
              <MdSettings className="w-5 h-5" />
              <span className="mx-4 font-medium">Settings</span>
            </a>
          </nav>
          <div className="flex items-center px-4 -mx-2 mt-5">
            <img
              src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
              alt="avatar"
              className="h-9 w-9 mx-2 object-center object-cover rounded-full"
            />
            <h4 className="mx-2 font-medium text-gray-800 hover:underline cursor-pointer">
              John Doe
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
