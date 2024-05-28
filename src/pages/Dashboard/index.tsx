import { Card, Statistic } from "antd";
import LayoutBaseAdmin from "../../components/LayoutBaseAdmin";
import TextComponent from "../../components/TextComponent";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";

const DashboardPage = () => {
  return (
    <>
      <LayoutBaseAdmin>
        <div className="w-full">
          <TextComponent
            size="2em"
            weight="700"
            color="#243D5C"
            className="mb-6"
          >
            Dashboard
          </TextComponent>
          <div className="w-full flex justify-between">
            <div className="w-1/3 m-2">
              <Card bordered={false}>
                <Statistic
                  title="Active"
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
                  title="Active"
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
                  title="Active"
                  value={11.28}
                  precision={2}
                  valueStyle={{ color: "#3f8600" }}
                  prefix={<ArrowUpOutlined />}
                  suffix="%"
                />
              </Card>
            </div>
          </div>
        </div>
      </LayoutBaseAdmin>
    </>
  );
};

export default DashboardPage;
