import { GET_ORDERS, GOT_CUSTOMER_ORDERS } from "../../actions/types";
import ordersReducer from "../../reducers/ordersReducer";

describe("ordersReducer", () => {
  it("should return an empty intial state", () => {
    expect(ordersReducer(undefined, {})).toEqual({
      data: [],
      revenue: 0,
      customer_orders: [],
      credit: 0
    });
  });
  it("should change the store accordingly on get all orders", () => {
    const action = {
      type: GET_ORDERS,
      payload: {
        orders: [
          {
            customer: "admin",
            date: "2018-09-01",
            day: "Saturday",
            id: 1,
            meal: "Rice & katogo",
            name: "breakfast",
            price: 3000
          }
        ],
        revenue: 10000
      }
    };
    expect(ordersReducer({}, action)).toEqual({
      data: [
        {
          customer: "admin",
          date: "2018-09-01",
          day: "Saturday",
          id: 1,
          meal: "Rice & katogo",
          name: "breakfast",
          price: 3000
        }
      ],
      revenue: 10000
    });
  });
  it("should change the store accordingly on get single customer orders", () => {
    const action = {
      type: GOT_CUSTOMER_ORDERS,
      payload: {
        orders: [
          {
            customer: "admin",
            date: "2018-09-01",
            day: "Saturday",
            id: 1,
            meal: "Rice & katogo",
            name: "breakfast",
            price: 3000
          }
        ],
        credit: 10000
      }
    };
    expect(ordersReducer({}, action)).toEqual({
      customer_orders: [
        {
          customer: "admin",
          date: "2018-09-01",
          day: "Saturday",
          id: 1,
          meal: "Rice & katogo",
          name: "breakfast",
          price: 3000
        }
      ],
      credit: 10000
    });
  });
});
