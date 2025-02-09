import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function Product() {
  return (
    <div>
      <h2>Cookies</h2>
      <p>Price: 999 usd</p>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <h1>Products</h1>
      <Product />
      <Product />
      <Product />
    </div>
  );
}

// Ім'я компонента обов'язково повинно починатися з великої літери.
// Назви компонентів з маленької літери зарезервовані для HTML - елементів.
// Якщо ви спробуєте назвати компонент product, а не Product, під час рендеру React проігнорує його та відрендерить тег < product ></ >.
