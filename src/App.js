import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [productData, setProductData] = useState([]);
  const getProductData = async () => {
    const response = await fetch("https://3sb655pz3a.execute-api.ap-southeast-2.amazonaws.com/live/product");
    const data = await response.json();
    setProductData(data);
  };
  useEffect(() => {
    getProductData();
  }, []);

  return (
    <div className="App">
      <header>
        <img src={productData.imageURL} alt={productData.title} />
      </header>
      <body>
        <p>
          <div>{productData.title}</div>
          Hello world
        </p>
      </body>
    </div>
  );
}

export default App;
