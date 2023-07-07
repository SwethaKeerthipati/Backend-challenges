import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());
export default function ProductsPage() {
  const { data, error } = useSWR("/api/products", fetcher);
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div>
      <h1>All Products</h1>
      <ul>
        {data.map((product) => (
          <li key={product.id}>
            <h2>Name:{product.name}</h2>
            <p>Description:{product.description}</p>
            <p>
              Price : {product.price}
              {product.currency}
            </p>
            <p>Category :{product.category}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
