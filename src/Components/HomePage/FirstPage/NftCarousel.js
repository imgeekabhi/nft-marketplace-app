import React from "react";
import { Avatar, Carousel, Flex } from "antd";
import CarouselBg from "../../../Images/CarouselBackground.png";
import CarouselUser from "./CarouselUser";
import AvatarImg from "../../../Images/avatar.png";
import "../HomePage.css";
import {
  LeftCircleFilled,
  LeftCircleOutlined,
  RightCircleFilled,
  RightCircleOutlined,
} from "@ant-design/icons";
const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <span className="custom-prev-arrow" onClick={onClick}>
      <LeftCircleFilled className="left-arrow" />
    </span>
  );
};

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <span className="custom-next-arrow" onClick={onClick}>
      <RightCircleFilled className="right-arrow" />
    </span>
  );
};

const NftCarousel = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <Carousel
      prevArrow={<CustomPrevArrow />}
      nextArrow={<CustomNextArrow />}
      afterChange={onChange}
    >
      <div>
        <div className="contentStyle">
          <CarouselUser />
          {/* <CustomPrevArrow />
          <CustomNextArrow /> */}
        </div>
      </div>
      <div>
        <h3 className="contentStyle">
          <CarouselUser />
        </h3>
      </div>
      <div>
        <h3 className="contentStyle">
          <CarouselUser />
        </h3>
      </div>
      <div>
        <h3 className="contentStyle">
          <CarouselUser />
        </h3>
      </div>
    </Carousel>
  );
};
export default NftCarousel;
