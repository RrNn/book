import configureStore from "redux-mock-store";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import {
  createOrder,
  getOrders,
  getCustomerOrders
} from "../../actions/orders";
import thunk from "redux-thunk";
import {
  GET_ORDERS,
  CREATE_ORDER,
  GOT_CUSTOMER_ORDERS
} from "../../actions/types";

const middleware = [thunk];
const mockStore = configureStore(middleware);

var mock = new MockAdapter(axios);
describe("Get orders", () => {
  test("Test that all orders can be got", () => {
    mock.onGet("http://127.0.0.1:5000/api/v1/orders").reply(200, {
      type: GET_ORDERS,
      payload: [
        {
          customer: "admin",
          date: "2018-09-01",
          day: "Saturday",
          id: 1,
          meal: "Rice & katogo",
          name: "breakfast",
          price: 3000
        }
      ]
    });
    const initialState = {
      customer: "",
      date: "",
      day: "",
      id: null,
      meal: "",
      name: "",
      price: 3000
    };
    const expectedAction = [
      {
        type: GET_ORDERS,
        payload: [
          {
            customer: "admin",
            date: "2018-09-01",
            day: "Saturday",
            id: 1,
            meal: "Rice & katogo",
            name: "breakfast",
            price: 3000
          }
        ]
      }
    ];
    const store = mockStore(initialState, expectedAction);
    // Dispatch the data that is dispatched to the store on creating a meal.
    store.dispatch(getOrders());
    store.dispatch({
      type: GET_ORDERS,
      payload: [
        {
          customer: "admin",
          date: "2018-09-01",
          day: "Saturday",
          id: 1,
          meal: "Rice & katogo",
          name: "breakfast",
          price: 3000
        }
      ]
    });
  });

  test("Test that orders of a single customer can be got", () => {
    mock.onGet("http://127.0.0.1:5000/api/v1/orders/1").reply(200, {
      type: GOT_CUSTOMER_ORDERS,
      payload: [
        {
          customer: "admin",
          date: "2018-09-01",
          day: "Saturday",
          id: 1,
          meal: "Rice & katogo",
          name: "breakfast",
          price: 3000
        }
      ]
    });
    const initialState = {
      customer: "",
      date: "",
      day: "",
      id: null,
      meal: "",
      name: "",
      price: 3000
    };
    const expectedAction = [
      {
        type: GOT_CUSTOMER_ORDERS,
        payload: [
          {
            customer: "admin",
            date: "2018-09-01",
            day: "Saturday",
            id: 1,
            meal: "Rice & katogo",
            name: "breakfast",
            price: 3000
          }
        ]
      }
    ];
    const store = mockStore(initialState, expectedAction);
    // Dispatch the data that is dispatched to the store on creating a meal.
    store.dispatch(getCustomerOrders());
    store.dispatch({
      type: GOT_CUSTOMER_ORDERS,
      payload: [
        {
          customer: "admin",
          date: "2018-09-01",
          day: "Saturday",
          id: 1,
          meal: "Rice & katogo",
          name: "breakfast",
          price: 3000
        }
      ]
    });
  });

  test("Test that an order can be created", () => {
    mock.onPost("http://127.0.0.1:5000/api/v1/orders/").reply(201, {
      type: CREATE_ORDER,
      payload: { message: "Order has been created" }
    });
    const initialState = { message: "" };
    const expectedAction = [
      {
        type: CREATE_ORDER,
        payload: { message: "Order has been created" }
      }
    ];
    const store = mockStore(initialState, expectedAction);
    // Dispatch the data that is dispatched to the store on creating a meal.
    store.dispatch(createOrder());
    store.dispatch({
      type: CREATE_ORDER,
      payload: { message: "Order has been created" }
    });
  });
});
