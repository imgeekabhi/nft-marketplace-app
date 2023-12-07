import { Avatar, Card, Flex, Space } from "antd";
import AvatarImg from "../../../Images/avatar.png";
import EthereumImg from "../../../Images/ethereum.png";
import "../HomePage.css";
import React from "react";
import { Typography } from "antd";

const { Text } = Typography;
const TopSellerCards = ({ sno }) => {
  return (
    <Card hoverable className="topSellerCardContainer">
      <Flex justify="space-between" align="center" direction="horizontal">
        <Space className="cardRow" align="center" direction="horizontal">
          <h2>{sno}</h2>
          <Space className="avatarText" align="center" direction="horizontal">
            <Avatar size={48} src={AvatarImg} />
            <Space className="personDetails" direction="vertical">
              <h3>@Marterium</h3>
              <p type="secondary">Floor: 1.66ETH</p>
            </Space>
          </Space>
        </Space>
        <Space
          className="pricing-panel-outside"
          align="start"
          direction="vertical"
        >
          <Space
            className="pricing-panel"
            direction="horizontal"
            align="center"
            size={"small"}
          >
            <img
              src={EthereumImg}
              alt="ethereum-img"
              className="ethereum-img"
            />
            <Text className="bnb-text" strong>
              475.98 BNB
            </Text>
          </Space>
          <Space>
            <Text className="price" type="secondary">
              $4.8M
            </Text>
            <Text className="price" style={{ color: "#72CE47" }}>
              +24.6%
            </Text>
          </Space>
        </Space>
      </Flex>
    </Card>
  );
};

export default TopSellerCards;
