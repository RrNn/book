import React from "react";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import configureStore from "redux-mock-store";
import { CustomerOrder } from "../../components/CustomerOrder";

function setUp() {
  const props = {
    getCustomerOrders: () => {},
    credit: 5000,
    my_orders: [
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
  return shallow(<CustomerOrder {...props} />);
}

describe("<CustomerOrder />", () => {
  describe("render()", () => {
    test("renders the CustomerOrder component", () => {
      const wrapper = setUp();
      expect(wrapper.find("div").length).toBe(12);
    });
  });
});
