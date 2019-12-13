import axios from "axios";
import {db} from "../utility";
import * as actionTypes from "../types";

export const getPortfolios = () => (dispatch, state) => {
  axios
    .get(`${db}/portfolios`)
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
      `${db}/portfolios/update`,
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

export const sendEmail = (
  email,
  subject,
  message
) => (dispatch, state) => {
  const newEmail = {
    email,
    subject,
    message
  };
  axios.post(
      `${db}/sendemail`,
      newEmail
    )
    .then(res => {
      dispatch({
        type: actionTypes.SEND_EMAIL,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
    });
};
