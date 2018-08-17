import {
  GET_MEALS,
  START_EDITING_MEAL,
  FINISH_EDITING_MEAL
} from "../actions/types";

const initialState = {
  data: [],
  meal_to_edit: {},
  editing_mode: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_MEALS:
      return {
        ...state,
        data: action.payload
      };
    case START_EDITING_MEAL:
      return {
        ...state,
        meal_to_edit: action.payload,
        editing_mode: true
      };
    case FINISH_EDITING_MEAL:
      return {
        ...state,
        meal_to_edit: {},
        editing_mode: false
      };
    default:
      return state;
  }
}
