import React from "react";
import "./HomePage.css";
import CardImg from "../../Images/CardImgpng";
import PlayBtn from "../../Images/PlayBtn.png";
import { PlusOutlined } from "@ant-design/icons";

const VideoViewerCard = () => {
  return (
    <>
      <div className="video-card">
        <div className="video-card-header">
          <div className="three-circles">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
          <PlusOutlined className="plus-icon" />
        </div>
        <img alt="CardImg" src={CardImg} />
        <div class="play-button">
          <img src={PlayBtn} alt="PlayBtn" />
        </div>
      </div>
    </>
  );
};

export default VideoViewerCard;
