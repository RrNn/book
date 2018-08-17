import { LOGIN, SIGNUP } from "../actions/types";

const initialState = {
  token: "",
  message: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        token: action.payload.access_token
      };
    case SIGNUP:
      return {
        ...state,
        token: action.payload.access_token,
        message: action.payload.message
      };
    default:
      return state;
  }
}
