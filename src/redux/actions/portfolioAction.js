import axios from "axios";
import {db} from "../utility";
import * as actionTypes from "../types";

export const getPortfolios = () => (dispatch, state) => {
  axios
    .get(db)
    .then(res => {
      dispatch({
        type: actionTypes.GET_PORTFOLIOS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
    });
};

export const addProject = (
  category,
  projectsArr
) => (dispatch, state) => {
  const newProject = {};
  newProject[`${category}`] = projectsArr;
  axios
    .post(
      `${db}/update`,
      newProject
    )
    .then(res => {
      dispatch({
        type: actionTypes.ADD_PROJECT,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
    });
};
