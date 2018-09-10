import React from "react";
import { shallow, mount } from "enzyme";
import { EditMeal } from "../../components/EditMeal";

function setUp() {
  const props = {
    editMeal: () => {},
    finishEdit: () => {},
    clearMealMessages: () => {},
    meal: {
      meal_option: "",
      meal_option_price: "",
      meal_id: null
    }
  };
  return shallow(<EditMeal {...props} />);
}

describe("EDitMeal", () => {
  it("has a correct intitial state", () => {
    const wrapper = setUp();
    expect(wrapper.state("meal_option")).toBe("");
  });

  it("handles onChange correctly", () => {
    const wrapper = setUp();
    wrapper
      .find("#meal_option")
      .simulate("change", { target: { name: "meal_option", value: "rice" } });
    expect(wrapper.state("meal_option")).toBe("rice");
  });
  it("recieves props", () => {
    const wrapper = setUp();
    const instance = wrapper.instance();
    const props = {
      meal: { meal_option: "rice", meal_option_price: 5000, meal_id: 1 }
    };
    instance.componentWillReceiveProps(props);
    expect(wrapper.state("meal_option")).toBe("rice");
    expect(wrapper.state("meal_option_price")).toBe(5000);
    expect(wrapper.state("meal_id")).toBe(1);
  });
  it("can submit", () => {
    const wrapper = setUp();

    const fakeEvent = { preventDefault: () => {} };
    wrapper.find("form").simulate("submit", fakeEvent);
    expect(wrapper.state("meal_option")).toBe("");
    expect(wrapper.state("meal_option_price")).toBe("");
    expect(wrapper.state("meal_id")).toBe(null);
  });

  //   it("mounts with necessary props", () => {
  //     const wrapper = setUp();
  //     wrapper.setProps({
  //       meal: { meal_option: "rice", meal_option_price: 5000, meal_id: 1 }
  //     });
  //     expect(wrapper.state("meal_option")).toBe("rice");
  //     expect(wrapper.state("meal_option_price")).toBe(5000);
  //     expect(wrapper.state("meal_id")).toBe(1);
  //   });
});
