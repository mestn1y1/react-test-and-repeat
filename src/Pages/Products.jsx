import { ProductList } from "../components/ProductList/ProductList.jsx";
import { getProducts } from "../fakeApi.js";

export const Products = () => {
  const products = getProducts();

  return (
    <main>
      <ProductList products={products} />
    </main>
  );
};
