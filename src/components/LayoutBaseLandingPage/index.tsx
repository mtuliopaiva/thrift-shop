import React, { useState } from "react";
import { Avatar, Button, Layout, Menu, Popconfirm, Dropdown } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  DashboardOutlined,
  SettingOutlined,
  SkinOutlined,
  UserOutlined,
  PoweroffOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import Sider from "antd/es/layout/Sider";
import Logo from "../../../public/logo-Thrift-shop.png";
import ImgComponent from "../Img";
import ProfileImage from "../../../public/profile-image.png";

const { Header, Content, Footer } = Layout;

const items = [
    {
      key: 1,
      label: 'Home',
      path: '/home'
    },
    {
      key: 2,
      label: 'Quem somos',
      path: '/quem-somos'
    },
    {
        key: 3,
        label: 'Quem somos',
        path: '/quem-somos'
      },
      {
        key: 4,
        label: 'Quem somos',
        path: '/quem-somos'
      }
  ];

const LayoutBaseLandingPage = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("Logout confirmado");
    navigate("/");
  };

  const menuItems = [
    {
      key: "1",
      icon: <DashboardOutlined />,
      label: "Dashboard",
      path: "/admin/dashboard",
    },
    {
      key: "2",
      icon: <SkinOutlined />,
      label: "Products",
      path: "/admin/products",
    },
    {
      key: "3",
      icon: <UserOutlined />,
      label: "Clients",
      path: "/admin/clients",
    },
    {
      key: "4",
      icon: <SettingOutlined />,
      label: "Settings",
      path: "/admin/settings",
    },
    {
      key: "6",
      icon: <PoweroffOutlined />,
      label: (
        <Popconfirm
          title="Tem certeza que deseja sair?"
          onConfirm={handleLogout}
          okText="Sim"
          cancelText="Não"
        >
          <span>Logout</span>
        </Popconfirm>
      ),
    },
  ];

  const profileMenuItems = [
    {
      key: "1",
      label: (
        <a target="_blank" rel="noopener noreferrer" href="#">
          Profile
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <Popconfirm
          title="Tem certeza que deseja sair?"
          onConfirm={handleLogout}
          okText="Sim"
          cancelText="Não"
        >
          <span>Logout</span>
        </Popconfirm>
      ),
    },
  ];

  return (
    <Layout className="h-screen w-full">

      <Layout className="w-full h-full">
      <Header className="flex items-center h-[80px] bg-[#A8E7DD]">
      {/* Div 1: Imagem de Teste */}
      <div className="flex items-center justify-start w-1/3">
        <img
          src="../../../public/logo-store.png"
          alt="Logo da Thrift shop"
          className="w-[40%]"
        />
      </div>

      {/* Div 2: Menu Centralizado */}
      <div className="flex justify-center w-1/3">
        <Menu
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          items={items}
          style={{ backgroundColor: "#A8E7DD", borderBottom: 'none' }}
        />
      </div>

      {/* Div 3: Dropdown */}
      <div className="flex items-center justify-end w-1/3 space-x-4 mr-4 cursor-pointer">
        <Dropdown menu={{ items: profileMenuItems }} placement="bottomRight">
          <div className="flex items-center">
            <Avatar
              src="https://via.placeholder.com/40"
              style={{ border: "1px solid #B2F6E9" }}
            />
            <p className="m-0 ml-2">Admin</p>
          </div>
        </Dropdown>
      </div>
    </Header>

        <Content className="w-full h-full p-8 bg-[#fff]">{children}</Content>
        <Footer className="flex items-center justify-between p-0 bg-[#A8E7DE] w-full">
          Footer
        </Footer>
      </Layout>
    </Layout>
  );
};

export default LayoutBaseLandingPage;
