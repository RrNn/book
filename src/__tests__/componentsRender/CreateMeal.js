import React from "react";
import { shallow, mount } from "enzyme";
import { CreateMeal } from "../../components/CreateMeal";
import toJson from "enzyme-to-json";
import configureStore from "redux-mock-store";

describe("<Meal />", () => {
  describe("render()", () => {
    test("renders the CreateMeal component", () => {
      const wrapper = shallow(<CreateMeal />);
      expect(wrapper.find("div").length).toBe(3);
    });
  });
});
