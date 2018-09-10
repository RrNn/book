import React from "react";
import { shallow, mount } from "enzyme";
import { Index } from "../../components/Index";

describe("<Index />", () => {
  describe("render()", () => {
    test("renders the Index component", () => {
      const wrapper = mount(<Index />);
      expect(wrapper.find("div").length).toBe(4);
    });
    test("renders the Index without children", () => {
      const wrapper = shallow(<Index />);
      expect(wrapper.find("div").length).toBe(1);
    });
  });
});
