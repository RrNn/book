import { combineReducers } from "redux";
import menusReducer from "./menusReducer";
import mealsReducer from "./mealsReducer";
import ordersReducer from "./ordersReducer";
import messagesReducer from "./messagesReducer";
import authReducer from "./authReducer";

export default combineReducers({
  auth: authReducer,
  menus: menusReducer,
  meals: mealsReducer,
  orders: ordersReducer,
  messages: messagesReducer
});
