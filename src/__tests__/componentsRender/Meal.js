import React from "react";
import { shallow, mount } from "enzyme";
import { Meal } from "../../components/Meal";
import toJson from "enzyme-to-json";
import configureStore from "redux-mock-store";

function setUp() {
  const props = {
    getMeals: () => {},
    deleteMeal: () => {},
    clearMealMessages: () => {},
    editMealInitialised: () => {},

    meals: [{ id: 1, meal_option: "rice", meal_price: 5000 }]
  };

  return shallow(<Meal {...props} />);
}

describe("<Meal />", () => {
  describe("render()", () => {
    test("renders the Meal component", () => {
      const wrapper = setUp();
      expect(wrapper.find("div").length).toBe(11);
    });
  });
});
