import React from "react";
import { NavLink } from "react-router-dom";

class ProfileSocialNetworks extends React.Component {
  state = {
    detailsOpen: false,
  };

  openDetails = () => {
    this.setState({
      detailsOpen: true,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.detailsOpen !== this.props.detailsOpen) {
      this.setState({ ditailsOpen: this.props.detailsOpen });
    }

    console.log("componentDidUpdate");
  }

  render() {
    return (
      <div>
        {console.log(this.props)}
        {!this.state.detailsOpen ? (
          <div className="ditails" onClick={this.openDetails}>
            details
          </div>
        ) : (
          <div className="social__network">
            <div className="social__network__name">
              <div>
                <i class="fab fa-instagram column__icon"></i>:
              </div>
              <div>VK: </div>
              <div>PN:</div>
            </div>
            <div className="social__network__link">
              <div>
                <a
                  href={
                    "https://www.instagram.com/" +
                    this.props.profileDatas.instId
                  }
                  target="_blank"
                  rel="noopener noreferrer">
                  instagram.com/{this.props.profileDatas.instId}
                </a>
              </div>
              <div>
                <a
                  href={"http://vk.com/" + this.props.profileDatas.vkId}
                  target="_blank"
                  rel="noopener noreferrer">
                  vk.com/{this.props.profileDatas.vkId}
                </a>
              </div>
              <div>
                <NavLink to="/profile">{this.props.profileDatas.pn}</NavLink>
              </div>
            </div>
          </div>
        )}
        <div></div>
      </div>
    );
  }
}

export default ProfileSocialNetworks;
