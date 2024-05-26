import React, { useState } from "react";
import { Avatar, Button, Layout, Menu, Popconfirm, Dropdown } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  DashboardOutlined,
  SettingOutlined,
  MessageOutlined,
  SkinOutlined,
  UserOutlined,
  PoweroffOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import Sider from "antd/es/layout/Sider";
import Logo from "../../../public/logo-Thrift-shop.png";
import ImgComponent from "../Img";

const { Header, Content } = Layout;

const LayoutBaseAdmin = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);

  const handleLogout = () => {
    console.log("Logout confirmado");
    navigate("/login");
  };

  const handleToggleCollapse = () => {
    setCollapsed((prevCollapsed) => !prevCollapsed);
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
      icon: <MessageOutlined />,
      label: "Chat",
      path: "/admin/chat",
    },
    {
      key: "5",
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
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{ background: "#fff" }}
      >
        <div>
          <ImgComponent
            src={Logo}
            alt="Logotipo da Thrift Shop"
            className="custom-class p-8"
          />
        </div>

        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={menuItems.map((item) => ({
            key: item.key,
            icon: item.icon,
            label: item.label,
            onClick: item.path ? () => navigate(item.path) : undefined,
          }))}
        />
      </Sider>
      <Layout className="w-full h-full">
        <Header className="flex items-center justify-between p-0 bg-gray-100 w-full">
          <div className="flex items-center">
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={handleToggleCollapse}
              style={{ fontSize: "16px", width: 64, height: 64 }}
            />
          </div>

          <div className="flex-grow"></div>
          <Dropdown menu={{ items: profileMenuItems }} placement="bottomRight">
            <div className="flex items-center justify-end space-x-4 mr-4 cursor-pointer">
              <Avatar />
              <p className="m-0">Admin</p>
            </div>
          </Dropdown>
        </Header>

        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default LayoutBaseAdmin;
