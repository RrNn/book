import { SIGNUP, SIGNUP_ERROR } from "./types";
import axios from "axios";

export const userSignedUp = data => ({
  type: SIGNUP,
  payload: data
});

export const signupError = data => ({
  type: SIGNUP_ERROR,
  payload: data
});

export const signUpUser = data => dispatch =>
  axios
    .post("/api/v1/auth/signup", data)
    .then(response => {
      console.log(response.data);
      localStorage.setItem("token", response.data.access_token);
      localStorage.setItem("user_id", response.data.user_id);
      localStorage.setItem("is_admin", response.data.is_admin);
      return dispatch(userSignedUp(response.data));
    })
    .catch(error => {
      return dispatch(signupError(error.response.data));
    });
