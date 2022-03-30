import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route } from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import SettingContainer from "./components/Setting/SettingContainer";
import MusicContainer from "./components/Music/Music/MusicContainer";
import Login from "./components/Login/Login";
import { initializeApp } from "./Redux/app-reducer";
import { connect } from "react-redux";
const DialogsContainer = React.lazy(() =>
  import("./components/Dialogs/DialogsContainer")
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
            <Route
              path="/dialogs"
              render={() => (
                <React.Suspense fallback={<div>Loading...</div>}>
                  <DialogsContainer />
                </React.Suspense>
              )}
            />
            <Route
              path="/profile/:userId?"
              render={() => <ProfileContainer />}
            />
            <Route
              path="/users"
              render={() => (
                <React.Suspense fallback={<div>Loading...</div>}>
                  {" "}
                  <UsersContainer />{" "}
                </React.Suspense>
              )}
            />
            <Route
              path="/music"
              render={() => (
                <React.Suspense fallback={<div>Loading...</div>}>
                  {" "}
                  <MusicContainer />{" "}
                </React.Suspense>
              )}
            />
            <Route
              path="/settings"
              render={() => (
                <React.Suspense fallback={<div>Loading...</div>}>
                  {" "}
                  <SettingContainer />{" "}
                </React.Suspense>
              )}
            />
            <Route
              path="/login"
              render={() => (
                <React.Suspense fallback={<div>Loading...</div>}>
                  {" "}
                  <Login />{" "}
                </React.Suspense>
              )}
            />
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
