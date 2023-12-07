import React from "react";
import { Menu, Grid, Typography } from "antd";

import "./Navbar.css";
import { LockOutlined, SearchOutlined } from "@ant-design/icons";

const { Text } = Typography;
const { useBreakpoint } = Grid;

const RightMenu = () => {
  const { md } = useBreakpoint();

  return (
    <Menu mode={md ? "horizontal" : "inline"}>
      <Menu.Item key="search-icon">
        <a href="/#">
          <SearchOutlined className="search-icon" />
        </a>
      </Menu.Item>
      <Menu.Item key="lock-icon">
        <a href="/#">
          <LockOutlined className="lock-icon" />
        </a>
      </Menu.Item>
      <Menu.Item key="Signin">
        <a href="/#">
          <Text underline>Sign in</Text>
        </a>
      </Menu.Item>
    </Menu>
  );
};

export default RightMenu;
