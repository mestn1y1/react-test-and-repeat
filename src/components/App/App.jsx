import { Routes, Route, NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./App.module.css";
import { About } from "../../Pages/About.jsx";
import { Home } from "../../Pages/Home.jsx";
import { NotFound } from "../../Pages/NotFound.jsx";
import { Products } from "../../Pages/Products.jsx";
import { ProductsDetails } from "../../Pages/ProductsDetails.jsx";

export const App = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  return (
    <div className={css.container}>
      <header className={css.header}>
        <p className={css.logo}>
          <span role="img" aria-label="computer icon">
            💻
          </span>{" "}
          GoMerch Store
        </p>

        <nav className={css.nav}>
          <NavLink to="/" className={buildLinkClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={buildLinkClass}>
            About
          </NavLink>
          <NavLink to="/products" className={buildLinkClass}>
            Products
          </NavLink>
        </nav>
      </header>

      {/* Додамо до нашої програми маршрут сторінки одного продукту з адресою /products/:productId.
       Це окрема сторінка, ніяк не прив'язана до /products - сторінці відображення всіх продуктів. */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductsDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
