import { Avatar, Space } from "antd";
import EllipsisImg from "../../Images/Ellipse.png";
import "./HomePage.css";
import React from "react";

const DisplayAvatar = () => {
  return (
    <>
      <div className="avatar-container">
        <Space className="avtar-container-space" align="center" wrap>
          {[...Array(7)].map((_, index) => (
            <Avatar key={index} size={120} src={EllipsisImg} />
          ))}
        </Space>
      </div>
      <div className="avatar-container">
        <Space className="avtar-container-space" align="center" wrap>
          {[...Array(6)].map((_, index) => (
            <Avatar key={index} size={120} src={EllipsisImg} />
          ))}
        </Space>
      </div>
    </>
  );
};

export default DisplayAvatar;
