import * as actionTypes from "../types";
import { updateObject } from "../utility";

const initialState = {
  menu: false,
  page: 0,
};

const setMenu = (state, action) => {
  return updateObject(state, {
    menu: action.payload
  });
};

const setPage = (state, action) => {
  return updateObject(state, {
    page: action.payload
  });
};

const menuReducer = (state=initialState, action) => {
  switch (action.type) {
    case actionTypes.OPEN_MENU:
      return setMenu(state, action);
    case actionTypes.CLOSE_MENU:
      return setMenu(state, action);
    case actionTypes.SET_PAGE:
      return setPage(state, action);
    default:
      return state;
  }
}

export default menuReducer;
