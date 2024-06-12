import { Button, Card, Carousel } from "antd";
import LayoutBaseLandingPage from "../../../components/LayoutBaseLandingPage";

const { Meta } = Card;

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: "200px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const StyleCarrosselCard: React.CSSProperties = {
  margin: 0,
  height: "420px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
};

const Store = () => {
  return (
    <>
      <LayoutBaseLandingPage>
        <h1>Store Page</h1>
        <div className="w-full">
          <Carousel arrows infinite={false} dots={false}>
            <div>
              <h3 style={contentStyle}>1</h3>
            </div>
            <div>
              <h3 style={contentStyle}>2</h3>
            </div>
            <div>
              <h3 style={contentStyle}>3</h3>
            </div>
            <div>
              <h3 style={contentStyle}>4</h3>
            </div>
          </Carousel>
        </div>
        <div className="w-full mt-8">
          <div>
            <div
              className="flex justify-center space-x-4"
              style={StyleCarrosselCard}
            >
              <Card
                hoverable
                style={{ width: 240, height: 400 }}
                cover={
                  <img
                    alt="example"
                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                  />
                }
              >
                <Meta
                  title="Camiseta Branca Esportiva - Nike"
                  description="www.instagram.com"
                />
              </Card>

              <Card
                hoverable
                style={{ width: 240, height: 400 }}
                cover={
                  <img
                    alt="example"
                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                  />
                }
              >
                <Meta
                  title="Europe Street beat"
                  description="www.instagram.com"
                />
              </Card>
              <Card
                hoverable
                style={{ width: 240, height: 400 }}
                cover={
                  <img
                    alt="example"
                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                  />
                }
              >
                <Meta
                  title="Europe Street beat"
                  description="www.instagram.com"
                />
              </Card>

              <Card
                hoverable
                style={{ width: 240, height: 400 }}
                cover={
                  <img
                    alt="example"
                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                  />
                }
              >
                <Meta
                  title="Europe Street beat"
                  description="www.instagram.com"
                />
              </Card>
            </div>
          </div>
        </div>

        <div className="w-full mt-8">
          <div>
            <div
              className="flex justify-center space-x-4"
              style={StyleCarrosselCard}
            >
              <Card
                hoverable
                style={{ width: 240, height: 400 }}
                cover={
                  <img
                    alt="example"
                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                  />
                }
              >
                <Meta
                  title="Camiseta Branca Esportiva - Nike"
                  description={<Button>Comprar</Button>}
                />
              </Card>
            </div>
          </div>
        </div>
      </LayoutBaseLandingPage>
    </>
  );
};

export default Store;
