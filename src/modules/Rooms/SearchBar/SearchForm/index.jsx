import React from "react";

import {BsSearch} from "react-icons/bs"
import Input from "../../../../components/Layouts/Public/Input";
const SearchForm = () => {
  return (
    <div classname="container">
      <div className="row my-3">
        <div className="col">
          <Input label="Country" type="text"></Input>
        </div>
        <div className="col">
          <Input label="City" type="text"></Input>
        </div>

        <div className="col">
          <Input label="Number of Bedrooms" type="number"></Input>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <button className=" text-xl flex align-items-center  font-bold flex py-2 px-4 rounded-md hover:bg-gray-100 hover:text-blue-500 transition-colors transform">
          <BsSearch className="mr-2"/> Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
