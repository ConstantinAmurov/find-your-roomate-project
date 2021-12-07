import React from "react";

import { AiOutlineArrowDown } from "react-icons/ai";
import { useState } from "react";

import SearchForm from "./SearchForm";

import { useQueryClient } from "react-query";
import { searchRoom } from "api/Rooms API";
const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const queryClient = useQueryClient();

  const onSubmit = async (values) => {
    try {
      searchRoom(values).then((data) => {
        queryClient.setQueryData("rooms", data);
      });
    } catch (err) {}
  };
  return (
    <div
      className={` transition-height duration-150 h-10 ${
        isOpen && "h-80"
      } px-20 py-1  w-full bg-blue-500 cursor-pointer`}
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
      {isOpen ? <SearchForm onSubmit={onSubmit} /> : ""}
    </div>
  );
};

export default SearchBar;
