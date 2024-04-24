import React from "react";
import { useSelector } from "react-redux";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    <div
      className={
        "ml-8 bg-blue-100 h-full " +
        (isMenuOpen ? "pointer-events-none blur-3xl fixed" : "")
      }
    >
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;