import React from "react";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

const ProfileSocialNetworksWithHooks = (props) => {
  let [ditailsOpen, setOpenDitalis] = useState(false);

  console.log(ditailsOpen, setOpenDitalis);

  const openDitails = () => {
    setOpenDitalis(true);
  };

  //s s

  useEffect(() => {
    console.log("component update");
  }, [ditailsOpen]);
  // В квардратных скобках нужно указывать данные после изменинения которых должна запустится функция

  return (
    <div>
      {!ditailsOpen ? (
        <div className="ditails" onClick={openDitails}>
          details
        </div>
      ) : (
        <div className="social__network">
          <div className="social__network__name">
            <div>
              <i class="fab fa-instagram column__icon"></i>:
            </div>
            <div id="vk">VK: </div>
            <div>PN:</div>
          </div>
          <div className="social__network__link">
            <div>
              <a
                href={"https://www.instagram.com/" + props.profileDatas.instId}
                target="_blank"
                rel="noopener noreferrer"
              >
                instagram.com/{props.profileDatas.instId}
              </a>
            </div>
            <div>
              <a
                href={"http://vk.com/" + props.profileDatas.vkId}
                target="_blank"
                rel="noopener noreferrer"
              >
                vk.com/{props.profileDatas.vkId}
              </a>
            </div>
            <div>
              <NavLink to="/profile">{props.profileDatas.pn}</NavLink>
            </div>
          </div>
        </div>
      )}
      <div></div>
    </div>
  );
};

export default ProfileSocialNetworksWithHooks;
