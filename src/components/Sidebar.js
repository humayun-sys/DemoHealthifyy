import React, { Component } from "react";

import { Menu, Layout } from "antd";

import {
  VideoCameraOutlined,
  PieChartOutlined,ReadFilled,
  WechatOutlined,DeliveredProcedureOutlined,
  SettingOutlined,MedicineBoxFilled,
  AppstoreAddOutlined,StarFilled,
  BookFilled,
  TeamOutlined,
  PlayCircleOutlined,
  TagOutlined,
} from "@ant-design/icons";

import { Link } from "react-router-dom";

const { Sider } = Layout;

class Sidebar extends Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;

    return (
      <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
        <div className="logo">
          {collapsed ? <h1>H</h1> : <h1>Healthify</h1>}
        </div>
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            <Link to="/">Dashboard</Link>
          </Menu.Item>

          {/* <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            <Link to="/book-your-sessions">Book Your Sessions</Link>
          </Menu.Item> */}
          <Menu.Item key="3" icon={<PlayCircleOutlined/>}>
            <Link to="/Workout-statistic">Workout statistic</Link>
          </Menu.Item>

          <Menu.Item key="4" icon={<StarFilled />}>
            <Link to="/Workout-plan">Workout plan</Link>
          </Menu.Item>

          <Menu.Item key="5" icon={<MedicineBoxFilled />}>
            <Link to="/mental-wellness">Mental Wellness</Link>
          </Menu.Item>

          <Menu.Item key="6" icon={<DeliveredProcedureOutlined />}>
            <Link to="/Diet-Food-Menu">Diet Food Menu</Link>
          </Menu.Item>

          <Menu.Item key="7" icon={<ReadFilled />}>
            <Link to="/Personal-Record">Personal Record</Link>
          </Menu.Item>

         <Menu.Item key="8" icon={<AppstoreAddOutlined />}>
            <Link to="/Our-Application">Our Application</Link>
          </Menu.Item>

          <Menu.Item key="9" icon={<VideoCameraOutlined />}>
            <Link to="/my-plans">My Plans</Link>
          </Menu.Item>

          <Menu.Item key="10" icon={<WechatOutlined />}>
            <Link to="/health-logs">Health logs</Link>
          </Menu.Item>

          <Menu.Item key="11" icon={<BookFilled />}>
            <Link to="/snap">Snap</Link>
          </Menu.Item>

          <Menu.Item key="12" icon={<AppstoreAddOutlined />}>
            <Link to="/app-and-device">Apps and device</Link>
          </Menu.Item>

          <Menu.Item key="13" icon={<TeamOutlined />}>
            <Link to="/healthify-your-workplace">Healthify your Workplace</Link>
          </Menu.Item>

          <Menu.Item key="14" icon={<TagOutlined />}>
            <Link to="activate-plan">Activate plan</Link>
          </Menu.Item>


          <Menu.Item key="15" icon={<SettingOutlined />}>
            <Link to="settings">Settings</Link>
          </Menu.Item>

          

        </Menu>
      </Sider>
    );
  }
}

export default Sidebar;
