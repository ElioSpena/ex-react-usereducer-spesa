import ShowProducts from "../components/ShowProducts";
import Cart from "../components/Cart";
import { useState } from "react";

function App() {
  const [addedProducts, setAddedProducts] = useState([]);

  function updateProductQuantity(productName, value) {
    let roundValue = Number(value);
    if (roundValue < 1) roundValue = 1;

    setAddedProducts((prev) =>
      prev.map((p) =>
        p.name === productName ? { ...p, quantity: Math.round(roundValue) } : p,
      ),
    );
  }

  function removeFromCart(product) {
    setAddedProducts((prev) => prev.filter((p) => p.name !== product.name));
  }

  function addtoCart(product) {
    const existingProduct = addedProducts.find((p) => p.name === product.name);
    if (existingProduct) {
      updateProductQuantity(product.name, existingProduct.quantity + 1);
      return;
    }
    const newProd = { ...product, quantity: 1 };
    setAddedProducts([...addedProducts, newProd]);
  }

  return (
    <main>
      <ShowProducts addtoCart={addtoCart} />
      {addedProducts.length > 0 && (
        <Cart
          addedProducts={addedProducts}
          removeFromCart={removeFromCart}
          updateProductQuantity={updateProductQuantity}
        />
      )}
    </main>
  );
}

export default App;
