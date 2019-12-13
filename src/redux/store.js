import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import thunk from "redux-thunk";
import portfolioReducer from "./reducers/portfolioReducer";
import menuReducer from "./reducers/menuReducer";

const initialState = {};

const middleware = [thunk];

const reducers = combineReducers({
  portfolioReducer,
  menuReducer,
});

const enhancer = composeWithDevTools(applyMiddleware(...middleware));
const store = createStore(reducers, initialState, enhancer);

export default store;
