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
} from "../actions/types";

const initialState = {
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
};
export default function(state = initialState, action) {
  switch (action.type) {
    //   --__MEALS__--
    case CREATE_MEAL:
      return {
        ...state,
        create_meal_success_message: action.payload.message
      };
    case CREATE_MEAL_ERROR:
      return {
        ...state,
        create_meal_error_message: action.payload.message
      };
    case EDIT_MEAL:
      return {
        ...state,
        edit_meal_success_message: action.payload.message
      };
    case EDIT_MEAL_ERROR:
      return {
        ...state,
        edit_meal_error_message: action.payload.message
      };
    case MEAL_DELETED:
      return {
        ...state,
        delete_meal_success_message: action.payload.message
      };
    case MEAL_DELETION_ERROR:
      return {
        ...state,
        delete_meal_error_message: action.payload.message
      };
    //   clear meals messages
    case CLEAR_MEAL_MESSAGES:
      return {
        ...state,
        create_meal_success_message: "",
        create_meal_error_message: "",
        edit_meal_success_message: "",
        edit_meal_error_message: "",
        delete_meal_success_message: "",
        delete_meal_error_message: ""
      };
    // --__MENUS__--
    case CREATE_MENU:
      return {
        ...state,
        create_menu_success_message: action.payload.message
      };
    case CREATE_MENU_ERROR:
      return {
        ...state,
        create_menu_error_message: action.payload.message
      };
    // clear menu messages
    case CLEAR_MENU_MESSAGES:
      return {
        ...state,
        create_menu_success_message: "",
        create_menu_error_message: ""
      };
    // --__ORDERS__--
    case CREATE_ORDER:
      return {
        ...state,
        create_order_success_message: action.payload.message
      };
    case CREATE_ORDER_ERROR:
      return {
        ...state,
        create_order_error_message: action.payload.message
      };
    // clear order messages
    case CLEAR_ORDER_MESSAGES:
      return {
        ...state,
        create_order_success_message: "",
        create_order_error_message: ""
      };
    case LOGIN_ERROR:
      return {
        ...state,
        login_error_message: action.payload.message
      };
    case SIGNUP_ERROR:
      return {
        ...state,
        signup_error_message: action.payload.message
      };
    case CLEAR_CREDENTIAL_MESSAGES:
      return {
        ...state,
        login_error_message: "",
        signup_error_message: ""
      };
    default:
      return state;
  }
}
