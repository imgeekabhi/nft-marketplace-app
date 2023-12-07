import React from "react";
import GooglePlay from "../../Images/GoogleBadge.png";
import AppleStore from "../../Images/AppleBadge.png";
import MaskGroup from "../../Images/MaskGroup.png";

import { Flex, Typography } from "antd";
const { Title, Text, Paragraph } = Typography;

const DownloadApp = () => {
  return (
    <Flex className="downloadAppContainer">
      <div className="textArea">
        <h2 level={2} className="downloadAppTitle">
          Download BnB app to track your NFT portfolio and discover drops
        </h2>
        <p className="downloadAppPara">
          Bringing you the latest in NFTs, Blockchain Gaming, Metaverse and
          Cryptocurrencies. Launchpad is the true home of BnB
        </p>
        <Flex gap={20}>
          <img src={GooglePlay} alt="GooglePlay" />
          <img src={AppleStore} alt="AppleStore" />
        </Flex>
      </div>
      <div className="imgArea">
        <img src={MaskGroup} alt="MaskGroup" />
      </div>
    </Flex>
  );
};

export default DownloadApp;
