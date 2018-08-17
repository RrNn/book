import {
  GET_ORDERS,
  CREATE_ORDER,
  CREATE_ORDER_ERROR,
  CLEAR_ORDER_MESSAGES
} from "./types";
import { redirect } from "./login";
import axios from "axios";

let token = localStorage.getItem("token");
let config = {
  headers: {
    Authorization: "Bearer " + token
  }
};

export const getOrders = () => dispatch => {
  axios
    .get("/api/v1/orders", config)
    .then(response => {
      console.log(response.data);
      return dispatch(gotOrders(response.data));
    })
    .catch(error => {
      redirect(error.response.data);
    });
};

const gotOrders = data => ({
  type: GET_ORDERS,
  payload: data
});

export const createOrder = data => dispatch => {
  axios
    .post("/api/v1/orders", data, config)
    .then(response => {
      return dispatch(orderCreated(response.data));
    })
    .catch(error => {
      redirect(error.response.data);
      return dispatch(orderCreationError(error.response.data));
    });
};
export const orderCreated = data => ({
  type: CREATE_ORDER,
  payload: data
});

export const orderCreationError = data => ({
  type: CREATE_ORDER_ERROR,
  payload: data
});

export const clearOrderMessages = () => ({
  type: CLEAR_ORDER_MESSAGES
});
