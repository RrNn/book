import React from "react";
import { shallow, mount } from "enzyme";
import { CreateMenu } from "../../components/CreateMenu";
import toJson from "enzyme-to-json";
import configureStore from "redux-mock-store";

function setUp() {
  const props = {
    getMeals: () => {},
    getMenus: () => {},

    menus: [
      {
        date: "2018-09-01",
        day: "Saturday",
        id: 2,
        menu: {
          breakfast: [
            {
              id: 1,
              meal_option: "Ugali",
              meal_option_price: 5000
            }
          ],
          dinner: [],
          lunch: [
            {
              id: 1,
              meal_option: "Ugali",
              meal_option_price: 5000
            }
          ],
          supper: []
        }
      }
    ],
    meals: [{ id: 1, meal_option: "rice", meal_price: 5000 }]
  };

  return shallow(<CreateMenu {...props} />);
}

describe("<CreateMenu />", () => {
  describe("render()", () => {
    test("renders the CreateMenu component", () => {
      const wrapper = setUp();
      expect(wrapper.find("div").length).toBe(10);
    });
  });
});
