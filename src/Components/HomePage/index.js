import React from "react";
import "./HomePage.css";
import CreateAndSellCard from "./CreateAndSellCard";
import { Col, Row } from "antd";
const HomePage = () => {
  return (
    <Row
      justify="center"
      align="middle"
      style={{ minHeight: "100vh", border: "1px solid black" }}
    >
      <Col>
        <CreateAndSellCard />
      </Col>
    </Row>
  );
};

export default HomePage;
