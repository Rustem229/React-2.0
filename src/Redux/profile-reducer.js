import { usersAPI } from "../API/API";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const CHANGE_PROFILE_DATAS = "CHANGE_PROFILE_DATAS";

let initialState = {
  postData: [
    {
      id: 0,
      message: "Hello it's me mario",
      avatar: "/assets/img/marioAvatar.jpg",
      likesCount: 1,
    },
    {
      id: 1,
      message: "If you acknowledge any gods... start praying, now!",
      avatar: "/assets/img/skeletonAvatar.jpg",
      likesCount: 134,
    },
  ],

  newPostText: "",

  profile: null,

  myProfileDatas: {
    avatar: "/assets/img/MyAvatar.jpg",
    name: "Rustem",
    instId: "_van_der_eretein_",
    vkId: "mansnothot777",
    pn: "8-800-555-35-35",
  },
};

const ProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        newPostText: "",
        postData: [
          ...state.postData,
          {
            id: state.postData + 1,
            message: state.newPostText,
            avatar: state.myProfileDatas.avatar,
            likesCount: 0,
          },
        ],
      };
    }
    case UPDATE_NEW_POST_TEXT: {
      return { ...state, newPostText: action.newText };
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    case CHANGE_PROFILE_DATAS: {
      return {
        ...state,
        myProfileDatas: {
          ...state.postData,
          avatar: action.avatar,
          name: action.name,
          instId: action.instId,
          vkId: action.vkId,
          pn: action.pn,
        },
      };
    }
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({
  type: ADD_POST,
});

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export const changeProfileDatas = (avatar, name, instId, vkId, pn) => ({
  type: CHANGE_PROFILE_DATAS,
  avatar,
  name,
  instId,
  vkId,
  pn,
});

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const getUserProfile = (userId) => async (dispatch) => {
  let response = await usersAPI.getProfile(userId);
  dispatch(setUserProfile(response.data));
};
export default ProfileReducer;
