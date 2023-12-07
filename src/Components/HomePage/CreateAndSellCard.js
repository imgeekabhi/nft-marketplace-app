import React from "react";
import { Card, Col, Row, Space, Typography } from "antd";
import "./HomePage.css";

const { Title, Text } = Typography;

const CreateAndSellCard = () => {
  return (
    <Card className="card-container">
      <Row gutter={[16, 16]} justify="center">
        <Col xs={24} sm={24} md={12} lg={6}>
          <Space direction="vertical">
            <Title level={3} className="card-title">
              Create and sell your NFTs
            </Title>
          </Space>
        </Col>
        <Col xs={24} sm={24} md={12} lg={6}>
          <Space direction="vertical">
            <Text className="card-sub-title" strong>
              Create
            </Text>
            <Text className="card-desc">
              Creative shine building with blocks for BnB.
            </Text>
          </Space>
        </Col>
        <Col className="column-divide" xs={24} sm={24} md={12} lg={6}>
          <Space className="vertical-column-divide" direction="vertical">
            <Text className="card-sub-title" strong>
              Collect
            </Text>
            <Text className="card-desc">
              Unearth NFTs for your growing collection.
            </Text>
          </Space>
        </Col>

        <Col className="column-divide" xs={24} sm={24} md={12} lg={6}>
          <Space className="vertical-column-divide" direction="vertical">
            <Text className="card-sub-title" strong>
              Sell
            </Text>
            <Text className="card-desc">
              Your NFTs will shine in our marketplace.
            </Text>
          </Space>
        </Col>
      </Row>
    </Card>
  );
};

export default CreateAndSellCard;
