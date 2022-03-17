import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import SettingContainer from "./components/Setting/SettingContainer";
import MusicContainer from "./components/Music/Music/MusicContainer";
import Login from "./components/Login/Login";
import { initializeApp } from "./Redux/app-reducer";
import { connect } from "react-redux";

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
            <Route path="/dialogs" render={() => <DialogsContainer />} />
            <Route
              path="/profile/:userId?"
              render={() => <ProfileContainer />}
            />
            <Route path="/users" render={() => <UsersContainer />} />
            <Route path="/music" render={() => <MusicContainer />} />
            <Route path="/settings" render={() => <SettingContainer />} />
            <Route path="/login" render={() => <Login />} />
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
