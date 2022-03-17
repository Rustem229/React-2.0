import c from "./Song.module.css";
import store from "./../../../Redux/redux-store";
import { NavLink } from "react-router-dom";

const Song = (props) => {
  const changeAudioSRC = () => {
    console.log(props);
    let { text, avatar, src, id } = props;

    props.selectSongs(text, avatar, src, id);
    props.onMusic(src, id);
  };

  return (
    <div onClick={changeAudioSRC} className={c.music__item}>
      <img className={c.avatar} src={props.avatar}></img>
      <NavLink
        id={props.id}
        activeClassName={c.active}
        className={c.music__item}
        to={"/music/" + props.id}
      >
        {props.text}
      </NavLink>
    </div>
  );
};

export default Song;
