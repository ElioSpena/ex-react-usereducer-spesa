export default function Cart({ dispatch, state }) {
  const totalPrice = state.reduce((acc, p) => acc + p.price * p.quantity, 0);

  return (
    <section>
      <h2>Carrello:</h2>
      {state.map((p, id) => (
        <div key={id} className="card">
          <h2>{p.name}</h2>
          <span>{p.price} €</span>
          <span>Quantità:</span>
          <input
            value={p.quantity}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_QUANTITY",
                payload: { name: p.name, value: e.target.value },
              })
            }
            type="number"
            placeholder="1"
          />
          <button onClick={() => dispatch({ type: "REMOVE_ITEM", payload: p })}>
            Rimuovi dal carrello
          </button>
        </div>
      ))}
      <h2>Totale da pagare: {totalPrice.toFixed(2)} € </h2>
    </section>
  );
}
