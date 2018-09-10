import React from "react";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import configureStore from "redux-mock-store";
import { Order } from "../../components/Order";

function setUp() {
  const props = {
    getOrders: () => {},

    orders: [
      {
        details: {
          customer: "admin",
          date: "2018-09-01",
          day: "Saturday",
          meal: "Rice & katogo",
          name: "breakfast",
          price: 3000
        },
        ids: [1, 2],
        order_number: 2
      }
    ]
  };
  return mount(<Order {...props} />);
}

describe("<Order />", () => {
  describe("render()", () => {
    test("renders the Order component", () => {
      const wrapper = setUp();
      expect(wrapper.find("div").length).toBe(15);
    });
  });
});
