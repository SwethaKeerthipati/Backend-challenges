import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Productlist() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState();

  useEffect(() => {
    const fetchProductList = async () => {
      const response = await fetch(`/api/products/${id}`);
      const data = await response.json();
      setProduct(data);
    };

    if (id) {
      fetchProductList();
    }
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Name: {product.name}</h1>
      <p>Description: {product.description}</p>
      <p>
        Price: {product.price}
        {product.currency}
      </p>
      <p>Category: {product.category}</p>
    </div>
  );
}
