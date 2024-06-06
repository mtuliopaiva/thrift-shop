import { Input, Popconfirm, TableProps, Tag } from "antd";
import LayoutBaseAdmin from "../../../components/LayoutBaseAdmin";
import TextComponent from "../../../components/TextComponent";
import {
  QuestionCircleOutlined,
  EditTwoTone,
  DeleteTwoTone,
  EyeTwoTone,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

import { InboxOutlined, UploadOutlined } from "@ant-design/icons";
import {
  Button,
  Checkbox,
  Col,
  ColorPicker,
  Form,
  InputNumber,
  Radio,
  Rate,
  Row,
  Select,
  Slider,
  Space,
  Switch,
  Upload,
} from "antd";

const { Option } = Select;

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 },
};

const normFile = (e: any) => {
  console.log("Upload event:", e);
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const onFinish = (values: any) => {
  console.log("Received values of form: ", values);
};

const ProductsCreate = () => {
  const navigate = useNavigate();

  // const columns: TableProps<DataType>["columns"] = [
  //   {
  //     title: "Nome",
  //     dataIndex: "name",
  //     key: "name",
  //     render: (text) => <a>{text}</a>,
  //   },
  //   {
  //     title: "Categoria",
  //     dataIndex: "category",
  //     key: "category",
  //   },
  //   {
  //     title: "Marca",
  //     dataIndex: "brand",
  //     key: "brand",
  //   },
  //   {
  //     title: "Cor",
  //     dataIndex: "color",
  //     key: "color",
  //   },
  //   {
  //     title: "Tamanhos",
  //     key: "sizes",
  //     dataIndex: "sizes",
  //     render: (_, { sizes }) => (
  //       <>
  //         {sizes.map((size) => {
  //           let color;
  //           switch (size) {
  //             case "PP":
  //               color = "#ffcccc"; // Vermelho claro
  //               break;
  //             case "P":
  //               color = "#ff6666"; // Vermelho mais escuro
  //               break;
  //             case "M":
  //               color = "#ffff99"; // Amarelo
  //               break;
  //             case "G":
  //               color = "#cc99ff"; // Roxo claro
  //               break;
  //             case "GG":
  //               color = "#9933ff"; // Roxo mais escuro
  //               break;
  //             default:
  //               color = "#add8e6";
  //               break;
  //           }
  //           return (
  //             <Tag
  //               color={color}
  //               key={size}
  //               style={{ color: "#000", fontWeight: "700" }}
  //             >
  //               {size.toUpperCase()}
  //             </Tag>
  //           );
  //         })}
  //       </>
  //     ),
  //   },
  //   {
  //     title: "Ações",
  //     render: () => (
  //       <div className="flex md:flex-1 flex-row gap-4 h-18 md:h-auto items-center justify-center md:w-full">
  //         <Button className="flex h-8 w-8 items-center justify-center rounded bg-[#B0F7E5]">
  //           <EyeTwoTone twoToneColor="#284361" />
  //         </Button>

  //         <Button className="flex h-8 w-8 items-center justify-center rounded bg-[#B0F7E5]">
  //           <EditTwoTone twoToneColor="#284361" />
  //         </Button>

  //         <Popconfirm
  //           title="Excluir o Produto?"
  //           description="Tem certeza que deseja deletar o produto?"
  //           icon={<QuestionCircleOutlined style={{ color: "red" }} />}
  //           okType="danger"
  //           cancelButtonProps={{ className: "custom-cancel-button" }}
  //           placement="top"
  //           okText="Sim"
  //           cancelText="Não"
  //         >
  //           <Button className="flex h-8 w-8 items-center justify-center rounded bg-[#B0F7E5]">
  //             <DeleteTwoTone twoToneColor="#284361" />
  //           </Button>
  //         </Popconfirm>
  //       </div>
  //     ),
  //   },
  // ];

  // const data: DataType[] = [
  //   {
  //     key: "1",
  //     name: "Camiseta listrada - Nike",
  //     category: "Camiseta",
  //     brand: "Nike",
  //     color: "Branco/Preto",
  //     sizes: ["P", "PP", "M", "G", "GG"],
  //   },
  //   {
  //     key: "2",
  //     name: "Calça jeans skinny - Levi's",
  //     category: "Calça",
  //     brand: "Levi's",
  //     color: "Azul",
  //     sizes: ["38", "40", "42", "44", "46"],
  //   },
  //   {
  //     key: "3",
  //     name: "Tênis esportivo - Adidas",
  //     category: "Tênis",
  //     brand: "Adidas",
  //     color: "Branco",
  //     sizes: ["38", "39", "40", "41", "42"],
  //   },
  //   {
  //     key: "4",
  //     name: "Camiseta básica - Puma",
  //     category: "Camiseta",
  //     brand: "Puma",
  //     color: "Cinza",
  //     sizes: ["P", "M", "G", "GG"],
  //   },
  //   {
  //     key: "5",
  //     name: "Calça moletom - Nike",
  //     category: "Calça",
  //     brand: "Nike",
  //     color: "Preto",
  //     sizes: ["P", "M", "G", "GG"],
  //   },
  //   {
  //     key: "6",
  //     name: "Tênis casual - Converse",
  //     category: "Tênis",
  //     brand: "Converse",
  //     color: "Preto",
  //     sizes: ["37", "38", "39", "40", "41"],
  //   },
  //   {
  //     key: "7",
  //     name: "Camiseta estampada - Vans",
  //     category: "Camiseta",
  //     brand: "Vans",
  //     color: "Preto/Vermelho",
  //     sizes: ["P", "PP", "M", "G", "GG"],
  //   },
  // ];

  return (
    <>
      <LayoutBaseAdmin>
        <div className="w-full flex flex-col w-full h-screen">
          <TextComponent
            size="2em"
            weight="700"
            color="#243D5C"
            className="my-6"
          >
            Criar Produto
          </TextComponent>
          <Form name="validate_other" onFinish={onFinish} layout="vertical">
            <div className="w-full flex">
              <div className="w-1/2 pr-4 h-[380px]">
                <Form.Item
                  name="dragger"
                  valuePropName="fileList"
                  getValueFromEvent={normFile}
                  noStyle
                >
                  <Upload.Dragger name="files" action="/upload.do">
                    <p className="ant-upload-drag-icon">
                      <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">
                      Click or drag file to this area to upload
                    </p>
                    <p className="ant-upload-hint">
                      Support for a single or bulk upload.
                    </p>
                  </Upload.Dragger>
                </Form.Item>
              </div>

              <div className="w-1/2 pr-4 h-[380px]">
                <div className="w-full flex gap-6">
                  <Form.Item
                    name="name"
                    label="Nome"
                    rules={[{ required: true }]}
                    className="w-1/3"
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item
                    name="brand"
                    label="Marca"
                    rules={[{ required: true }]}
                    className="w-1/3"
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item
                    name="category"
                    label="Categoria"
                    hasFeedback
                    rules={[
                      { required: true, message: "Selecione a categoria" },
                    ]}
                    className="w-1/3"
                  >
                    <Select placeholder="Selecione a categoria">
                      <Option value="shirt">Camisetas</Option>
                      <Option value="pants">Calças</Option>
                    </Select>
                  </Form.Item>
                </div>

                <Form.Item
                  name="colorOptions"
                  label="Cores"
                  rules={[
                    {
                      required: true,
                      message: "Please select your favourite colors!",
                      type: "array",
                    },
                  ]}
                >
                  <Select mode="multiple" placeholder="Selecione as cores">
                    <Option value="red">Vermelho</Option>
                    <Option value="green">Verde</Option>
                    <Option value="blue">Azul</Option>
                  </Select>
                </Form.Item>

                <Form.Item
                  name="sizeOptions"
                  label="Tamanhos"
                  rules={[
                    {
                      required: false,
                      message: "Please select the sizes!",
                      type: "array",
                    },
                  ]}
                >
                  <Select mode="multiple" placeholder="Selecione os tamanhos">
                    <Option value="extraSmall">PP</Option>
                    <Option value="small">P</Option>
                    <Option value="medium">M</Option>
                    <Option value="big">G</Option>
                    <Option value="extraBig">GG</Option>
                  </Select>
                </Form.Item>

                <Form.Item
                  name="sizeNumberOptions"
                  label="Tamanho numérico"
                  rules={[
                    {
                      required: false,
                      message: "Please select the sizes!",
                      type: "array",
                    },
                  ]}
                >
                  <Select mode="multiple" placeholder="Selecione os tamanhos">
                    <Option value="num35">35</Option>
                    <Option value="num36">36</Option>
                    <Option value="num37">37</Option>
                    <Option value="num38">38</Option>
                    <Option value="num39">39</Option>
                    <Option value="num40">40</Option>
                    <Option value="num41">41</Option>
                    <Option value="num42">42</Option>
                    <Option value="num43">43</Option>
                    <Option value="num44">44</Option>
                  </Select>
                </Form.Item>

                <Form.Item>
                  <div className="flex justify-end gap-6">

                    <Button
                      className="bg-[#fff] h-12"
                      size={"large"}
                      htmlType="reset"
                    >
                      Cancelar
                    </Button>

                    <Button
                      className="bg-[#A9E8DD] h-12"
                      size={"large"}
                      htmlType="submit"
                    >
                      Criar
                    </Button>
                  </div>
                </Form.Item>
              </div>
            </div>
          </Form>
        </div>
      </LayoutBaseAdmin>
    </>
  );
};

export default ProductsCreate;
