import React, { useEffect, useState } from "react";
import { Menu, Grid, Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import "./Navbar.css";
const SubMenu = Menu.SubMenu;
const { Item } = Menu;

const { useBreakpoint } = Grid;

const LeftMenu = () => {
  const { md } = useBreakpoint();
  console.log(md);
  return (
    <Menu mode={md ? "horizontal" : "inline"}>
      <Breadcrumb className="navbar-items">
        <Breadcrumb.Item className="navbar-item">
          <Link to="/art">Art</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item className="navbar-item">
          <Link to="/community">Community</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item className="navbar-item">
          <Link to="/magazine">Magazine</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item className="navbar-item">
          <Link to="/shop">Shop</Link>
        </Breadcrumb.Item>
      </Breadcrumb>
    </Menu>
  );
};

export default LeftMenu;
