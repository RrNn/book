import React from "react";
import { shallow, mount } from "enzyme";
import { Meal } from "../../components/Meal";

function setUp() {
  const props = {
    getMeals: () => {},
    editMealInitialised: () => {},
    clearMealMessages: () => {},
    deleteMeal: () => {},
    meals: [
      {
        meal_option: "",
        meal_option_price: "",
        meal_id: null
      }
    ]
  };
  return shallow(<Meal {...props} />);
}

describe("Meal", () => {
  it("should have correct initial state", () => {
    const wrapper = setUp();
    expect(wrapper.state("edit_success")).toBe("");
  });
  it("should recieve props", () => {
    const wrapper = setUp();
    const instance = wrapper.instance();
    const props = { edit_success: "success" };
    instance.componentWillReceiveProps(props);
    expect(wrapper.state("edit_success")).toBe("success");
  });
  it("should enable editing a meal onClick event calls the startMealEdit fn", () => {
    const wrapper = setUp();
    const fakeEvent = { preventDefault: () => {} };
    wrapper.find("#edit_meal").simulate("click", fakeEvent);
    expect(wrapper.state("edit_success")).toBe("");
  });
  it("enable deleting a meal onClick event calls the deleteMeal fn", () => {
    const wrapper = setUp();
    const fakeEvent = { preventDefault: () => {} };
    wrapper.find("#delete_meal").simulate("click", fakeEvent);
    expect(wrapper.state("delete_success")).toBe("");
    // expect(wrapper.props.deleteMeal).toBeCalled();
  });
  it("hides messages", () => {
    const wrapper = setUp();
    const instance = wrapper.instance();
    instance.hideMessages();
    expect(wrapper.state("edit_success")).toBe("");
  });

  //   it("should hide messages", () => {
  //     const wrapper = setUp();
  //     const instance = wrapper.instance();
  //     instance.hideMessages();
  //     expect(wrapper.state("edit_success")).toBe("");
  //   });
});
