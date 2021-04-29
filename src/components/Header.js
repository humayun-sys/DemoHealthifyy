import React from "react";
//import { Link } from "react-router-dom";
import {  Menu } from "antd";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header-menu">
      {/* <div className="logo__wrapper">
        <h1>
          <Link to="/">heathyfy</Link>
        </h1>
        
      </div> */}
      <Menu theme="white" mode="horizontal" defaultSelectedKeys={["6"]}>
          <Menu.Item key="1">
                <Link to ="/healthify-care">HealthifyCare </Link> 
          </Menu.Item>  


          <Menu.Item key="2">
                <Link to ="/our-story">Our Story </Link> 
          </Menu.Item>


          <Menu.Item key="3">
                <Link to ="/careers">Careers</Link> 
          </Menu.Item>

        <Menu.Item key="4">
            <Link to ="/blog">Blog</Link>
            </Menu.Item>

        <Menu.Item key="5">
                <Link to ="/Team">Our Team </Link> 
          </Menu.Item>
          <Menu.Item key="6">
                <Link to ="/our-coaches">Our Coaches</Link> 
          </Menu.Item>
        
        
        
        
      </Menu> 
      
     </header>


    
  );
}

export default Header;
