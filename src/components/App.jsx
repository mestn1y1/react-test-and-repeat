// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { Product } from "./Product.jsx";
import "./App.css";

export const App = () => {
  return (
    <div>
      <h1>Best selling</h1>
      <Product
        name="Tacos with lime"
        imageURL="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
        price={10.99}
      />
      <Product
        name="Fries and burger"
        imageURL="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
        price={14.29}
      />
      <Product />
    </div>
  );
};

// components
// Ім'я компонента обов'язково повинно починатися з великої літери.
// Назви компонентів з маленької літери зарезервовані для HTML - елементів.
// Якщо ви спробуєте назвати компонент product, а не Product, під час рендеру React проігнорує його та відрендерить тег < product ></ >.

// props
// Пропси використовуються для передачі динамічних значень для компонента, наприклад, для використання в JSX-розмітці, використовуючи синтаксис {}.
