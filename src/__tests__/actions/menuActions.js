import configureStore from "redux-mock-store";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { createMenu, getMenus } from "../../actions/menus";
import thunk from "redux-thunk";
import { GET_MENUS, CREATE_MENU } from "../../actions/types";

const middleware = [thunk];
const mockStore = configureStore(middleware);

var mock = new MockAdapter(axios);
describe("Get menus", () => {
  test("Test that menus can be got", () => {
    mock.onGet("http://127.0.0.1:5000/api/v1/menu").reply(200, {
      type: GET_MENUS,
      payload: [
        {
          date: "2018-09-01",
          day: "Saturday",
          id: 1,
          menu: {
            breakfast: [
              { id: 1, meal_option: "bread", meal_option_price: 5000 }
            ],
            dinner: [],
            lunch: [],
            supper: []
          }
        }
      ]
    });

    const initialState = {
      data: []
    };

    const expectedAction = [
      {
        type: GET_MENUS,
        payload: [
          {
            date: "2018-09-01",
            day: "Saturday",
            id: 1,
            menu: {
              breakfast: [
                { id: 1, meal_option: "bread", meal_option_price: 5000 }
              ],
              dinner: [],
              lunch: [],
              supper: []
            }
          }
        ]
      }
    ];

    const store = mockStore(initialState, expectedAction);
    // Dispatch the data that is dispatched to the store on getting the meals.
    store.dispatch(getMenus());
    store.dispatch({
      type: GET_MENUS,
      payload: [
        {
          date: "2018-09-01",
          day: "Saturday",
          id: 1,
          menu: {
            breakfast: [
              { id: 1, meal_option: "bread", meal_option_price: 5000 }
            ],
            dinner: [],
            lunch: [],
            supper: []
          }
        }
      ]
    });
    expect(store.getActions()).toEqual(expectedAction);
  });

  test("Test that a menu can be created", () => {
    mock.onPost("http://127.0.0.1:5000/api/v1/menu").reply(201, {
      type: CREATE_MENU,
      payload: { message: "Menu has been created" }
    });

    const initialState = {
      message: ""
    };

    const expectedAction = [
      {
        type: CREATE_MENU,
        payload: { message: "Menu has been created" }
      }
    ];

    const store = mockStore(initialState, expectedAction);
    // Dispatch the data that is dispatched to the store on getting the meals.
    store.dispatch(createMenu());
    store.dispatch({
      type: CREATE_MENU,
      payload: { message: "Menu has been created" }
    });
    expect(store.getActions()).toEqual(expectedAction);
  });
});
