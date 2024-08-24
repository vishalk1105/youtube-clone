import React from "react";
import CommentsList from "./Comment";

const commentsData = [
  {
    name: "Vishal Kamble",
    text: "loremIpsum",
    replies: [
      {
        name: "Abc",
        text: "lorem ipsum",
        replies: [
          {
            name: "Abc",
            text: "lorem ipsum",
            replies: [
              {
                name: "Abc",
                text: "lorem ipsum",
                replies: [{ name: "Abc", text: "lorem ipsum", replies: [] }],
              },
            ],
          },
        ],
      },
      { name: "Abc", text: "lorem ipsum" },
      { name: "Abc", text: "lorem ipsum" },
      { name: "Abc", text: "lorem ipsum" },
    ],
  },
  { name: "Vishal Kamble", text: "loremIpsum" },
  { name: "Vishal Kamble", text: "loremIpsum" },
  { name: "Vishal Kamble", text: "loremIpsum" },
  { name: "Vishal Kamble", text: "loremIpsum" },
];

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments :</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
