import * as actionTypes from "../types";

const initialState = {
  isAuthenticated: false,
};

const authReducer = (state=initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default authReducer;
