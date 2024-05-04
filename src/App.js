import { useState, useEffect } from "react";
import { Product } from "./components/Product/Product.js";
import AddToCart, { Button } from "./components/Button/Button.js";
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
      {productData && <Product title={productData.title} description={productData.description} imageURL={productData.imageURL} sizeOptions={productData.sizeOptions} onSizeClick={(size) => {
        alert("size clicked" + size)
      }} />}
      <Button onClick={() => {
        setCart(cart.concat(productData))
      }} />
      <Cart cart={cart} />
    </div >
  );
}

export default App;
