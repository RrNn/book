import mealsReducer from "../../reducers/mealsReducer";
import {
  GET_MEALS,
  START_EDITING_MEAL,
  FINISH_EDITING_MEAL
} from "../../actions/types";

describe("mealsReducer", () => {
  it("Expect the initital state to be empty", () => {
    expect(mealsReducer(undefined, {})).toEqual({
      data: [],
      meal_to_edit: {},
      editing_mode: false
    });
  });
  it("Should change the state accordingly when the meals are got", () => {
    const action = {
      type: GET_MEALS,
      payload: [{ id: 1, meal_option: "Ugali and gnuts", meal_price: 5000 }]
    };
    expect(mealsReducer({}, action)).toEqual({
      data: [{ id: 1, meal_option: "Ugali and gnuts", meal_price: 5000 }]
    });
  });
  it("Should change the state accordingly when editing meal starts", () => {
    const action = {
      type: START_EDITING_MEAL,
      payload: { id: 1, meal_option: "Ugali and gnuts", meal_price: 5000 },
      editing_mode: true
    };
    expect(mealsReducer({}, action)).toEqual({
      meal_to_edit: { id: 1, meal_option: "Ugali and gnuts", meal_price: 5000 },
      editing_mode: true
    });
  });
  it("should change the state accordingly then meal edit mode is finished", () => {
    const action = {
      type: FINISH_EDITING_MEAL,
      payload: {},
      editing_mode: false
    };
    expect(mealsReducer({}, action)).toEqual({
      meal_to_edit: {},
      editing_mode: false
    });
  });
});
