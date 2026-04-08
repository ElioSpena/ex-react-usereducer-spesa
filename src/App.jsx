import ShowProducts from "../components/ShowProducts";
import Cart from "../components/Cart";
import { useState } from "react";

function App() {
  const [addedProducts, setAddedProducts] = useState([]);

  function addtoCart(product) {
    if (addedProducts.find((p) => p.name === product.name)) return;
    const newProd = { ...product, quantity: 1 };
    setAddedProducts([...addedProducts, newProd]);
  }

  return (
    <main>
      <ShowProducts addtoCart={addtoCart} />
      <Cart addedProducts={addedProducts} />
    </main>
  );
}

export default App;
