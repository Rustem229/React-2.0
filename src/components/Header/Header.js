import c from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  let audioSrc = props.audioSrc;

  let isVisible = props.isVisible ? "display__block" : "display__none";

  const startMusic = () => {
    let { name, src, avatar, id } = props.music.musicData[0];

    props.onMusic(src, id);
    props.selectSongs(name, avatar, src, id);
  };

  const EnterSecondSong = (event) => {
    let currentId = props.music.cover.id;
    let secondSongId = currentId;

    let indexСheck = () => {
      switch (event.target.id) {
        case "second":
          if (secondSongId > 10) {
            return (secondSongId = 0);
          } else {
            return secondSongId++;
          }

        case "previous":
          if (secondSongId < 0) {
            secondSongId = 10;
            return secondSongId;
          } else {
            return secondSongId--;
          }
      }
    };

    indexСheck();

    // Деструктуризация

    let { name, src, avatar, id } = props.music.musicData[indexСheck()];

    props.onMusic(src, id);
    props.selectSongs(name, avatar, src, id);
  };

  let offMusic = () => {
    props.offMusic();
    props.offCover();
  };

  return (
    <header className={c.header}>
      {props.isVisible ? (
        <div
          id="audioContainer"
          className={c.audio__container}
          className={isVisible}
        >
          <div id="" className={c.audio__flex}>
            <button
              id="previous"
              onClick={EnterSecondSong}
              className={c.leafer1}
            >
              &laquo;
            </button>
            <button id="second" onClick={EnterSecondSong} className={c.leafer2}>
              &raquo;
            </button>

            <img className={c.avatar} src={props.avatar}></img>

            <audio
              autoPlay
              id="second"
              onEnded={EnterSecondSong}
              className={c.audio}
              controls
              src={audioSrc}
            ></audio>
            <span onClick={offMusic} className={c.off__music}>
              &times;
            </span>
          </div>
        </div>
      ) : (
        <div id="loginContainer" className={c.login}>
          {props.isAuth ? (
            <div className={c.userName}>
              <span className={c.start__music} onClick={startMusic}>
                𝄞
              </span>
              <span>{props.login}</span>
            </div>
          ) : (
            <span>
              <NavLink to="/login"> Join </NavLink>
            </span>
          )}
        </div>
      )}

      <span className={c.logotype}>
        <span className={c.logo}>Social</span>
        <span className={c.Hub}>club</span>
      </span>
    </header>
  );
};

export default Header;
