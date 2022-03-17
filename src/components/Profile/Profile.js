import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import MyPosts from "./MyPosts/MyPosts";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import c from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { changeTitle } from "./../../hoc/changeTitle";

const Profile = (props) => {
  changeTitle("Profile");

  if (!props.isAuth) {
    return <Redirect to="/login" />;
  }

  return (
    <div className={c.profile_component}>
      <ProfileInfo profileDatas={props.profileDatas} profile={props.profile} />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
