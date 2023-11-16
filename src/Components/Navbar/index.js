import React, { useEffect, useState } from "react";
import LeftMenu from "./LeftMenu";
import RightMenu from "./RightMenu";
import { Drawer, Menu } from "antd";
import logo from "../../Images/Logo.png";
import navbarIcon from "../../Images/navbar-icon.png";
import "./Navbar.css";

const Navbar = () => {
  const menuItems = ["Art", "Community", "Magazine", "Shop", "Sign in"];
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <nav className="menuBar">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="menu-content">
          <div className="leftMenu">
            <LeftMenu />
          </div>
          <div className="rightMenu">
            <RightMenu />
          </div>
          <div className="barsMenu" onClick={showDrawer}>
            <img src={navbarIcon} onClick={showDrawer} alt="navbar-icon" />
          </div>
          <Drawer
            title="Basic Drawer"
            placement="right"
            closable={false}
            onClose={onClose}
            open={open}
            key={"right"}
          >
            <Menu mode={"inline"}>
              {menuItems.map((item) => {
                return (
                  <Menu.Item key={item}>
                    <a href="#">{item}</a>
                  </Menu.Item>
                );
              })}
            </Menu>
          </Drawer>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
