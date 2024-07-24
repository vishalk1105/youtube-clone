import React from "react";
import Button from "./Button";

const list = [
  "All",
  "Gaming",
  "Songs",
  "Live",
  "Cricket",
  "News",
  "Coocking",
  "Soccer",
];

const ButtonList = () => {
  return (
    <div className="flex">
      {list.map((e, index) => {
        return <Button key={index} name={e} />;
      })}
    </div>
  );
};

export default ButtonList;
