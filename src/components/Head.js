import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1 items-center">
        <img
          className="h-5 cursor-pointer"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/20px-Hamburger_icon.svg.png"
          alt="Menu"
          onClick={toggleMenuHandler}
        />
        <img
          className="h-5 mx-2"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/100px-YouTube_Logo_2017.svg.png"
          alt="Youtube Logo"
        />
      </div>
      <div className="col-span-10 text-center">
        <input
          type="text"
          className="w-1/2 border border-gray-400 rounded-l-full p-2"
        />
        <button className="border border-grey-200 p-2 px-3 rounded-r-full bg-gray-100">
          🔍
        </button>
      </div>
      <div className="col-span-1 flex items-center">
        <img
          className="h-5"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"
          alt="user"
        />
      </div>
    </div>
  );
};

export default Head;
