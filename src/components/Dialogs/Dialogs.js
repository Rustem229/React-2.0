import { NavLink } from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import c from "./Dialogs.module.css";
import Message from "./Message/Message";
import AudioClick from "./../../AudioClick/AudioClick";
import {
  updateNewMessageBodyCreator,
  sendMessageCreator,
} from "./../../Redux/dialogs-reducer";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { changeTitle } from "../../hoc/changeTitle";

const Dialogs = ({
  isAuth,
  messagesPage,
  sendMessage,
  updateNewMessageBody,
}) => {
  changeTitle("Messages");

  if (!isAuth) {
    return <Redirect to="/login" />;
  }

  let state = messagesPage;

  let dialogsElements = state.dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />
  ));
  let messagesElements = state.messages.map((message) => (
    <Message message={message.message} key={message.id} />
  ));
  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    sendMessage();
  };

  let onNewMessageChange = (event) => {
    let body = event.target.value;
    updateNewMessageBody(body);
  };

  return (
    <div className={c.dialogs}>
      {/* <AudioClick /> */}
      <div className={c.dialogs__item}>{dialogsElements}</div>
      <div className={c.messages}>
        <div>{messagesElements}</div>
        <div>
          <div>
            <textarea
              placeholder="Enter your message"
              value={newMessageBody}
              onChange={onNewMessageChange}
            ></textarea>
          </div>
          <div>
            <button onClick={onSendMessageClick}>SEND</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
