import * as actionTypes from "../types";

export const openMenu = (status=true) => {
  return {
    type: actionTypes.OPEN_MENU,
    payload: status
  }
};

export const closeMenu = (status=false) => {
  return {
    type: actionTypes.CLOSE_MENU,
    payload: status
  }
};

export const setPage = (page) => {
  return {
    type: actionTypes.SET_PAGE,
    payload: page
  }
}
