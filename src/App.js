import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route } from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import { initializeApp } from "./Redux/app-reducer";
import { connect } from "react-redux";
import { withSuspense } from "./hoc/withSuspense";

const ProfileContainer = React.lazy(() =>
  import("./components/Profile/ProfileContainer")
);
const DialogsContainer = React.lazy(() =>
  import("./components/Dialogs/DialogsContainer")
);
const UsersContainer = React.lazy(() =>
  import("./components/Users/UsersContainer")
);
const MusicContainer = React.lazy(() =>
  import("./components/Music/Music/MusicContainer")
);
const Login = React.lazy(() => import("./components/Login/Login"));
const SettingContainer = React.lazy(() =>
  import("./components/Setting/SettingContainer")
);

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <div className="navFlex">
          <div>
            <Navbar />
          </div>
          <div>
            <Route path="/dialogs" render={withSuspense(DialogsContainer)} />
            <Route
              path="/profile/:userId?"
              render={withSuspense(ProfileContainer)}
            />
            <Route path="/users" render={withSuspense(UsersContainer)} />
            <Route path="/music" render={withSuspense(MusicContainer)} />
            <Route path="/settings" render={withSuspense(SettingContainer)} />
            <Route path="/login" render={withSuspense(Login)} />
          </div>
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

export default connect(null, { initializeApp })(App);
