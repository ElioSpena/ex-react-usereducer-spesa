import products from "../data/products";

export default function ShowProducts() {
  return (
    <section className="products">
      {products.map((p) => {
        return (
          <div className="card">
            <h2>{p.name}</h2>
            <span>{p.price} €</span>
          </div>
        );
      })}
    </section>
  );
}
