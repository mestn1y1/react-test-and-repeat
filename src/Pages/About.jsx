import { Link, Outlet } from "react-router-dom";

export const About = () => {
  return (
    <main>
      <h1>About us</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur
        error facilis porro magnam! Perferendis illum distinctio ut unde aliquid
        est eius minus voluptas nobis aspernatur? In laudantium voluptatum
        tempora minima.
      </p>
      <ul>
        <li>
          <Link to="mission">Read about our mission</Link>
        </li>
        <li>
          <Link to="team">Read about our team</Link>
        </li>
        <li>
          <Link to="reviews">Read reviews</Link>
        </li>
      </ul>
      <Outlet />
    </main>
  );
};
