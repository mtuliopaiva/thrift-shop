import React from 'react';
import 'antd/dist/reset.css'; 
import { Button } from 'antd';

const App: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Thrift Shop</h1>
      <Button type="primary" className="mb-4">Ant Design Button</Button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Tailwind Button
      </button>
    </div>
  );
}

export default App;
