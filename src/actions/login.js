import { LOGIN, LOGIN_ERROR, CLEAR_CREDENTIAL_MESSAGES } from "./types";
import axios from "axios";

export const userLoggedIn = data => ({
  type: LOGIN,
  payload: data
});

export const loginError = data => ({
  type: LOGIN_ERROR,
  payload: data
});

export const loginUser = data => dispatch => {
  axios
    .post("/api/v1/auth/login", data)
    .then(response => {
      localStorage.setItem("token", response.data.access_token);
      localStorage.setItem("user_id", response.data.user_id);
      localStorage.setItem("is_admin", response.data.is_admin);
      return dispatch(userLoggedIn(response.data));
    })
    .catch(error => {
      console.log(error);
      return dispatch(loginError(error.response.data));
    });
};
export const clearCredentialMessages = () => ({
  type: CLEAR_CREDENTIAL_MESSAGES
});

export const redirect = data => {
  if (Object.keys(data).includes("msg")) {
    window.location = "/";
  }
};
