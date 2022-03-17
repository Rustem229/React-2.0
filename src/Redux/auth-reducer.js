import { authAPI } from "../API/API";

const SET_USER_DATA = "SET_USER_DATA";
const SHOW_PASSWORD = "SHOW_PASSWORD";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  isFetching: true,
  passwordVisible: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };
    }

    case SHOW_PASSWORD: {
      return {
        ...state,
        passwordVisible: true,
      };
    }

    default:
      return state;
  }
};

export const showPassword = () => ({
  type: SHOW_PASSWORD,
});

export const setAuthUsersData = (userId, email, login) => ({
  type: SET_USER_DATA,
  data: { userId, email, login },
});

export const getAuthUserData = () => async (dispatch) => {
  let response = await authAPI.me();
  if (response.data.resultCode === 0) {
    let { id, login, email } = response.data.data;
    dispatch(setAuthUsersData(id, email, login));
  }
};

export const login =
  (email, password, rememberMe = false) =>
  async (dispatch) => {
    let res = await authAPI.login(email, password, rememberMe);
    if (res.data.resultCode === 0) {
      dispatch(getAuthUserData());
    }
  };

export const logout = () => (dispatch) => {
  authAPI.logout().then((res) => {
    if (res.data.resultCode === 0) {
      const obj = { id: null, login: null, email: null };
      dispatch(setAuthUsersData(obj, false));
    }
  });
};

export default authReducer;
