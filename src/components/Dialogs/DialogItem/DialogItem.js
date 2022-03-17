import { NavLink } from "react-router-dom";
import c from "./../Dialogs.module.css";

const DialogItem = ({ name, id }) => {
  let path = "/dialogs/" + id;

  return (
    <div className={c.dialog}>
      <NavLink activeClassName={c.active__name} to={path}>
        {name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
