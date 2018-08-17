import {
  GET_MENUS,
  CREATE_MENU,
  CREATE_MENU_ERROR,
  CLEAR_MENU_MESSAGES
} from "./types";
import { redirect } from "./login";
import axios from "axios";

let token = localStorage.getItem("token");
let config = {
  headers: {
    Authorization: "Bearer " + token
  }
};
export const getMenus = () => dispatch => {
  axios
    .get("https://book-a-meal-backend.herokuapp.com/api/v1/menu", config)
    .then(response => {
      console.log(response.data);
      return dispatch(gotMenus(response.data));
    })
    .catch(error => {
      redirect(error.response.data);
      console.log(error.response.data);
    });
};

const gotMenus = data => ({
  type: GET_MENUS,
  payload: data
});

export const createMenu = data => dispatch => {
  axios
    .post("/api/v1/menu", data, config)
    .then(response => {
      return dispatch(menuCreated(response.data));
    })
    .catch(error => {
      return dispatch(menuCreationError(error.response.data));
    });
};

export const menuCreated = data => ({
  type: CREATE_MENU,
  payload: data
});

export const menuCreationError = data => ({
  type: CREATE_MENU_ERROR,
  payload: data
});

export const clearMenuMessages = () => ({
  type: CLEAR_MENU_MESSAGES
});
