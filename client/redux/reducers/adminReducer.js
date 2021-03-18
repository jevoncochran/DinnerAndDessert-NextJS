import {
  ADMIN_LOGIN_START,
  ADMIN_LOGIN_SUCCESS,
  ADD_MENU_ITEM_START,
  ADD_MENU_ITEM_SUCCESS,
  INDICATE_MENU_CHANGE_START,
  INDICATE_MENU_CHANGE_SUCCESS,
} from "../actions";

const initialState = {
  account: {},
  isLoading: false,
  error: "",
  adminAccess: false,
  menuChangeToggler: false,
};

export const admin = (state = initialState, action) => {
  switch (action.type) {
    case ADMIN_LOGIN_START:
      return {
        ...state,
        isLoading: true,
        // I can take this out once I have a sign out button
        adminAccess: false,
      };
    case ADMIN_LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        account: action.payload,
        adminAccess: true,
      };
    case ADD_MENU_ITEM_START:
      return {
        ...state,
        isLoading: true,
      };
    case ADD_MENU_ITEM_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case INDICATE_MENU_CHANGE_START:
      return {
        ...state,
        isLoading: true,
      };
    case INDICATE_MENU_CHANGE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        menuChangeToggler: !state.menuChangeToggler,
      };
    default:
      return state;
  }
};
