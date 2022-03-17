import { NavLink } from "react-router-dom";
import c from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={c.nav}>
      <div>
        <NavLink className={c.nav_a} to="/profile" activeClassName={c.active}>
          Profile
        </NavLink>
      </div>
      <div>
        <NavLink className={c.nav_a} to="/dialogs" activeClassName={c.active}>
          Messages
        </NavLink>
      </div>
      <div>
        <NavLink className={c.nav_a} to="/users" activeClassName={c.active}>
          Users
        </NavLink>
      </div>
      <div>
        <NavLink className={c.nav_a} to="/music" activeClassName={c.active}>
          Music
        </NavLink>
      </div>
      <div>
        <NavLink
          className={c.nav_a + " " + c.navi_a}
          to="/settings"
          activeClassName={c.active}
        >
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
