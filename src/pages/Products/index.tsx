import { Space, Table, TableProps, Tag } from "antd";
import LayoutBaseAdmin from "../../components/LayoutBaseAdmin";
import TextComponent from "../../components/TextComponent";

interface DataType {
  key: string;
  name: string;
  category: string;
  color: string;
  sizes: string[];
}

const ProductsPage = () => {

  const columns: TableProps<DataType>['columns'] = [
    {
      title: 'Nome',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Categoria',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'Cor',
      dataIndex: 'color',
      key: 'color',
    },
    {
      title: 'Tamanhos',
      key: 'sizes',
      dataIndex: 'sizes',
      render: (_, { sizes }) => (
        <>
          {sizes.map((size) => {
            let color;
            switch (size) {
              case 'PP':
                color = '#ffcccc'; // Vermelho claro
                break;
              case 'P':
                color = '#ff6666'; // Vermelho mais escuro
                break;
              case 'M':
                color = '#ffff99'; // Amarelo
                break;
              case 'G':
                color = '#cc99ff'; // Roxo claro
                break;
              case 'GG':
                color = '#9933ff'; // Roxo mais escuro
                break;
              default:
                  color = '#add8e6';
                break;
            }
            return (
              <Tag color={color} key={size} style={{color:'#000', fontWeight:'700'}}>
                {size.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  const data: DataType[] = [
    {
      key: '1',
      name: 'Camiseta listrada - Nike',
      category: 'Camiseta',
      color: 'Branco/Preto',
      sizes: ['P', 'PP', 'M' , 'G', 'GG'],
    },
  ];

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
            Produtos
          </TextComponent>

          <Table columns={columns} dataSource={data} />
          
            
        </div>
      </LayoutBaseAdmin>
    </>
  );
};

export default ProductsPage;
