import { Routes, Route } from "react-router-dom";
import css from "./App.module.css";
import { About } from "../../Pages/About.jsx";
import { Home } from "../../Pages/Home.jsx";
import { NotFound } from "../../Pages/NotFound.jsx";
import { Products } from "../../Pages/Products.jsx";
import { ProductsDetails } from "../../Pages/ProductsDetails.jsx";
import { AppBar } from "../AppBar/AppBar.jsx";
import { Mission } from "../Mission/Mission.jsx";
import { Team } from "../Team/Team.jsx";
import { Reviews } from "../Reviews/Reviews.jsx";

export const App = () => {
    return (
        <div className={css.container}>
            <AppBar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />}>
                    <Route path="mission" element={<Mission />} />
                    <Route path="team" element={<Team />} />
                    <Route path="reviews" element={<Reviews />} />
                </Route>
                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<ProductsDetails />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
};
