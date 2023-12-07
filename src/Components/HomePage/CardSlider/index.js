import React, { useEffect, useRef, useState } from "react";
import "../HomePage.css";
import { Button, Carousel, Flex, Space } from "antd";
import MarketPlaceCard from "../../MarketPlace/MarketPlaceCard";
import {
  LeftCircleFilled,
  RightCircleFilled,
  RightOutlined,
} from "@ant-design/icons";

const CardSlider = () => {
  const carouselRef = useRef(null);
  const [slidesToShow, setSlidesToShow] = useState(3.1);

  const updateSlidesToShow = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth > 1141) {
      setSlidesToShow(3.1);
    } else if (screenWidth <= 1141 && screenWidth > 700) {
      setSlidesToShow(2.1);
    } else {
      setSlidesToShow(1);
    }
  };
  useEffect(() => {
    updateSlidesToShow();

    window.addEventListener("resize", updateSlidesToShow);

    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, []);

  const goToNext = () => {
    carouselRef.current.next();
  };

  const goToPrev = () => {
    carouselRef.current.prev();
  };
  return (
    <div className="card-slider-container">
      <Flex className="feature-flex-box" align="center" justify="space-between">
        <h2>Featured</h2>
        <a href="#">
          See all
          <span>
            <RightOutlined />
          </span>
        </a>
      </Flex>
      <Carousel
        ref={carouselRef}
        arrows={true}
        slidesToShow={slidesToShow}
        dots={false}
        infinite={false}
        beforeChange={updateSlidesToShow}
      >
        <MarketPlaceCard />
        <MarketPlaceCard />
        <MarketPlaceCard />
        <MarketPlaceCard />
      </Carousel>
      <Space className="slider-buttons">
        <LeftCircleFilled className="left-slider-btn" onClick={goToPrev} />
        <RightCircleFilled className="right-slider-btn" onClick={goToNext} />
      </Space>
    </div>
  );
};

export default CardSlider;
