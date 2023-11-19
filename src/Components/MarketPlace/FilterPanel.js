import React from "react";
import "./MarketPlace.css";
import FilterImage from "../../Images/filter.png";
import ColumnImage from "../../Images/column.png";
import ListImage from "../../Images/List.png";
import { Button, Dropdown, Flex, Input, Space, Grid } from "antd";
import {
  DownOutlined,
  FilterOutlined,
  SearchOutlined,
} from "@ant-design/icons";
const { useBreakpoint } = Grid;
const FilterPanel = () => {
  const screens = useBreakpoint();

  const items = [
    {
      label: "1st item",
      key: "1",
    },
    {
      label: "2nd item",
      key: "2",
    },
    {
      label: "3rd item",
      key: "3",
    },
  ];
  const handleMenuClick = (e) => {
    console.log("click", e);
  };
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };
  const onSearch = (data) => {
    console.log(data);
  };
  return (
    <>
      <Flex
        className="filter-panel-container"
        gap="large"
        justify={"center"}
        align={"center"}
        wrap={screens.xs ? "wrap" : "nowrap"}
      >
        <Button className="filter-btn">
          {/* <img className="filter-icons" src={FilterImage} alt="FilterImage" /> */}
          <FilterOutlined />
          Filters
        </Button>
        <Dropdown menu={menuProps}>
          <Button className="trending-btn">
            <Space>
              NFT’s
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>

        <Input
          className="search-bar"
          placeholder="Search by collection, user or NFT..."
          onSearch={onSearch}
          suffix={
            <Button
              className="search-btn"
              icon={<SearchOutlined />}
              onClick={onSearch}
            />
          }
        ></Input>
        <Dropdown menu={menuProps}>
          <Button className="trending-btn">
            <Space>
              Trending
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
        <Button className="column-btn">
          <img className="filter-icons" src={ColumnImage} alt="ColumnImage" />
        </Button>
        <Button className="list-btn">
          <img className="list-icon" src={ListImage} alt="ListImage" />
        </Button>
      </Flex>
    </>
  );
};

export default FilterPanel;
