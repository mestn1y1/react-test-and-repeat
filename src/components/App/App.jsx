import { Routes, Route, NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./App.module.css";
import { About } from "../../Pages/About.jsx";
import { Home } from "../../Pages/Home.jsx";
import { NotFound } from "../../Pages/NotFound.jsx";
import { Products } from "../../Pages/Products.jsx";

export const App = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  return (
    <div>
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

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
