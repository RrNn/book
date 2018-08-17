import {
  GET_ORDERS,
  CREATE_ORDER,
  CREATE_ORDER_ERROR,
  CLEAR_ORDER_MESSAGES
} from "../actions/types";

const initialState = {
  data: [],
  revenue: 0
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ORDERS:
      return {
        ...state,
        data: action.payload.orders,
        revenue: action.payload.revenue
      };
    default:
      return state;
  }
}
