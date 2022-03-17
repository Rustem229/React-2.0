import { NavLink } from "react-router-dom";
import c from "./Users.module.css";
import * as axios from "axios";
import Paginator from "./Paginator";

let Users = (props) => {
  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id} className={c.flex}>
          <span>
            <div>
              <NavLink to={"/profile/" + u.id}>
                <img
                  className={c.avatar}
                  src={
                    u.photos.small != null
                      ? u.photos.small
                      : "/assets/img/UserAvatar.png"
                  }
                  alt=""
                />
              </NavLink>
            </div>
            <div>
              {u.followed ? (
                <button
                  disabled={props.followingInProgress.some((id) => id === u.id)}
                  className={c.follow}
                  onClick={() => {
                    props.toggleFollowingProgress(true, u.id);
                    axios
                      .delete(
                        `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                        {
                          withCredentials: true,
                          headers: {
                            "API-KEY": "e24fac79-c13d-4b72-94ab-07f73e52b8b6",
                          },
                        }
                      )
                      .then((response) => {
                        if (response.data.resultCode == 0) {
                          // resultCode = 0 если все чётко если не чётко = 1
                          props.unfollow(u.id);
                        }
                        props.toggleFollowingProgress(false, u.id);
                      });
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  disabled={props.followingInProgress.some((id) => id === u.id)}
                  className={c.unfollow}
                  onClick={(event) => {
                    props.toggleFollowingProgress(true, u.id);
                    console.log(event);
                    axios
                      .post(
                        `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                        {},
                        {
                          withCredentials: true,
                          headers: {
                            "API-KEY": "e24fac79-c13d-4b72-94ab-07f73e52b8b6",
                          },
                        }
                      )
                      .then((response) => {
                        if (response.data.resultCode == 0) {
                          // resultCode = 0 если все чётко если не чётко = 1
                          props.follow(u.id);
                        }
                        props.toggleFollowingProgress(false, u.id);
                      });
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span className={c.text__data}>
            <span>
              <div>
                {u.online ? (
                  <span className={c.online}>online</span>
                ) : (
                  <span className={c.online}>offline</span>
                )}
              </div>
              <div>{u.name}</div>
            </span>
            <span className={c.from}>
              <div>Russia</div>
              <div>Moscow</div>
            </span>
          </span>
        </div>
      ))}

      <Paginator
        onPageChanged={props.onPageChanged}
        currentPage={props.currentPage}
        totalUsersCount={props.totalUsersCount}
        pageSize={props.pageSize}
      />
    </div>
  );
};

export default Users;
