import * as actionTypes from "../types";
import { updateObject } from "../utility";

const initialState = {
  portfolios: {},
};

const getPortfolios = (state, action) => {
  return updateObject(state, {
    portfolios: action.payload
  });
};

const portfolioReducer = (state=initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_PORTFOLIOS:
      return getPortfolios(state, action);
    default:
      return state;
  }
}

export default portfolioReducer;
