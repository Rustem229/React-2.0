import { connect } from "react-redux";
import {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
  toggleFollowingProgress,
  getUsersThunkCreator,
} from "../../Redux/users-reducer";
import Users from "./Users";
import React from "react";
import * as axios from "axios";
import { usersAPI } from "../../API/API";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { changeTitle } from "../../hoc/changeTitle";
import {
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getTotalUsersCount,
  getUsersSuper,
} from "../../Redux/selectors/users-selector";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsersThunkCreator(
      usersAPI,
      this.props.currentPage,
      this.props.pageSize
    );
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    // this.props.toggleIsFetching(true);
    usersAPI.getUsers(pageNumber, this.props.pageSize).then((data) => {
      // this.props.toggleIsFetching(false);
      this.props.setUsers(data.items);
    });
  };

  render() {
    changeTitle("Users");

    return (
      <>
        {this.props.isFetching ? (
          <div>
            <img
              src="/assets/img/Preloader/preloader3.gif"
              margin="2000px"
              width="600px"
              className="preloader"
            />
          </div>
        ) : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          changeTitle={this.changeTitle}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          toggleFollowingProgress={this.props.toggleFollowingProgress}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: getUsersSuper(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(follow(userId));
    },

    unfollow: (userId) => {
      dispatch(unfollow(userId));
    },

    setUsers: (users) => {
      dispatch(setUsers(users));
    },

    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPage(pageNumber));
    },

    setTotalUsersCount: (totalCount) => {
      dispatch(setTotalUsersCount(totalCount));
    },
    toggleIsFetching: (isFetching) => {
      dispatch(toggleIsFetching(isFetching));
    },
  };
};

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    toggleFollowingProgress,
    getUsersThunkCreator,
  })
)(UsersContainer);
