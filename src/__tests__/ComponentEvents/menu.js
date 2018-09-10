import React from "react";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import configureStore from "redux-mock-store";
import { Menu } from "../../components/Menu";

function setUp() {
  const props = {
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
          dinner: [
            {
              id: 1,
              meal_option: "Ugali",
              meal_option_price: 5000
            }
          ],
          lunch: [
            {
              id: 1,
              meal_option: "Ugali",
              meal_option_price: 5000
            }
          ],
          supper: [
            {
              id: 1,
              meal_option: "Ugali",
              meal_option_price: 5000
            }
          ]
        }
      }
    ]
  };
  return shallow(<Menu {...props} />);
}

describe("Making an order off of the menu", () => {
  it("State should come as expected", () => {
    const wrapper = setUp();
    expect(wrapper.state("orderInitiated")).toBe(false);
    expect(wrapper.state("menuCategory")).toBe("");
    expect(wrapper.state("orderDate")).toBe("");
    expect(wrapper.state("orderMealId")).toBe(null);
  });
  it("Should change the state when breakfast order button is initiated", () => {
    const wrapper = setUp();
    const fakeEvent = { preventDefault: () => {} };
    wrapper.find("#bo-1").simulate("click", fakeEvent);
    expect(wrapper.state("menuCategory")).toBe("breakfast");
    expect(wrapper.state("orderInitiated")).toBe(true);
  });
  it("Should change the state when lunch order button is initiated", () => {
    const wrapper = setUp();
    const fakeEvent = { preventDefault: () => {} };
    wrapper.find("#lo-1").simulate("click", fakeEvent);
    expect(wrapper.state("menuCategory")).toBe("lunch");
    expect(wrapper.state("orderInitiated")).toBe(true);
  });
  it("Should change the state when dinner order button is initiated", () => {
    const wrapper = setUp();
    const fakeEvent = { preventDefault: () => {} };
    wrapper.find("#do-1").simulate("click", fakeEvent);
    expect(wrapper.state("menuCategory")).toBe("dinner");
    expect(wrapper.state("orderInitiated")).toBe(true);
  });
  it("Should change the state when supper order button is initiated", () => {
    const wrapper = setUp();
    const fakeEvent = { preventDefault: () => {} };
    wrapper.find("#so-1").simulate("click", fakeEvent);
    expect(wrapper.state("menuCategory")).toBe("supper");
    expect(wrapper.state("orderInitiated")).toBe(true);
  });
  // it("Should repond to onchange as expected when putting the number of orders", () => {
  //   const wrapper = setUp();
  //   wrapper.find("button").simulate("click");
  //   expect(wrapper.state("orderNumber")).not.toBe(null);
  // });
});
