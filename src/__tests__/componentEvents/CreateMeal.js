import React from "react";
import { shallow, mount } from "enzyme";
import { CreateMeal } from "../../components/CreateMeal";
import toJson from "enzyme-to-json";

function setUp() {
  const props = {
    createMeal: () => {},
    clearMealMessages: () => {}
  };
  return shallow(<CreateMeal {...props} />);
}

describe("CrreateMeal", () => {
  it("renders initial state correctly", () => {
    const wrapper = setUp();
    expect(wrapper.state("meal_option")).toBe("");
  });
  it("responds to event changes correctly", () => {
    const wrapper = setUp();
    wrapper
      .find("#meal_option")
      .simulate("change", { target: { name: "meal_option", value: "milk" } });
    expect(wrapper.state("meal_option")).toBe("milk");
  });
  it("is able to submit", () => {
    const wrapper = setUp();
    const fakeEvent = { preventDefault: () => {} };
    wrapper.find("form").simulate("submit", fakeEvent);
    expect(wrapper.state("meal_option")).toBe("");
  });
  it("is able to receive the success_message prop", () => {
    const wrapper = setUp();
    const instance = wrapper.instance();
    const props = { success_message: "success", error_message: "" };
    instance.componentWillReceiveProps(props);
    expect(wrapper.state("success")).toBe("success");
  });
  it("is able to receive the error_message prop", () => {
    const wrapper = setUp();
    const instance = wrapper.instance();
    const props = { success_message: "", error_message: "error" };
    instance.componentWillReceiveProps(props);
    expect(wrapper.state("error")).toBe("error");
  });
  it("is able to hide messages", () => {
    const wrapper = setUp();
    const instance = wrapper.instance();
    const props = { success_message: "", error_message: "error" };
    instance.hideMessages();
    expect(wrapper.state("error")).toBe("");
  });
});
