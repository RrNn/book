import { GET_ORDERS, GOT_CUSTOMER_ORDERS } from "../actions/types";

const initialState = {
  data: [],
  revenue: 0,
  customer_orders: [],
  credit: 0
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ORDERS:
      return {
        ...state,
        data: action.payload.orders,
        revenue: action.payload.revenue
      };
    case GOT_CUSTOMER_ORDERS:
      return {
        ...state,
        customer_orders: action.payload.orders,
        credit: action.payload.credit
      };
    default:
      return state;
  }
}
