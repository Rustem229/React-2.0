import c from "./Music.module.css";
import Song from "../MyMusic/Song";
import React from "react";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { changeTitle } from "../../../hoc/changeTitle";

const Music = (props) => {
  // debugger
  changeTitle("Music");

  let state = props.music;

  let songElement = state.musicData.map((s) => (
    <Song
      onMusic={props.onMusic}
      selectSongs={props.selectSongs}
      state={state}
      id={s.id}
      text={s.name}
      src={s.src}
      avatar={s.avatar}
    />
  ));

  let avatar = state.cover.avatar;

  let name = state.cover.name;

  let id = state.cover.id;

  return (
    <div>
      <Redirect to={`/music/${id}`} />
      <div>
        <div id="cover" className={c.cover}>
          <img id="coverIMG" className={c.cover__img} src={avatar}></img>
          <div id="coverName" className={c.cover__name}>
            {name}
          </div>
        </div>
        <div className={c.songs}>
          <div>{songElement}</div>
        </div>
      </div>
    </div>
  );
};

export default Music;
