import React from "react";
import "./MarketPlace.css";
import FilterPanel from "./FilterPanel";
import { Content } from "antd/es/layout/layout";
import { Col, Row } from "antd";
import MarketPlaceCard from "./MarketPlaceCard";
const MarketPlace = () => {
  return (
    <>
      <Content className="marketplce-container">
        <Row justify="center">
          <Col xs={24} sm={24} md={24} lg={24} xl={24} align="middle" span={24}>
            <FilterPanel />
            <Row
              gutter={[16, 16]}
              style={{ maxWidth: "1200px", margin: "0 auto" }}
            >
              <Col xs={24} sm={24} md={12} lg={12} xl={8}>
                <MarketPlaceCard />
              </Col>
              <Col xs={24} sm={24} md={12} lg={12} xl={8}>
                <MarketPlaceCard />
              </Col>
              <Col xs={24} sm={24} md={12} lg={12} xl={8}>
                <MarketPlaceCard />
              </Col>
              <Col xs={24} sm={24} md={12} lg={12} xl={8}>
                <MarketPlaceCard />
              </Col>
              <Col xs={24} sm={24} md={12} lg={12} xl={8}>
                <MarketPlaceCard />
              </Col>
              <Col xs={24} sm={24} md={12} lg={12} xl={8}>
                <MarketPlaceCard />
              </Col>
            </Row>
          </Col>
        </Row>
      </Content>
    </>
  );
};

export default MarketPlace;
