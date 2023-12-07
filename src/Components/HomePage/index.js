import React from "react";
import "./HomePage.css";
import CreateAndSellCard from "./CreateAndSellCard";
import { Button, Col, Flex, Row } from "antd";
import VideoViewerCard from "./VideoViewerCard";
import DisplayAvatar from "./DisplayAvatar";
import DownloadApp from "./DownloadApp";
import TopSeller from "./TopSeller";
import FirstPage from "./FirstPage";
import CardSlider from "./CardSlider";
const HomePage = () => {
  return (
    <>
      <FirstPage />
      <Row justify="center" align="middle" style={{ minHeight: "100vh" }}>
        <Col>
          <CreateAndSellCard />
        </Col>
        <Col>
          <CardSlider />
        </Col>
        <Col>
          <TopSeller />
          <Flex align="center" vertical className="headings-btw-comp">
            <h2>BnB Nft marketplace</h2>
            <p>Mission to lead the future of metaverse</p>
          </Flex>
          <VideoViewerCard />
          <Flex align="center" vertical className="headings-btw-comp">
            <h2>BnB is for everyone</h2>
            <p>
              Join the millions of creators, collectors, and curators who are on
              this journey with you.
            </p>
          </Flex>
          <DisplayAvatar />
          <Flex
            className="get-started-btn-container"
            align="center"
            justify="center"
          >
            <Button className="btn-create">Get started</Button>
          </Flex>

          <DownloadApp />
        </Col>
      </Row>
    </>
  );
};

export default HomePage;
