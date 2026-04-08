import products from "../data/products";

export default function ShowProducts({ addtoCart }) {
  return (
    <section className="products">
      {products.map((p, id) => {
        return (
          <div key={id} className="card">
            <h2>{p.name}</h2>
            <span>{p.price} €</span>
            <button onClick={() => addtoCart(p)}>Aggiungi al carrello</button>
          </div>
        );
      })}
    </section>
  );
}
