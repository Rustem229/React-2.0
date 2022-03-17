import MyPosts from "./MyPosts/MyPosts";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import c from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import { connect } from "react-redux";
import { getUserProfile } from "../../Redux/profile-reducer";
import { withRouter } from "react-router-dom";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  changeTitle() {
    let title = document.getElementById("myTitle");
    title.innerHTML = "Profile";
  }

  componentDidMount() {
    let userId = this.props.match.params.userId;
    this.props.getUserProfile(userId);
  }

  render() {
    this.changeTitle();

    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  profileDatas: state.profilePage.myProfileDatas,
});

export default compose(
  connect(mapStateToProps, { getUserProfile }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
