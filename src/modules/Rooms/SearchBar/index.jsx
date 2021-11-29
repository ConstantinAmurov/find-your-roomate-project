import React from "react";

import { AiOutlineArrowDown } from "react-icons/ai";
import { useState } from "react";

import SearchForm from "./SearchForm";

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={` transition-height duration-150 h-10 ${isOpen && 'h-80'} px-20 py-1  w-full bg-blue-500 cursor-pointer`}
    >
      <span
        onClick={() => setIsOpen(!isOpen)}
        className="flex text-2xl text-white font-bold align-items-center"
      >
        <AiOutlineArrowDown
          className={`mr-3 text-3xl  transition-transform transform ${
            isOpen && " rotate-180"
          }`}
        />
        Advanced Search
      </span>
      {isOpen ? <SearchForm /> : ""}
    </div>
  );
};

export default SearchBar;
