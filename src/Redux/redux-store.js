import { applyMiddleware, combineReducers, createStore } from "redux";
import DialogsReducer from "./dialogs-reducer";
import ProfileReducer from "./profile-reducer";
import SidebarReducer from "./sidebar-reducer";
import MusicReducer from "./music-reducer";
import userReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import settingReducer from "./setting-reducer";
import thunkMiddleware from "redux-thunk";
import HeaderReducer from "./header-reducer";
import appReducer from "./app-reducer";

let reducers = combineReducers({
  header: HeaderReducer,
  profilePage: ProfileReducer,
  messagesPage: DialogsReducer,
  sidebar: SidebarReducer,
  music: MusicReducer,
  usersPage: userReducer,
  auth: authReducer,
  setting: settingReducer,
  app: appReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
