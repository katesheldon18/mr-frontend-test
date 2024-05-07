import { useState, useEffect } from "react";
import { Header } from "./components/Header/Header.js";
import { Product } from "./components/Product/Product.js";
import { Cart } from "./components/Cart/Cart.js";

function App() {
  const [cart, setCart] = useState([]);
  const [productData, setProductData] = useState();
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
      <Header cart={cart} />
      {productData && <Product
        imageURL={productData.imageURL}
        title={productData.title}
        price={productData.price}
        description={productData.description}
        sizeOptions={productData.sizeOptions}
        size={productData.size}
        onSizeClick={(size) => {
          setProductData({ ...productData, size: size });
        }}
        onAddCartClick={() => {
          if (!productData.size) return;
          setCart(cart.concat(productData))
        }}
      />}
    </div >
  );
}

export default App;
