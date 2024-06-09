import { Card, Statistic } from "antd";
import { ArrowUpOutlined } from "@ant-design/icons";
import TextComponent from "../../../components/TextComponent";
import LayoutBaseAdmin from "../../../components/LayoutBaseAdmin";
import LineGraphComponent from "../../../components/Charts/LineGraphComponent";

const DashboardPage = () => {
  return (
    <>
      <LayoutBaseAdmin>
        <div className="w-full h-screen">
          <TextComponent
            size="2em"
            weight="700"
            color="#243D5C"
            className="my-6"
          >
            Dashboard
          </TextComponent>
          <div className="w-full flex justify-between">
            <div className="w-1/3 m-2">
              <Card bordered={false}>
                <Statistic
                  title="Vendas"
                  value={1200}
                  precision={2}
                  valueStyle={{ color: "#3f8600" }}
                  suffix={<ArrowUpOutlined />}
                  prefix="R$"
                />
              </Card>
            </div>
            <div className="w-1/3 m-2">
              <Card bordered={false}>
                <Statistic
                  title="Produtos Cadastrados"
                  value={11.28}
                  precision={2}
                  valueStyle={{ color: "#3f8600" }}
                  prefix={<ArrowUpOutlined />}
                  suffix="%"
                />
              </Card>
            </div>
            <div className="w-1/3 m-2">
              <Card bordered={false}>
                <Statistic
                  title="Clientes Registrados"
                  value={23}
                  precision={0}
                  valueStyle={{ color: "#3f8600" }}
                  prefix="+"
                />
              </Card>
            </div>
          </div>
            <LineGraphComponent />
        </div>
      </LayoutBaseAdmin>
    </>
  );
};

export default DashboardPage;
