import axios from "axios";

export const ADMIN_LOGIN_START = "ADMIN_LOGIN_START";
export const ADMIN_LOGIN_SUCCESS = "ADMIN_LOGIN_SUCCESS";
export const ADD_MENU_ITEM_START = "ADD_MENU_ITEM_START";
export const ADD_MENU_ITEM_SUCCESS = "ADD_MENU_ITEM_SUCCESS";
export const INDICATE_MENU_CHANGE_START = "INDICATE_MENU_CHANGE_START";
export const INDICATE_MENU_CHANGE_SUCCESS = "INDICATE_MENU_CHANGE_SUCCESS";

// admin login
export const adminLogin = (credentials) => (dispatch) => {
  dispatch({ type: ADMIN_LOGIN_START });
  axios
    .post("http://localhost:5000/api/auth/login", credentials)
    .then((res) => {
      console.log(res);
      dispatch({ type: ADMIN_LOGIN_SUCCESS, payload: res.data.account });
    })
    .catch((err) => {
      console.log(err);
    });
};

// add menu item
export const addMenuItem = (item) => (dispatch) => {
  dispatch({ type: ADD_MENU_ITEM_START });
  axios
    .post("http://localhost:5000/api/menu", item)
    .then((res) => {
      console.log(res);
      dispatch({ type: ADD_MENU_ITEM_SUCCESS });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const indicateMenuChange = () => (dispatch) => {
  dispatch({ type: INDICATE_MENU_CHANGE_START });
  dispatch({ type: INDICATE_MENU_CHANGE_SUCCESS });
};
