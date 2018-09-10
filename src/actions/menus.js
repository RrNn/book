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
    .get("/api/v1/menu", config)
    .then(response => {
      return dispatch({ type: GET_MENUS, payload: response.data });
    })
    .catch(error => {
      redirect(error.response.data);
    });
};

export const createMenu = data => dispatch => {
  axios
    .post("/api/v1/menu", data, config)
    .then(response => {
      return dispatch({ type: CREATE_MENU, payload: response.data });
    })
    .catch(error => {
      return dispatch({
        type: CREATE_MENU_ERROR,
        payload: error.response.data
      });
    });
};

export const clearMenuMessages = () => ({
  type: CLEAR_MENU_MESSAGES
});
