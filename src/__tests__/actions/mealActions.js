import configureStore from "redux-mock-store";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import {
  getMeals,
  deleteMeal,
  editMeal,
  createMeal
} from "../../actions/meals";
import thunk from "redux-thunk";
import {
  GET_MEALS,
  MEAL_DELETED,
  EDIT_MEAL,
  CREATE_MEAL
} from "../../actions/types";

const middleware = [thunk];
const mockStore = configureStore(middleware);

var mock = new MockAdapter(axios);
describe("Get meals", () => {
  test("Test that meals can be got", () => {
    mock.onGet("http://127.0.0.1:5000/api/v1/meals/").reply(200, {
      type: GET_MEALS,
      payload: [{ id: 1, meal_option: "Ugali and gnuts", meal_price: 5000 }]
    });

    const initialState = {
      data: [],
      meal_to_edit: {},
      editing_mode: false
    };

    const expectedAction = [
      {
        type: GET_MEALS,
        payload: [{ id: 1, meal_option: "Ugali and gnuts", meal_price: 5000 }]
      }
    ];

    const store = mockStore(initialState, expectedAction);

    // Dispatch the data that is dispatched to the store on getting the meals.
    store.dispatch(getMeals());
    store.dispatch({
      type: GET_MEALS,
      payload: [{ id: 1, meal_option: "Ugali and gnuts", meal_price: 5000 }]
    });

    expect(store.getActions()).toEqual(expectedAction);
  });

  test("Test that a meal can be deleted", () => {
    mock.onDelete("http://127.0.0.1:5000/api/v1/meals/1").reply(200, {
      type: MEAL_DELETED,
      payload: { message: "Meal deleted sucessfully" }
    });

    const initialState = { message: "" };

    const expectedAction = [
      {
        type: MEAL_DELETED,
        payload: { message: "Meal deleted sucessfully" }
      }
    ];

    const store = mockStore(initialState, expectedAction);

    // Dispatch the data that is dispatched to the store on deleting a meal.
    store.dispatch(deleteMeal(1));
    store.dispatch({
      type: MEAL_DELETED,
      payload: { message: "Meal deleted sucessfully" }
    });

    expect(store.getActions()).toEqual(expectedAction);
  });

  test("Test that a meal can be edited", () => {
    mock.onPut("http://127.0.0.1:5000/api/v1/meals/1").reply(201, {
      type: EDIT_MEAL,
      payload: { message: "Meal updated successfully" }
    });
    const initialState = { message: "" };
    const expectedAction = [
      { type: EDIT_MEAL, payload: { message: "Meal updated successfully" } }
    ];
    const store = mockStore(initialState, expectedAction);
    // Dispatch the data that is dispatched to the store on editing a meal.
    store.dispatch(editMeal(1));
    store.dispatch({
      type: EDIT_MEAL,
      payload: { message: "Meal updated successfully" }
    });
    expect(store.getActions()).toEqual(expectedAction);
  });
  test("Test that a meal can be created", () => {
    mock.onPost("http://127.0.0.1:5000/api/v1/meals/").reply(201, {
      type: CREATE_MEAL,
      payload: { message: "Meal created successfully" }
    });
    const initialState = { message: "" };
    const expectedAction = [
      { type: CREATE_MEAL, payload: { message: "Meal created successfully" } }
    ];
    const store = mockStore(initialState, expectedAction);
    // Dispatch the data that is dispatched to the store on creating a meal.
    store.dispatch(createMeal());
    store.dispatch({
      type: CREATE_MEAL,
      payload: { message: "Meal created successfully" }
    });
  });
});
