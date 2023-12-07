import { Button, Col, Flex, Row, Space } from "antd";
import React from "react";
import NftCarousel from "./NftCarousel";
import { PlayCircleFilled } from "@ant-design/icons";

const FirstPage = () => {
  return (
    <Row>
      <Col
        className="first-page-left-container"
        xs={{ span: 24 }}
        sm={{ span: 24 }}
        md={{ span: 24 }}
        lg={{ span: 12 }}
      >
        <div>
          <h1>Discover, collect, & sell NFTs</h1>
          <p>Discover the Most Premium, Unique and Exclusive NFT Collections</p>
          <Flex gap="large">
            <Button className="btn-explore">Explore</Button>
            <Button className="btn-create">Create</Button>
          </Flex>
          <hr className="horizontal-line" />
        </div>
        <div className="first-page-footer">
          <PlayCircleFilled className="play-btn" />
          <a href="#">Learn more about BNB</a>
        </div>
      </Col>
      <Col
        style={{ height: "900px" }}
        xs={{ span: 24 }}
        sm={{ span: 24 }}
        md={{ span: 24 }}
        lg={{ span: 12 }}
      >
        <NftCarousel />
      </Col>
    </Row>
  );
};

export default FirstPage;
