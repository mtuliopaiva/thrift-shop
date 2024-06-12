import React from "react";
import { Avatar, Layout, Menu, Popconfirm, Dropdown } from "antd";

import { useNavigate } from "react-router-dom";

const { Header, Content, Footer } = Layout;

const items = [
  {
    key: 1,
    label: "Home",
    path: "/home",
  },
  {
    key: 2,
    label: "Quem somos",
    path: "/quem-somos",
  },
  {
    key: 3,
    label: "Quem somos",
    path: "/quem-somos",
  },
  {
    key: 4,
    label: "Quem somos",
    path: "/quem-somos",
  },
];

const LayoutBaseLandingPage = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("Logout confirmado");
    navigate("/");
  };

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
    <Layout className="min-h-screen w-full">
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
            style={{ backgroundColor: "#A8E7DD", borderBottom: "none" }}
          />
        </div>

        {/* Div 3: Dropdown */}
        <div className="flex items-center justify-end w-1/3 space-x-4 mr-4 cursor-pointer">
          <Dropdown
            menu={{ items: profileMenuItems }}
            placement="bottomRight"
          >
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

      <Content className="w-full p-8 bg-[#fff] flex-grow">{children}</Content>
      
      <Footer className="flex items-center justify-between p-0 bg-[#A8E7DE] w-full h-[150px] pl-12 pr-12">
        <div className="flex items-center justify-start w-1/3">
          <img
            src="../../../public/footer-logo.png"
            alt="Logo da Thrift shop"
            className="w-[40%]"
          />
        </div>
        <div className="flex flex-col items-center w-1/3 mr-4 cursor-pointer">
          <div>
            <p>Conheça nossas políticas:</p>
          </div>
          <div className="flex flex-col items-center">
            <p>Políticas de Frete</p>
            <p>Políticas de Privacidade</p>
          </div>
        </div>
        <div className="flex flex-col items-end w-1/3 mr-4 cursor-pointer">
          <div>
            <p>Siga nossas redes sociais:</p>
          </div>
          <div className="flex space-x-4 mt-2">
            <img
              src="../../../public/instagram-icon.svg"
              alt="Logo do Instagram da Thrift Shop"
              className="w-8 h-8"
            />
            <img
              src="../../../public/wpp-icon.svg"
              alt="Logo do WhatsApp da Thrift Shop"
              className="h-6 w-6"
            />
            <img
              src="../../../public/youtube-icon.svg"
              alt="Logo do YouTube da Thrift Shop"
              className="w-8 h-8"
            />
          </div>
        </div>
      </Footer>
    </Layout>
  );
};

export default LayoutBaseLandingPage;
