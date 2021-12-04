import React from "react";
import { HiX } from "react-icons/hi";
import { MdSettings } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { userLinks, adminLinks } from "./data";

import { getLocalUser } from "../../helpers/helpers";

import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { toggleSideBar } from "../Home/actions";

import Logo from "../../assets/Logo.png";

const Sidebar = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const user = getLocalUser();
  const isSidebarOpen = useSelector((state) => state.dashboard.isSidebarOpen);

  let links;
  switch (user.type) {
    case "user":
      links = userLinks;
      break;
    case "owner":
      links = adminLinks;
      break;
    default:
      links = userLinks;
  }
  return (
    <div
      className={`transition-all  duration-500  fixed top-0 z-20 ${
        isSidebarOpen ? "left-0" : "-left-72"
      }`}
    >
      <div className="flex h-screen overflow-y-auto flex-col bg-white  w-72 px-4 py-8 border-r min-h-screen relative  ">
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
              const { id, url, text, icon, sublinks } = link;
              return (
                <>
                  <a
                    key={id}
                    href={url}
                    className={`capitalize flex items-center px-4 py-2 ${
                      pathname === url ? "bg-blue-600 text-white" : null
                    } mt-4 text-gray-600 hover:bg-gray-200 hover:text-gray-700 transition-colors duration-200 transform rounded-md`}
                  >
                    {icon}
                    <span className="mx-4 font-medium">{text}</span>
                  </a>
                  {sublinks &&
                    sublinks.map((sublink) => {
                      const { id, url, text, icon } = sublink;
                      return (
                        <a
                          key={id}
                          href={url}
                          className={`capitalize text-xs m-3 mb-1 flex px-4 py-2 ${
                            pathname === url ? "bg-blue-600 text-white" : null
                          } 
                           "mt-1 text-gray-600 hover:bg-gray-200 hover:text-gray-700 transition-colors duration-200 transform" rounded-md`}
                        >
                          <span className="mr-4">{icon} </span>
                          <span className="font-medium">{text}</span>
                        </a>
                      );
                    })}
                </>
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
          <div className="flex items-center  mt-5">
            <img
              src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
              alt="avatar"
              className="h-9 w-9 object-center object-cover rounded-full"
            />
            <h4 className="mx-1 font-medium text-gray-800 hover:underline cursor-pointer">
              {user.name}
            </h4>
            <a
              href="/logout"
              className="flex items-center py-1 ml-3 rounded-md text-gray-600 hover:text-gray-700 hover:bg-gray-200 transition-colors transform"
            >
              <FiLogOut className="m-2 rounded-md text-gray-600 hover:text-gray-700 hover:bg-gray-200 transition-colors transform" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
