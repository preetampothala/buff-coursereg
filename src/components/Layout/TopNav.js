import { NavLink } from "react-router-dom";
import styles from "./TopNav.module.css";
import CartButton from "../Cart/CartButton";
const TopNav = () => {
  return (
    <header className={styles.header}>
      <NavLink to="/" className={styles.logo}>Buff Course Search</NavLink>
      <div>Welcome to Course Search portal</div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink to="/mycourses" activeClassName={styles.active}>
              My Courses
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart" activeClassName={styles.active}>
              <CartButton />
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default TopNav;
