import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className=" m-2 w-72 shadow-md">
      <img
        className="rounded-t-lg"
        src={thumbnails.medium.url}
        alt="thumbnail"
      />
      <ul className="p-2">
        <li className="font-bold py-2">{title.substring(0, 15)}...</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} viwes</li>
      </ul>
    </div>
  );
};

export const AdvVideoCard = ({ info }) => {
  return (
    <div className="p-2 pt-0 border">
      <VideoCard info={info} />
    </div>
  );
};

export default VideoCard;
