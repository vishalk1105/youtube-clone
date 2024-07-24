import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../constants";

const Head = () => {
  const dispatch = useDispatch();
  const [searchQry, setSearchQry] = useState("");
  const [seggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  useEffect(() => {
    // API Call
    // Make An api call after every key press
    // But if difference between 2 API calls is <200ms
    // Decline the api call
    try {
      const timer = setTimeout(() => getSuggestions(), 200);
      return () => {
        clearTimeout(timer);
      };
    } catch (error) {
      console.log(error);
    }
  }, [searchQry]);

  const getSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQry);
    const json = await data.json();
    setSuggestions(json[1]);
  };

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
      <div className="col-span-10 align-middle text-center">
        <div>
          <input
            type="text"
            className="px-5 w-1/2 border border-gray-400 rounded-l-full p-2"
            value={searchQry}
            onChange={(e) => setSearchQry(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-grey-200 p-2 px-3 rounded-r-full bg-gray-100">
            🔍
          </button>
          {showSuggestions && (
            <div className="fixed shadow-lg rounded text-left left-1/2 bg-white py-2 px-5 w-96 border-gray-100">
              <ul>
                {seggestions.map((s) => (
                  <li key={s} className="shadow-sm py-2 hover:bg-gray-100">
                    🔍 {s}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
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
