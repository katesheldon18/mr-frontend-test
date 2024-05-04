import { Product } from "./components/Product/Product.js";
import { Size } from "./components/Sizes/Sizes.js";
import { Button } from "./components/Button/Button.js";
import { Cart } from "./components/Cart/Cart.js";

function App() {

  return (
    <div className="App">
      <Product />
      <Size />
      <Button />
      <Cart />
    </div >
  );
}

export default App;
