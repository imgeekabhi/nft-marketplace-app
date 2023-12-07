import React from "react";
import TopSellerCards from "./TopSellerCards";
import "../HomePage.css";
import { Col, Flex, Radio, Row } from "antd";
import { RightOutlined } from "@ant-design/icons";

const TopSeller = () => {
  return (
    <div className="topSellerContainer">
      <Flex className="topSellerFlexBox" justify="space-between" align="center">
        <h2 className="topSellerHeading">Top Seller</h2>
        <Radio.Group className="days-filter-btns">
          <Radio.Button className="days-filter-btn" value="large">
            1 days
          </Radio.Button>
          <Radio.Button className="days-filter-btn" value="default">
            7 days
          </Radio.Button>
          <Radio.Button className="days-filter-btn" value="small">
            30 days
          </Radio.Button>
        </Radio.Group>
        <a href="/#" className="seeAllBtn">
          See all
          <span>
            <RightOutlined />
          </span>
        </a>
      </Flex>
      <Row gutter={[32, 0]}>
        <Col xs={24} sm={24} md={24} lg={12} xl={12} span={12}>
          {Array.from({ length: 5 }, (_, index) => (
            <TopSellerCards key={index} sno={index + 1} />
          ))}
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={12} span={12}>
          {Array.from({ length: 5 }, (_, index) => (
            <TopSellerCards key={index} sno={index + 6} />
          ))}
        </Col>
      </Row>
    </div>
  );
};

export default TopSeller;
