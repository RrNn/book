import authReducer from "../../reducers/authReducer";
import { LOGIN, SIGNUP } from "../../actions/types";

describe("authReducer", () => {
  it("Expect the initial state to be empty", () => {
    expect(authReducer(undefined, {})).toEqual({ token: "", message: "" });
  });
  it("Should update the store accordingly message on login", () => {
    const action = {
      type: LOGIN,
      payload: {
        access_token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9"
      }
    };
    expect(authReducer({}, action)).toEqual({
      token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9"
    });
  });
  it("Should update store accordingly on signup", () => {
    const action = {
      type: SIGNUP,
      payload: {
        message: "welcome, thanks for signing up"
      }
    };
    expect(authReducer({}, action)).toEqual({
      message: "welcome, thanks for signing up"
    });
  });
});
