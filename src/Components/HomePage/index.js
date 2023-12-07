import React from "react";
import "./HomePage.css";
import CreateAndSellCard from "./CreateAndSellCard";
import { Col, Row } from "antd";
import VideoViewerCard from "./VideoViewerCard";
import DisplayAvatar from "./DisplayAvatar";
import DownloadApp from "./DownloadApp";
import TopSeller from "./TopSeller";
const HomePage = () => {
  return (
    <Row
      justify="center"
      align="middle"
      style={{ minHeight: "100vh", border: "1px solid black" }}
    >
      <Col>
        <CreateAndSellCard />
        <TopSeller />
        <VideoViewerCard />
        <DisplayAvatar />
        <DownloadApp />
      </Col>
    </Row>
  );
};

export default HomePage;
