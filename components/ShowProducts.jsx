import products from "../data/products";

export default function ShowProducts({ dispatch }) {
  return (
    <section className="products">
      {products.map((p, id) => {
        return (
          <div key={id} className="card">
            <h2>{p.name}</h2>
            <span>{p.price} €</span>
            <button onClick={() => dispatch({ type: "ADD_ITEM", payload: p })}>
              Aggiungi al carrello
            </button>
          </div>
        );
      })}
    </section>
  );
}
