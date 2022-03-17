import store from "./../../Redux/redux-store";
import React from "react";
import c from "./Settings.module.css";
import { changeTitle } from "./../../hoc/changeTitle";

const Settings = (props) => {
  changeTitle("Setting");

  let newProfileName = React.createRef();
  let newProfileAvatar = React.createRef();
  let newProfileVkId = React.createRef();
  let newProfileInstId = React.createRef();
  let newProfilePn = React.createRef();

  const changeProfileDatas = () => {
    let { avatar, name, instId, vkId, pn } = props.profileDatas;

    let newAvatar = newProfileAvatar.current.value;
    let newName = newProfileName.current.value;
    let newVkId = newProfileVkId.current.value;
    let newInstId = newProfileInstId.current.value;
    let newPn = newProfilePn.current.value;

    if (!newAvatar || !newName || !newVkId || !newInstId || !newPn) {
      alert("Заполните все поля");
    }

    props.changeProfileDatas(newAvatar, newName, newInstId, newVkId, newPn);
  };

  let avatarChange = () => {
    let avatarIllustration = document.getElementById("avatarIllustration");
    avatarIllustration.src = newProfileAvatar.current.value;
  };

  let nameChange = () => {
    let nameIllustration = document.getElementById("nameIllustration");
    nameIllustration.innerHTML = newProfileName.current.value;
  };

  return (
    <div>
      <div className={c.illustration}>
        <img
          className={c.avatar__illustration}
          id="avatarIllustration"
          src=""
          alt=""
          srcset=""
        />
        <div className={c.name__illustration} id="nameIllustration"></div>
      </div>

      <div>
        <div className={c.changedOptions}>
          <div>NEW NAME</div>
          <textarea
            maxLength="20"
            className={c.textarea}
            onChange={nameChange}
            ref={newProfileName}
            name=""
            id=""
            cols="75"
            rows="2"></textarea>
        </div>
      </div>
      <div>
        <div className={c.changedOptions}>
          <div>NEW AVATAR (URL, 1x1)</div>
          <textarea
            className={c.textarea}
            onChange={avatarChange}
            ref={newProfileAvatar}
            name=""
            id="avatarIllustration"
            cols="75"
            rows="2"></textarea>
        </div>
        <div className={c.changedOptions}>
          <div>NEW INSTAGRAM ID</div>
          <textarea
            maxLength="20"
            className={c.textarea}
            onChange={nameChange}
            name=""
            ref={newProfileInstId}
            id=""
            cols="75"
            rows="2"></textarea>
        </div>
        <div className={c.changedOptions}>
          <div>NEW VK ID</div>
          <textarea
            maxLength="20"
            className={c.textarea}
            onChange={nameChange}
            name=""
            ref={newProfileVkId}
            id=""
            cols="75"
            rows="2"></textarea>
        </div>
        <div className={c.changedOptions}>
          <div>NEW PHONE NUMBER</div>
          <textarea
            maxLength="20"
            className={c.textarea}
            onChange={nameChange}
            name=""
            ref={newProfilePn}
            id=""
            cols="75"
            rows="2"></textarea>
          <div>
            <button className={c.button} onClick={changeProfileDatas}>
              Change profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
