import React, { useState } from "react";
import { AiFillHome, AiOutlineFlag, AiOutlineSearch } from "react-icons/ai"; // Import AiOutlineSearch for the search icon
import { MdLocalFireDepartment, MdLiveTv } from "react-icons/md";
import { FaPlaceOfWorship } from "react-icons/fa";
import { RiMapPinRangeFill } from "react-icons/ri";
import { TbMapPinCheck } from "react-icons/tb";
import { CgMusicNote } from "react-icons/cg";
import { FiFilm } from "react-icons/fi";
import { IoGameControllerSharp } from "react-icons/io5";
import { ImNewspaper } from "react-icons/im";
import { GiDiamondTrophy, GiEclipse } from "react-icons/gi";
import { RiLightbulbLine, RiFeedbackLine } from "react-icons/ri";
import { FiSettings, FiHelpCircle } from "react-icons/fi";
import SearchContainer from "../components/SearchContainer";
import { GiForwardField } from "react-icons/gi";
import { GiByzantinTemple } from "react-icons/gi";
import { GiTowerFlag } from "react-icons/gi";
import { GiMountainRoad } from "react-icons/gi";
import { FaMonument } from "react-icons/fa";
// Use SearchContainer component in your code


export const categories = [ // Add search icon item
  { name: "Home", icon: <AiFillHome />, type: "home" },
  { name: "Most Visited", icon: <FaPlaceOfWorship />, type: "category" },
  { name: "Near You", icon: <RiMapPinRangeFill />, type: "category" },
  { name: "Visited", icon: <TbMapPinCheck />, type: "category", divider: true },
  {
    name: "Categories",
    type: "heading",
    className: "text-md font-semibold mt-3 mb-2",
  },
  { name: "Monuments", icon: <GiTowerFlag />, type: "category" },
  { name: "Cultural Heritage", icon: <GiByzantinTemple />, type: "category" },
  { name: "Natural Heritage",icon:<GiMountainRoad/>,type:"category" },
  {name:"Historical",icon:<GiForwardField/>,type:"category"},
  { name: "Stadiums", icon: <GiDiamondTrophy />, type: "category" },
  { name: "Memorials", icon: <FaMonument />, type: "category", divider:true},
  
  
  { name: "Settings", icon: <FiSettings />, type: "menu" },
  { name: "Report History", icon: <AiOutlineFlag />, type: "menu" },
  { name: "Help", icon: <FiHelpCircle />, type: "menu" },
  { name: "Send feedback", icon: <RiFeedbackLine />, type: "menu" },
];

const Sidebar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false); // State for search container visibility

  const toggleSearchHandler = () => {
    setIsSearchOpen(!isSearchOpen); // Toggle search container visibility
  };

  return (
    <div className="sidebar">
      {categories.map((category, index) => (
        <div key={index} className="sidebar-item">
          {category.type === "search" ? (
            <button
          className="text-xl cursor-pointer hover:bg-gray-100 rounded-full p-3"
          onClick={toggleSearchHandler}
        >
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
          ) : (
            <div className="icon">{category.icon}</div>
          )}
          <span>{category.name}</span>
        </div>
      ))}
      {isSearchOpen && <SearchContainer />} {<SearchContainer />
      /* Render SearchContainer if isSearchOpen is true */}
    </div>
  );
};


export default Sidebar;

const GOOGLE_API_KEY = "AIzaSyClu2V_22XpCG2GTe1euD35_Mh5bn4eTjA";

export const LIVE_CHAT_COUNT = 10;

export const YOUTUBE_VIDEOS_API = (nextToken) =>
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&pageToken=" +
  nextToken +
  "&maxResults=12&regionCode=IN&key=" +
  GOOGLE_API_KEY;

  

export const YOUTUBE_SEARCH_API =
  "https://cors-anywhere.herokuapp.com/http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_SEARCH_VIDEO_ID_API = (search, nextToken) =>
  "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&q=" +
  search +
  "&pageToken=" +
  nextToken +
  "&type=video&fields=items%28id%28videoId%29%2C+snippet%28description%29%29%2CnextPageToken%2CpageInfo&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_VIDEO_API = (videoIdList) =>
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=" +
  videoIdList.toString() +
  "&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_RELATED_VIDEOS_ID_API = (videoId) =>
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&relatedToVideoId=" +
  videoId +
  "&type=video&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_VIDEO_DETAILS_API = (videoId) =>
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=" +
  videoId +
  "&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_CHANNEL_DETAILS_API = (channelId) =>
  "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=" +
  channelId +
  "&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_COMMENTS_API = (videoId, nextToken) =>
  "https://www.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&order=relevance&videoId=" +
  videoId +
  "&pageToken=" +
  nextToken +
  "&prettyPrint=true&key=" +
  GOOGLE_API_KEY;



export const GOOGLE_SIGNUP_LINK="https://accounts.google.com";