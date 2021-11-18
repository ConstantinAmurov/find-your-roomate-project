import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { FaBars } from "react-icons/fa";

//Actions
import { toggleSideBar } from "./actions";
const Home = () => {
  const dispatch = useDispatch();
  const isSidebarOpen = useSelector((state) => state.dashboard.isSidebarOpen);

  return (
    <main>
      <button
        onClick={() => dispatch(toggleSideBar())}
        className={`${
          isSidebarOpen ? "-translate-x-8" : "translate-x-0"
        } fixed top-2 transition transform ease-linear duration-500 text-gray-600 w-8 h-8 rounded-full flex items-center justify-center active:bg-gray-300 focus:outline-none ml-8 hover:bg-gray-200 hover:text-gray-800 z-20`}
      >
        <FaBars className="w-5 h-5" />
      </button>
    </main>
  );
};

export default Home;
