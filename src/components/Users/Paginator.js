import c from "./Users.module.css";
import { Pagination } from "antd";
import { useState } from "react";
import { NavLink } from "react-router-dom";

let Paginator = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let portionSize = 20;

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / 15);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div className={c.pages}>
      {portionNumber > 1 && (
        <button
          className={c.button}
          onClick={() => {
            setPortionNumber(portionNumber - 1);
          }}
        >
          &laquo;
        </button>
      )}

      {pages
        .filter(
          (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber
        )
        .map((p) => {
          return (
            <NavLink
              className={c.nav}
              to={"/users/" + p}
              onClick={(e) => {
                props.onPageChanged(p);
              }}
              activeClassName={c.chosenPage}
            >
              {p + " "}
            </NavLink>
          );
        })}

      {portionCount > portionNumber && (
        <button
          className={c.button}
          onClick={() => {
            setPortionNumber(portionNumber + 1);
          }}
        >
          &raquo;
        </button>
      )}
    </div>
  );
};

export default Paginator;
