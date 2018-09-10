import React from "react";
import { shallow, mount } from "enzyme";
import { EditMeal } from "../../components/EditMeal";
import toJson from "enzyme-to-json";
import configureStore from "redux-mock-store";

function setUp() {
  const props = {
    getMeals: () => {},
    editMeal: () => {},
    deleteMeal: () => {},
    clearMealMessages: () => {},
    editMealInitialised: () => {},

    meal: { id: 1, meal_option: "rice", meal_price: 5000 }
  };

  return shallow(<EditMeal {...props} />);
}

describe("<EditMeal />", () => {
  describe("render()", () => {
    test("renders the EditMeal component", () => {
      const wrapper = setUp();
      expect(wrapper.find("div").length).toBe(3);
    });
  });
});
