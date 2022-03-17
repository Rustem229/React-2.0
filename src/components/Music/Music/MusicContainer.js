import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { onMusic } from "../../../Redux/header-reducer";
import { selectSongs } from "../../../Redux/music-reducer";
import Music from "./Music";

let mapStateToProps = (state) => {
  return {
    music: state.music,
  };
};

export default compose(connect(mapStateToProps, { selectSongs, onMusic }))(
  Music
);
