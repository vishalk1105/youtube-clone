import React from "react";

const CommentsList = ({ comments }) => {
  return comments?.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

export const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex gap-2 p-2 my-2 bg-gray-100 rounded-md">
      <img
        className="h-5 mt-1"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"
        alt="user"
      />
      <div>
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default CommentsList;
