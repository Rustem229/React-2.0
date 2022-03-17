import {
  updateNewMessageBodyCreator,
  sendMessageCreator,
} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { addPostActionCreator } from "./../../Redux/profile-reducer";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

let mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(sendMessageCreator());
    },

    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyCreator(body));
    },

    addPost: () => {
      dispatch(addPostActionCreator());
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
