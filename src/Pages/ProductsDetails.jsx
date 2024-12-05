// Для того, щоб отримати значення динамічної частини URL,
//  у нашому випадку ідентифікатор продукту,
// використовуємо хук useParams у компоненті сторінки продукту.

import { useParams } from "react-router-dom";
import { getProductById } from "../fakeApi.js";

export const ProductsDetails = () => {
  const { id } = useParams();
  const product = getProductById(id);

  return (
    <main>
      <img src="https://via.placeholder.com/960x240" alt="" />
      <div>
        <h2>
          Product - {product.name} - {id}
        </h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem,
          quia!
        </p>
      </div>
    </main>
  );
};
