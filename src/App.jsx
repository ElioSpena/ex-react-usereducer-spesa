import ShowProducts from "../components/ShowProducts";
import Cart from "../components/Cart";
import { useState } from "react";

function App() {
  const [addedProducts, setAddedProducts] = useState([]);

  function updateProductQuantity(productName) {
    setAddedProducts((prev) =>
      prev.map((p) =>
        p.name === productName ? { ...p, quantity: p.quantity + 1 } : p,
      ),
    );
  }

  function removeFromCart(product) {
    setAddedProducts((prev) => prev.filter((p) => p.name !== product.name));
  }

  function addtoCart(product) {
    if (addedProducts.find((p) => p.name === product.name)) {
      updateProductQuantity(product.name);
      return;
    }
    const newProd = { ...product, quantity: 1 };
    setAddedProducts([...addedProducts, newProd]);
  }

  return (
    <main>
      <ShowProducts addtoCart={addtoCart} />
      {addedProducts.length > 0 && (
        <Cart addedProducts={addedProducts} removeFromCart={removeFromCart} />
      )}
    </main>
  );
}

export default App;
