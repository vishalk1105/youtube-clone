import React, { useEffect, useState } from "react";
import { YOUTUBE_API } from "../constants";
import VideoCard, { AdvVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API);
    const response = await data.json();
    setVideos(response.items);
  };

  return (
    <div className="flex flex-wrap justify-center">
      {videos[0] && <AdvVideoCard key={videos[0].id} info={videos[0]} />}
      {videos?.map((video) => (
        <Link key={video.id} to={`/watch?v=${video.id}`}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
