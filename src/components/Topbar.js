import React from "react";
import Header from "../components/Header";

import { Layout, Avatar, Dropdown, Badge, Menu } from "antd";

import { UserOutlined, BellOutlined} from "@ant-design/icons";
import { Link } from "react-router-dom";

const { header } = Layout;

const menu = (
  
  <Menu>
    <Menu.Item icon={<UserOutlined />}>
      <Link to="/profile">Profile</Link>
    </Menu.Item>

    <Menu.Item icon={<UserOutlined />}>
      <Link to="/">Logout</Link>
    </Menu.Item>

    <Menu.Item icon={<UserOutlined />}>
      <Link to="/login">Login</Link>
    </Menu.Item>
  </Menu>
);

function Topbar() {
  return (
  <>
       
      <header className="header">
  
      
      <Header/>  

      
      <Badge count={5} dot className="notification__icon">
        <BellOutlined />
      </Badge>

      <Dropdown overlay={menu} placement="bottomRight" arrow={true}>
        <div className="user__btn">
          <Avatar
            className="avatar"
            style={{
              color: "#f56a00",
              backgroundColor: "#fde3cf",
            }}
            icon={<UserOutlined />}
          />
          <h4>Shoaib</h4>
        </div>
      </Dropdown>
      

    </header>
    </>
  );
}

export default Topbar;
