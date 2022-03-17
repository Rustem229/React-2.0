import c from "./ProfileInfo.module.css";
import { NavLink } from "react-router-dom";
import store from "../../../Redux/redux-store";
import ProfileSocialNetworksWithHooks from "./ProfileSocialNetworks/ProfileSocialNetworksWithHooks";

const ProfileInfo = (props) => {
  console.log(props);

  function getRandomLink() {
    let link = [
      "/assets/img/4skeleton.gif",
      "/assets/img/skeletonAtack.gif",
      "/assets/img/skeletonDansen.gif",
      "/assets/img/skeletonDansen2.gif",
    ];

    return link[Math.floor(Math.random() * link.length)];
  }

  let state = store.getState();

  let friens = state.usersPage.totalUsersCount;
  let musics = state.music.musicData.length;
  let avatar = state.profilePage.myProfileDatas.avatar;
  let name = state.profilePage.myProfileDatas.name;

  return (
    <div>
      <div className={c.menu}>
        <div className={c.edit}>
          <ProfileSocialNetworksWithHooks profileDatas={props.profileDatas} />
        </div>
        <img
          src={getRandomLink()}
          alt=""
          srcset=""
          width="1300px"
          height="255px"
        />

        <div className={c.avatar}>
          <img
            className={c.avatarka}
            src={
              props.profile !== null
                ? props.profile.photos.large !== null
                  ? props.profile.photos.large
                  : "/assets/img/UserAvatar.png"
                : avatar
            }
            width="200"
            alt=""
            srcset=""
          />
        </div>
        <div className={c.name}>
          {props.profile !== null ? props.profile.fullName : name}

          <img
            src="https://www.pngkey.com/png/full/353-3534978_vector-bien-orange-check-mark-png.png"
            width="40px"
            alt=""
            srcset=""
          />
        </div>
        <div className={c.static}>
          <span>
            <NavLink to="/users" className={c.NavLink}>
              Friends
            </NavLink>
            <div>{friens}</div>
          </span>
          <span>
            Subscriber
            <div>22</div>
          </span>
          <span>
            <NavLink to="/music" className={c.NavLink}>
              Music
            </NavLink>
            <div>{musics}</div>
          </span>
        </div>
      </div>
      <div className={c.discription__block}></div>
    </div>
  );
};

export default ProfileInfo;
