import { GET_MENUS } from "../actions/types";

const initialState = {
  data: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_MENUS:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
}
