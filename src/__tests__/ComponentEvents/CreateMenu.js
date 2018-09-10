import React from "react";
import { shallow, mount } from "enzyme";
import { CreateMenu } from "../../components/CreateMenu";
import toJson from "enzyme-to-json";
import configureStore from "redux-mock-store";

function setUp() {
  const props = {
    getMeals: () => {},
    getMenus: () => {},
    createMenu: () => {},
    clearMenuMessages: () => {},

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
  test("Should change state as expected", () => {
    const wrapper = setUp();
    expect(wrapper.state("name")).toBe("");
    expect(wrapper.state("date")).toBe("");
    expect(wrapper.state("menu")).toEqual([]);
    // Yes! these values are undefined at first,
    // (just for leanrning purposes but they could be set to empty strigns initially as well)
    expect(wrapper.state("success")).toBe(undefined);
    expect(wrapper.state("error")).toBe(undefined);
  });
});

describe("<CreateMenu />", () => {
  test("Should change state as expected", () => {
    const wrapper = setUp();
    wrapper
      .find("select")
      .simulate("change", { target: { value: "breakfast", name: "name" } });
    expect(wrapper.state("name")).toEqual("breakfast");

    wrapper
      .find("#date")
      .simulate("change", { target: { value: "2018-09-02", name: "date" } });
    expect(wrapper.state("date")).toBe("2018-09-02");

    // wrapper
    //   .find("checkbox")
    //   .simulate("change", { target: { value: 1, name: "menu" } });
    // expect(wrapper.state("menu")).toBe([1]);
  });
  test("should submit as expected", () => {
    const wrapper = setUp();
    const fakeEvent = { preventDefault: () => {} };
    wrapper.find("form").simulate("submit", fakeEvent);
    //this is undefined because messages get cleared & hidden from the UI after
    expect(wrapper.state("create_error")).toBe(undefined);
  });
  test("should clear messages", () => {
    const wrapper = setUp();
    const instance = wrapper.instance();
    instance.hideMessages();
    //this is undefined after the messages get cleared
    setTimeout(() => {
      expect(wrapper.state("create_success")).toBe(undefined);
    }, 5500);
  });
  test("mounts correctly", () => {
    const wrapper = setUp();
    const instance = wrapper.instance();
    instance.componentDidMount();
    // JSON.stringify is a workaround on "Compared values have no visual difference."
    expect(JSON.stringify(wrapper.state("menu"))).toBe(JSON.stringify([]));
  });
  test("it receives the success prop", () => {
    const wrapper = setUp();
    const instance = wrapper.instance();
    const props = { success_message: "success", error_message: "" };
    instance.componentWillReceiveProps(props);
    expect(wrapper.state("create_success")).toBe("success");
  });
  test("it receives the error prop", () => {
    const wrapper = setUp();
    const instance = wrapper.instance();
    const props = { success_message: "", error_message: "error" };
    instance.componentWillReceiveProps(props);
    expect(wrapper.state("create_error")).toBe("error");
  });
});
