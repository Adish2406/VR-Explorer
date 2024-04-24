import React from "react";
import { numberFormatter, dateDiff, vidDuration } from "../utils/helper";

const VideoCard = ({ info, channelThumbnail }) => {
  if (info === undefined) return null;

  const { snippet, statistics, contentDetails } = info;
  const { channelTitle, title, thumbnails } = snippet;

  const getThumbnailUrl = () => {
    if (thumbnails.maxres?.url) {
      return thumbnails.maxres.url;
    }
    return thumbnails.high?.url;
  };

  return (
    <div className="p-2 rounded-lg sm:m-2 hover:shadow-lg hover:bg-blue-200">
      <div className="relative">
        <img
          className="rounded-lg"
          src={getThumbnailUrl()}
          alt="video-thumbnail"
        />
        <p className="absolute top-0 right-0 m-1 px-2 py-1 bg-black text-white text-xs font-bold rounded-lg">
          {vidDuration(contentDetails.duration)}
        </p>
      </div>

      <div className="justify-center flex pt-1 pb-1">
        <ul className="text-xs">
          <li className="font-bold leading-[1.2rem] pb-1 text-sm">
            {}
          </li>
          <li>{}</li>
          <li >
            <span> {}</span>
            <span>
              <span className="font-bold">  </span>
              {}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default VideoCard;
