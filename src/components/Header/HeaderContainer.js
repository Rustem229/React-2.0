import React from "react";
import Header from "./Header";
import * as axios from "axios";
import { connect } from "react-redux";
import { setAuthUsersData } from "../../Redux/auth-reducer";
import { onMusic, offMusic } from "../../Redux/header-reducer";
import { selectSongs, offCover } from "./../../Redux/music-reducer";
import { authAPI } from "../../API/API";
import { getAuthUserData, logout } from "../../Redux/auth-reducer";

class HeaderContainer extends React.Component {
  render() {
    return <Header {...this.props} />;
  }
}

let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
  isRunning: state.header.isRunning,
  isVisible: state.header.isVisible,
  audioSrc: state.header.audioSrc,
  music: state.music,
  volume: state.header.volume,
  avatar: state.music.cover.avatar,
});

export default connect(mapStateToProps, {
  setAuthUsersData,
  onMusic,
  offMusic,
  selectSongs,
  offCover,
  logout,
})(HeaderContainer);
