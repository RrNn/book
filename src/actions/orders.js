import {
  GET_ORDERS,
  CREATE_ORDER,
  CREATE_ORDER_ERROR,
  CLEAR_ORDER_MESSAGES,
  GOT_CUSTOMER_ORDERS
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
      dispatch({ type: GET_ORDERS, payload: response.data });
    })
    .catch(error => {
      redirect(error.response.data);
    });
};

export const getCustomerOrders = () => dispatch => {
  const customerId = localStorage.getItem("user_id");
  axios
    .get("/api/v1/orders/" + customerId)
    .then(response => {
      return dispatch({ type: GOT_CUSTOMER_ORDERS, payload: response.data });
    })
    .catch(error => {
      // console.log(error.response.data);
    });
};

export const createOrder = data => dispatch => {
  axios
    .post("/api/v1/orders", data, config)
    .then(response => {
      dispatch({ type: CREATE_ORDER, payload: response.data });
    })
    .catch(error => {
      redirect(error.response.data);
      dispatch({ type: CREATE_ORDER_ERROR, payload: error.response.data });
    });
};
// export const orderCreated = data => ({
//   type: CREATE_ORDER,
//   payload: data
// });

// export const orderCreationError = data => ({
//   type: CREATE_ORDER_ERROR,
//   payload: data
// });

export const clearOrderMessages = () => {
  return { type: CLEAR_ORDER_MESSAGES };
};
