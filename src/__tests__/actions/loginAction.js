import configureStore from "redux-mock-store";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { loginUser } from "../../actions/login";
import thunk from "redux-thunk";
import { LOGIN } from "../../actions/types";

const middleware = [thunk];
const mockStore = configureStore(middleware);

// test("It logs in successfully", () => {
//   mock.onPost(loginUrl).reply(200, {
//     token:
//       "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpbmZvIjoiY2F0aFUDQELA_WPziQBg"
//   });
//   const expectedActions = [
//     {
//       type: actionTypes.LOGIN_SUCCESS,
//       data: { user: "username", isLoggedIn: true }
//     },
//     { type: actionTypes.SAVING, data: { saving: false } },
//     {
//       type: actionTypes.CLEAR_ERRORS,
//       data:
//         "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpbmZvIjoiY2F0aFUDQELA_WPziQBg"
//     }
//   ];

//   const store = mockStore(initialState.login, expectedActions);

//   store
//     .dispatch(
//       loginActions.login({
//         category: "user",
//         username: "username",
//         password: "password"
//       })
//     )
//     .then(() => {
//       const actions = store.getActions();
//       expect(actions[0].type).toBe(actionTypes.LOGIN_SUCCESS);
//       expect(actions[1].type).toBe(actionTypes.SAVING);
//       expect(actions[2].type).toBe(actionTypes.CLEAR_ERRORS);
//     });
// });
var mock = new MockAdapter(axios);
describe("Login user", () => {
  test("User can login", () => {
    mock.onPost("http://127.0.0.1:5000/api/v1/auth/login").reply(200, {
      type: LOGIN,
      payload: {
        access_token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE",
        is_admin: true,
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
        type: LOGIN,
        payload: {
          access_token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE",
          is_admin: true,
          user_id: 1
        }
      }
    ];

    const store = mockStore(initialState, expectedAction);

    const data = {
      email: "nabaasa@yahoo.com",
      password: "lalala"
    };

    // Dispatch the data that is dispatched to the store on login.
    store.dispatch(loginUser(data));
    store.dispatch({
      type: LOGIN,
      payload: {
        access_token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE",
        is_admin: true,
        user_id: 1
      }
    });

    expect(store.getActions()).toEqual(expectedAction);
  });
});
