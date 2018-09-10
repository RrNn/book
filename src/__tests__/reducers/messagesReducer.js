import {
  LOGIN_ERROR,
  SIGNUP_ERROR,
  CLEAR_CREDENTIAL_MESSAGES,
  CREATE_MEAL,
  CREATE_MEAL_ERROR,
  EDIT_MEAL,
  EDIT_MEAL_ERROR,
  MEAL_DELETED,
  CREATE_MENU,
  CREATE_MENU_ERROR,
  CREATE_ORDER,
  CREATE_ORDER_ERROR,
  CLEAR_MEAL_MESSAGES,
  CLEAR_MENU_MESSAGES,
  CLEAR_ORDER_MESSAGES,
  MEAL_DELETION_ERROR
} from "../../actions/types";
import messagesReducer from "../../reducers/messagesReducer";

describe("messagesRedcuer", () => {
  it("renders an empty intia state", () => {
    expect(messagesReducer(undefined, {})).toEqual({
      login_error_message: "",
      signup_error_message: "",

      create_meal_success_message: "",
      create_meal_error_message: "",
      edit_meal_success_message: "",
      edit_meal_error_message: "",
      delete_meal_success_message: "",
      delete_meal_error_message: "",

      create_menu_success_message: "",
      create_menu_error_message: "",

      create_order_success_message: "",
      create_order_error_message: ""
    });
  });
  it("change state accordingly on login error", () => {
    const action = {
      type: LOGIN_ERROR,
      payload: { message: "Invalid login credentials" }
    };
    expect(messagesReducer({}, action)).toEqual({
      login_error_message: "Invalid login credentials"
    });
  });
  it("changes hte state accordingly on signup error", () => {
    const action = {
      type: SIGNUP_ERROR,
      payload: { message: "Invalid signup credentials" }
    };
    expect(messagesReducer({}, action)).toEqual({
      signup_error_message: "Invalid signup credentials"
    });
  });
  it("changes the state accordingly on succesfully creating a meal", () => {
    const action = {
      type: CREATE_MEAL,
      payload: { message: "Meal successfully created" }
    };
    expect(messagesReducer({}, action)).toEqual({
      create_meal_success_message: "Meal successfully created"
    });
  });
  it("changes the state accordingly on unsuccesfully creating a meal", () => {
    const action = {
      type: CREATE_MEAL_ERROR,
      payload: { message: "An error occured" }
    };
    expect(messagesReducer({}, action)).toEqual({
      create_meal_error_message: "An error occured"
    });
  });
  it("changes the state accordingly on succesfully editing a meal", () => {
    const action = {
      type: EDIT_MEAL,
      payload: { message: "Meal edited" }
    };
    expect(messagesReducer({}, action)).toEqual({
      edit_meal_success_message: "Meal edited"
    });
  });
  it("changes the state accordingly on unsuccesfully editing a meal", () => {
    const action = {
      type: EDIT_MEAL_ERROR,
      payload: { message: "Meal not edited" }
    };
    expect(messagesReducer({}, action)).toEqual({
      edit_meal_error_message: "Meal not edited"
    });
  });
  it("changes the state accordingly on succesfully deleting a meal", () => {
    const action = {
      type: MEAL_DELETED,
      payload: { message: "Meal deleted" }
    };
    expect(messagesReducer({}, action)).toEqual({
      delete_meal_success_message: "Meal deleted"
    });
  });
  it("changes the state accordingly on unsuccesfully deleting a meal", () => {
    const action = {
      type: MEAL_DELETION_ERROR,
      payload: { message: "Meal not deleted" }
    };
    expect(messagesReducer({}, action)).toEqual({
      delete_meal_error_message: "Meal not deleted"
    });
  });
  it("changes the state accordingly on succesfully creating a menu", () => {
    const action = {
      type: CREATE_MENU,
      payload: { message: "Menu created" }
    };
    expect(messagesReducer({}, action)).toEqual({
      create_menu_success_message: "Menu created"
    });
  });
  it("changes the state accordingly on unsuccesfully creating a menu", () => {
    const action = {
      type: CREATE_MENU_ERROR,
      payload: { message: "Menu not created" }
    };
    expect(messagesReducer({}, action)).toEqual({
      create_menu_error_message: "Menu not created"
    });
  });
  it("changes the state accordingly on succesfully creating an order", () => {
    const action = {
      type: CREATE_ORDER,
      payload: { message: "Order created" }
    };
    expect(messagesReducer({}, action)).toEqual({
      create_order_success_message: "Order created"
    });
  });
  it("changes the state accordingly on unsuccesfully creating an order", () => {
    const action = {
      type: CREATE_ORDER_ERROR,
      payload: { message: "Order not created" }
    };
    expect(messagesReducer({}, action)).toEqual({
      create_order_error_message: "Order not created"
    });
  });
  it("changes the state accordingly on succesfully clearing credential messages", () => {
    const action = {
      type: CLEAR_CREDENTIAL_MESSAGES,
      login_error_message: "",
      signup_error_message: ""
    };
    expect(messagesReducer({}, action)).toEqual({
      login_error_message: "",
      signup_error_message: ""
    });
  });
  it("changes the state accordingly on succesfully clearing all meal messages", () => {
    const action = {
      type: CLEAR_MEAL_MESSAGES,
      create_meal_success_message: "",
      create_meal_error_message: "",
      edit_meal_success_message: "",
      edit_meal_error_message: "",
      delete_meal_success_message: "",
      delete_meal_error_message: ""
    };
    expect(messagesReducer({}, action)).toEqual({
      create_meal_success_message: "",
      create_meal_error_message: "",
      edit_meal_success_message: "",
      edit_meal_error_message: "",
      delete_meal_success_message: "",
      delete_meal_error_message: ""
    });
  });
  it("changes the state accordingly on succesfully clearing all menu messages", () => {
    const action = {
      type: CLEAR_MENU_MESSAGES,
      create_menu_success_message: "",
      create_menu_error_message: ""
    };
    expect(messagesReducer({}, action)).toEqual({
      create_menu_success_message: "",
      create_menu_error_message: ""
    });
  });
  //   it("changes the state accordingly on succesfully clearing all order messages", () => {
  //     const action = {
  //       type: CLEAR_ORDER_MESSAGES,
  //       create_order_success_message: "",
  //       create_order_error_message: ""
  //     };
  //     expect(messagesReducer({}, action)).toEqual({
  //       create_order_success_message: "",
  //       create_order_error_message: ""
  //     });
  //   });
});
