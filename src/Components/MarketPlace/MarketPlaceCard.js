import React from "react";

import { Avatar, Card, Flex, Space, Typography } from "antd";
import { MdOutlineWatchLater } from "react-icons/md";
import firstImg from "../../Images/CardsImages/first.png";
import AvatarImg from "../../Images/avatar.png";
import EthereumImg from "../../Images/ethereum.png";
import "./MarketPlace.css";
import { HeartFilled } from "@ant-design/icons";
const { Text } = Typography;
const MarketPlaceCard = () => {
  return (
    <Card
      className="market-place-card"
      hoverable
      cover={<img alt="example" src={firstImg} />}
    >
      <Flex align="start" gap="middle" vertical>
        <div className="card-time">
          <MdOutlineWatchLater size={20} />
          <p>05:20</p>
        </div>
        <Text className="card-title" strong>
          Deadzone 13 Hideout
        </Text>
        <Space align="center" size={"middle"} direction="horizontal">
          <Avatar size={32} src={AvatarImg} />
          <Text>@marterium</Text>
        </Space>
        <Space align="start" direction="vertical">
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
              0.49 BNBprice
            </Text>
          </Space>
          <Space>
            <Text className="price" type="secondary">
              ≈ $140.05
            </Text>
          </Space>
        </Space>
        <div className="card-like">
          <HeartFilled size={20} />
          <span>34</span>
        </div>
      </Flex>
    </Card>
  );
};

export default MarketPlaceCard;
