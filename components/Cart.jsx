export default function Cart({
  addedProducts,
  removeFromCart,
  updateProductQuantity,
}) {
  const totalPrice = addedProducts.reduce(
    (acc, p) => acc + p.price * p.quantity,
    0,
  );

  return (
    <section>
      <h2>Carrello:</h2>
      {addedProducts.map((p, id) => (
        <div key={id} className="card">
          <h2>{p.name}</h2>
          <span>{p.price} €</span>
          <span>Quantità:</span>
          <input
            value={p.quantity}
            onChange={(e) => updateProductQuantity(p.name, e.target.value)}
            type="number"
            placeholder="1"
          />
          <button onClick={() => removeFromCart(p)}>
            Rimuovi dal carrello
          </button>
        </div>
      ))}
      <h2>Totale da pagare: {totalPrice.toFixed(2)} € </h2>
    </section>
  );
}
