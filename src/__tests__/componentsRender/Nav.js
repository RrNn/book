import React from "react";
import { shallow } from "enzyme";
import { Nav } from "../../components/Nav";

describe("<Nav />", () => {
  test("renders the navbar div", () => {
    const wrapper = shallow(<Nav />);

    expect(wrapper.find("div").length).toBe(1);
  });
  test("renders the non admin lis", () => {
    const wrapper = shallow(<Nav />);
    expect(wrapper.find("li").length).toBe(3);
  });
  test("renders the admin lis", () => {
    const props = { admin: "true" };
    const wrapper = shallow(<Nav state={props} />);
    //set the is_admin to show more links
    wrapper.setState({ is_admin: "true" });
    expect(wrapper.find("li").length).toBe(6);
  });
  // localStorage issues... Needs reserch on how to mock it later
  // test("can sign out", () => {
  //   const wrapper = shallow(<Nav />);
  //   wrapper.find("#signOut").simulate("click");
  //   // const instance = wrapper.instance()
  //   // instance.signOut()
  // });
});
