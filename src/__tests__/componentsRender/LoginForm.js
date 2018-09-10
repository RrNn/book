import React from "react";
import { shallow, mount } from "enzyme";
import { LoginForm } from "../../components/LoginForm";

describe("<LoginForm />", () => {
  describe("render()", () => {
    test("renders the login form", () => {
      const wrapper = mount(<LoginForm />);

      expect(wrapper.find("div").length).toBe(6);
    });
  });
});
