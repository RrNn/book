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
    ]
  };
  return mount(<Menu {...props} />);
}

describe("<Menu />", () => {
  describe("render()", () => {
    test("renders the component", () => {
      // const wrapper = shallow(<Menu store={store} />);
      const wrapper = setUp();
      // const component = wrapper.dive();
      expect(wrapper.find("div").length).toBe(25);
    });
  });
});
