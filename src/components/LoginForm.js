import React, { Component } from "react";
import "../login.css";
import { connect } from "react-redux";
import { loginUser, clearCredentialMessages } from "../actions/login";
import { signUpUser } from "../actions/signup";

// import PropTypes from "prop-types";

export class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signingUp: false,
      name: "",
      email: "",
      password: "",
      password_conf: "",
      location: "",
      token: null,
      login_error: "",
      signup_error: ""
    };
    this.toggleInputs = this.toggleInputs.bind(this);
    this.onInput = this.onInput.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  toggleInputs(e) {
    e.preventDefault();
    this.state.signingUp
      ? this.setState({ signingUp: false })
      : this.setState({ signingUp: true });
  }

  componentDidMount() {}

  onInput(e) {
    this.setState({
      [e.target.name]: e.target.value,
      login_error: "",
      signup_error: ""
    });
  }

  onSubmit(e) {
    e.preventDefault();
    let data = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password_conf: this.state.password_conf,
      location: this.state.location
    };
    if (this.state.signingUp) {
      this.props.signUpUser(data);
    } else {
      this.props.loginUser(data);
    }
  }
  componentWillReceiveProps(props) {
    const { token } = props;
    if (token) {
      window.location = "/view_registered_days";
    }
    const { login_error_message } = props;
    const { signup_error_message } = props;
    if (login_error_message) {
      this.setState({ login_error: login_error_message });
    } else if (signup_error_message) {
      this.setState({ signup_error: signup_error_message });
    }
    this.props.clearCredentialMessages();
  }
  render() {
    return (
      <div className="container">
        <div className="login-form">
          <form
            action=""
            className="login bordered"
            onSubmit={this.onSubmit}
            onChange={this.onInput}
          >
            <div className="text-center text-white">
              <legend>Welcome to Book A Meal</legend>
              {this.state.signingUp ? (
                <legend>Sign Up</legend>
              ) : (
                <legend>Login</legend>
              )}
            </div>
            <div className="text-danger text-center bg-white">
              {this.state.login_error ? (
                <p className="text-danger">{this.state.login_error}</p>
              ) : this.state.signup_error ? (
                <p className="text-danger">{this.state.signup_error}</p>
              ) : null}
            </div>

            {this.state.signingUp ? (
              <div className="form-group mb-2">
                <input
                  type="text"
                  name="name"
                  value={this.state.name}
                  className="form-control"
                  placeholder="Username"
                />
              </div>
            ) : null}
            <div className="form-group mb-2">
              <input
                type="text"
                name="email"
                value={this.state.email}
                className="form-control"
                placeholder="email"
              />
            </div>
            <div className="form-group mb-2">
              <input
                type="password"
                name="password"
                value={this.state.password}
                className="form-control"
                placeholder="password"
              />
            </div>
            {this.state.signingUp ? (
              <div className="form-group mb-2">
                <input
                  type="password"
                  name="password_conf"
                  value={this.state.password_conf}
                  className="form-control"
                  placeholder="Confirm password"
                />
              </div>
            ) : null}
            {this.state.signingUp ? (
              <div className="form-group mb-2">
                <input
                  type="test"
                  name="location"
                  value={this.state.location}
                  className="form-control"
                  placeholder="Location"
                />
              </div>
            ) : null}
            <button type="submit" className="submit-button">
              Sign in
            </button>
          </form>
          <a
            id="toggler"
            href=""
            onClick={this.toggleInputs}
            className="text-white"
          >
            {this.state.signingUp ? (
              <span>Already have an account? Login</span>
            ) : (
              <span>Dont have an account?, Sign up</span>
            )}
          </a>
        </div>
      </div>
    );
  }
}

// loginUser.contextTypes = {
//   router: PropTypes.object
// };

const mapStateToProps = state => ({
  login_error_message: state.messages.login_error_message,
  signup_error_message: state.messages.signup_error_message,
  token: state.auth.token
});
export default connect(
  mapStateToProps,
  { loginUser, signUpUser, clearCredentialMessages }
)(LoginForm);
