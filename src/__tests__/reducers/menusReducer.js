import { GET_MENUS } from "../../actions/types";
import menusReducer from "../../reducers/menusReducer";

describe("menusReducer", () => {
  it("Should render an empty initial state", () => {
    expect(menusReducer(undefined, {})).toEqual({
      data: []
    });
  });
  it("Should change the state on get menus as expected", () => {
    const action = {
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
    };
    expect(menusReducer({}, action)).toEqual({
      data: [
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
  });
});
