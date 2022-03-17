import changePageStyle from "../../Redux/setting-reducer";
import changeNavbarStyle from "../../Redux/setting-reducer";
import Settings from "./Settings";
import { connect } from "react-redux";
import { changeProfileDatas } from "./../../Redux/profile-reducer";
import { withAuthRedirect } from "./../../hoc/withAuthRedirect";

let mapStateToProps = (state) => {
  return {
    profileDatas: state.profilePage.myProfileDatas,
  };
};

const SettingContainer = connect(mapStateToProps, { changeProfileDatas })(
  Settings
);

export default SettingContainer;
