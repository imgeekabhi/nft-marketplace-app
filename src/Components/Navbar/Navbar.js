import React from "react";
import "./Navbar.css";
import logo from "../../Images/Logo.png";
import navbarIcon from "../../Images/navbar-icon.png";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { LockOutlined, SearchOutlined } from "@ant-design/icons";
const { Header, Content, Footer } = Layout;
const Navbar = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className="layout">
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "white",
          justifyContent: "space-between",
        }}
      >
        <div className="left-nav">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>

          <Breadcrumb className="navbar-items">
            <Breadcrumb.Item className="navbar-item">Art</Breadcrumb.Item>
            <Breadcrumb.Item className="navbar-item">Community</Breadcrumb.Item>
            <Breadcrumb.Item className="navbar-item">Magazine</Breadcrumb.Item>
            <Breadcrumb.Item className="navbar-item">Shop</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="right-nav">
          <div className="right-nav-btns">
            <SearchOutlined className="search-icon" />
            <LockOutlined className="lock-icon" />
            <div className="signin-btn">
              <a href="#">Sign&nbsp;in</a>
            </div>
          </div>
          <div className="navbar-icon">
            <img src={navbarIcon} alt="navbar icon" />
          </div>
        </div>
      </Header>
    </Layout>
  );
};
export default Navbar;
