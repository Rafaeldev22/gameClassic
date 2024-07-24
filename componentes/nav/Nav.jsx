import { Link, NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = () => {


  return (
    <header>
      <nav>
        <Link to="/">
          <img
            src="https://www.creativefabrica.com/wp-content/uploads/2023/05/08/Video-Game-Controller-Logo-Graphics-69127373-1.png"
            alt="logo"
            title="GameClassic - Home"
            className="logo-classic"
          />
        </Link>
        <ul>
          <NavLink to="/nintendo" className={({ isActive }) => (isActive ? 'active-link' : 'tag-link')}>
            <li>Nintendo</li>
          </NavLink>
          <NavLink to="/playstation" className={({ isActive }) => (isActive ? 'active-link' : 'tag-link')}>
            <li>Playstation</li>
          </NavLink>
          <NavLink to="/sega" className={({ isActive }) => (isActive ? 'active-link' : 'tag-link')}>
            <li>Sega</li>
          </NavLink>

        </ul>
      </nav>

    </header>
  );
};

export default Nav;
