import ShowProducts from "../components/ShowProducts";
import Cart from "../components/Cart";
import { useReducer } from "react";

function App() {
  const [state, dispatch] = useReducer(cartReducer, []);

  function cartReducer(state, action) {
    switch (action.type) {
      case "ADD_ITEM":
        const product = action.payload;
        const existingProduct = state.find((p) => p.name === product.name);
        if (existingProduct) {
          return state.map((p) =>
            p.name === product.name ? { ...p, quantity: p.quantity + 1 } : p,
          );
        }
        return [...state, { ...product, quantity: 1 }];

      case "REMOVE_ITEM":
        return state.filter((p) => p.name !== action.payload.name);

      case "UPDATE_QUANTITY":
        let roundValue = Number(action.payload.value);
        if (roundValue < 1) roundValue = 1;
        return state.map((p) =>
          p.name === action.payload.name
            ? { ...p, quantity: Math.round(roundValue) }
            : p,
        );

      default:
        return state;
    }
  }

  return (
    <main>
      <ShowProducts dispatch={dispatch} />
      {state.length > 0 && <Cart dispatch={dispatch} state={state} />}
    </main>
  );
}

export default App;
