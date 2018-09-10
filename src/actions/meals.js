import {
  GET_MEALS,
  CREATE_MEAL,
  CREATE_MEAL_ERROR,
  CLEAR_MEAL_MESSAGES,
  START_EDITING_MEAL,
  EDIT_MEAL,
  EDIT_MEAL_ERROR,
  FINISH_EDITING_MEAL,
  MEAL_DELETED,
  MEAL_DELETION_ERROR
} from "./types";
import { redirect } from "./login";
import axios from "axios";

let token = localStorage.getItem("token");
let config = {
  headers: {
    Authorization: "Bearer " + token
  }
};
export const getMeals = () => dispatch => {
  axios
    .get("/api/v1/meals/", config)
    .then(response => {
      return dispatch({ type: GET_MEALS, payload: response.data });
    })
    .catch(error => {
      redirect(error.response.data);
    });
};

export const createMeal = data => dispatch => {
  axios
    .post("/api/v1/meals/", data, config)
    .then(response => {
      return dispatch({ type: CREATE_MEAL, payload: response.data });
    })
    .catch(error => {
      return dispatch({
        type: CREATE_MEAL_ERROR,
        payload: error.response.data
      });
    });
};

export const clearMealMessages = () => ({
  type: CLEAR_MEAL_MESSAGES
});

export const editMealInitialised = data => ({
  type: START_EDITING_MEAL,
  payload: data
});

export const editMeal = data => dispatch => {
  axios
    .put("/api/v1/meals/" + data.meal_id, data, config)
    .then(response => {
      return dispatch({ type: EDIT_MEAL, payload: response.data });
    })
    .catch(error => {
      return dispatch({ type: EDIT_MEAL_ERROR, payload: error.response.data });
    });
};

export const finishEdit = () => ({
  type: FINISH_EDITING_MEAL
});

export const deleteMeal = data => dispatch => {
  axios
    .delete("/api/v1/meals/" + data, config)
    .then(response => {
      return dispatch({ type: MEAL_DELETED, payload: response.data });
    })
    .catch(error => {
      redirect(error.response.data);
      return dispatch({
        type: MEAL_DELETION_ERROR,
        payload: error.response.data
      });
    });
};
