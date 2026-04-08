export default function Cart({ addedProducts }) {
  return (
    <section>
      <h2>Carrello:</h2>
      {addedProducts.length > 0 &&
        addedProducts.map((p, id) => (
          <div key={id} className="card">
            <h2>{p.name}</h2>
            <span>{p.price} €</span>
            <span>Quantità: {p.quantity}</span>
          </div>
        ))}
    </section>
  );
}
