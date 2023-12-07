import { Avatar } from "antd";
import React from "react";
import AvatarImg from "../../../Images/avatar.png";
import "../HomePage.css";
const CarouselUser = () => {
  return (
    <div className="overlayContent">
      <Avatar size={86} src={AvatarImg} />
      <div>
        <h2>
          @marterium <span>created Machina</span>
        </h2>
        <p>an hour ago (2,000 views)</p>
      </div>
    </div>
  );
};

export default CarouselUser;
