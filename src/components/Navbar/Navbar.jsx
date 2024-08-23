import { NavLink } from "react-router-dom";
import style from "./Navbar.module.scss";
export const Navbar = () => {
  return (
    <nav className={style.navStyle}>
      <ul>
        <li>
          <NavLink to="/products">Products</NavLink>
        </li>
        <li>
          <NavLink to="/Home">Home</NavLink>
        </li>
      </ul>
    </nav>
  );
};
