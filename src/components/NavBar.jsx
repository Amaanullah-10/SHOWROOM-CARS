import React from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import {Link,Routes,Route} from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';
const NavBar = () => {
  return (
    <div className="nav-container">
        <div className="logo-container">
            <Typography.Title level={2} className="logo"><Link to="/">The Showroom</Link></Typography.Title> 
        </div>  
        <Menu theme="dark">
            <Menu.Item icon={<HomeOutlined/>} >
            <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item >
            <Link to="/Ferraris">Ferraris</Link>
            </Menu.Item>
            <Menu.Item >
            <Link to="/Tesla">Tesla</Link>
            </Menu.Item>
            <Menu.Item >
            <Link to="/SUV">SUV</Link>
            </Menu.Item>
            <Menu.Item >
            <Link to="/LAMBOS">LAMBOS</Link>
            </Menu.Item>
            </Menu>
    </div>
  );
};

export default NavBar