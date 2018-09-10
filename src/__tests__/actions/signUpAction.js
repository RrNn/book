import configureStore from "redux-mock-store";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { signUpUser } from "../../actions/signup";
import thunk from "redux-thunk";
import { SIGNUP } from "../../actions/types";

const middleware = [thunk];
const mockStore = configureStore(middleware);

var mock = new MockAdapter(axios);
describe("Signup user", () => {
  test("User can login", () => {
    mock.onPost("http://127.0.0.1:5000/api/v1/auth/login").reply(200, {
      type: SIGNUP,
      payload: {
        access_token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE",
        is_admin: true,
        message: "welcome, thanks for signing up",
        user_id: 1
      }
    });

    const initialState = [
      {
        token: "",
        message: ""
      }
    ];

    const expectedAction = [
      {
        type: SIGNUP,
        payload: {
          access_token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE",
          is_admin: true,
          message: "welcome, thanks for signing up",
          user_id: 1
        }
      }
    ];

    const store = mockStore(initialState, expectedAction);

    const data = {
      name: "richard",
      email: "richardnabssal@gmail.com",
      password: "lalala",
      password_conf: "lalala",
      location: "Kampala"
    };

    // Dispatch the data that is dispatched to the store on signup.
    store.dispatch(signUpUser(data));
    store.dispatch({
      type: SIGNUP,
      payload: {
        access_token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE",
        is_admin: true,
        message: "welcome, thanks for signing up",
        user_id: 1
      }
    });

    expect(store.getActions()).toEqual(expectedAction);
  });
});
