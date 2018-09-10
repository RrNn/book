import React from "react";
import { shallow, mount } from "enzyme";
import { LoginForm } from "../../components/LoginForm";
import toJson from "enzyme-to-json";
import configureStore from "redux-mock-store";

function setUp() {
  const props = {
    loginUser: () => {},
    signUpUser: () => {},
    clearCredentialMessages: () => {}
  };
  return shallow(<LoginForm {...props} />);
}

describe("Login form", () => {
  it("state should come as expected", () => {
    const wrapper = setUp();
    expect(wrapper.state("signingUp")).toBe(false);
    expect(wrapper.state("email")).toBe("");
    expect(wrapper.state("name")).toBe("");
    expect(wrapper.state("password")).toBe("");
    expect(wrapper.state("password_conf")).toBe("");
    expect(wrapper.state("location")).toBe("");
    expect(wrapper.state("token")).toBe(null);
  });
  it("responds to onChange event of name as expected", () => {
    const wrapper = setUp();
    wrapper
      .find("form")
      .simulate("change", { target: { name: "name", value: "richard" } });
    expect(wrapper.state("name")).toBe("richard");
    expect(wrapper.state("login_error")).toBe("");
    expect(wrapper.state("signup_error")).toBe("");
  });
  it("responds to onChange event of email as expected", () => {
    const wrapper = setUp();
    wrapper.find("form").simulate("change", {
      target: { name: "email", value: "richard@hotmail.com" }
    });
    expect(wrapper.state("email")).toBe("richard@hotmail.com");
  });
  it("is able to signup on submit", () => {
    const wrapper = setUp();
    const fakeEvent = { preventDefault: () => {} };
    wrapper.setState({ signingUp: true });
    wrapper.find("form").simulate("submit", fakeEvent);
    const instance = wrapper.instance();
    expect(wrapper.state("signingUp")).toBe(true);
  });
  it("is able to login on submit", () => {
    const wrapper = setUp();
    const fakeEvent = { preventDefault: () => {} };
    wrapper.setState({ signingUp: false });
    wrapper.find("form").simulate("submit", fakeEvent);
    const instance = wrapper.instance();
    expect(wrapper.state("signingUp")).toBe(false);
  });
  it("toggles login and signup as expected (signingUp=false)", () => {
    const wrapper = setUp();
    const fakeEvent = { preventDefault: () => {} };
    wrapper.setState({ signingUp: false });
    wrapper.find("#toggler").simulate("click", fakeEvent);
    expect(wrapper.state("signingUp")).toBe(true);
  });

  it("toggles login and signup as expected (signingUp=true)", () => {
    const wrapper = setUp();
    const fakeEvent = { preventDefault: () => {} };
    wrapper.setState({ signingUp: true });
    wrapper.find("#toggler").simulate("click", fakeEvent);
    expect(wrapper.state("signingUp")).toBe(false);
  });

  it("recieves login_error_message prop as expected", () => {
    const wrapper = setUp();
    const fakeEvent = { preventDefault: () => {} };
    const instance = wrapper.instance();
    const props = {
      login_error_message: "login error occured",
      signup_error_message: ""
    };
    instance.componentWillReceiveProps(props);
    expect(wrapper.state("login_error")).toBe("login error occured");
  });

  it("recieves the signup_error_message prop as expected", () => {
    const wrapper = setUp();
    const fakeEvent = { preventDefault: () => {} };
    const instance = wrapper.instance();
    const props = {
      login_error_message: "",
      signup_error_message: "signup error occured"
    };
    instance.componentWillReceiveProps(props);
    expect(wrapper.state("signup_error")).toBe("signup error occured");
  });
  it("recieves the token prop as expected", () => {
    const wrapper = setUp();
    const fakeEvent = { preventDefault: () => {} };
    const instance = wrapper.instance();
    const props = { token: "someHashedToken" };
    instance.componentWillReceiveProps(props);
    expect(wrapper.state("signup_error")).toBe("");
    expect(wrapper.state("login_error")).toBe("");
  });
});
