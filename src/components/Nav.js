import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../index.css";
import { isBoolean } from "util";

export class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      is_admin: null
    };
  }

  signOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
    localStorage.removeItem("is_admin");
    window.location = "/";
  }
  componentDidMount() {
    this.setState({ is_admin: localStorage.getItem("is_admin") });
  }

  render() {
    var liStyle = {
      listStyle: "none",
      color: "green"
    };
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light bottom-shadow">
        <li className="nav-item display-4" style={liStyle}>
          <strong>Bookameal</strong>
          <span className="sr-only">(current)</span>
        </li>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink activeClassName="active" to="/view_registered_days">
                Home
              </NavLink>
              <span className="sr-only">(current)</span>
            </li>
            <li className="nav-item">
              <NavLink activeClassName="active" to="/my_orders">
                My Orders
              </NavLink>
              <span className="sr-only">(current)</span>
            </li>
            {/* Admin Specific Nav Items */}
            {this.state.is_admin === "true" ? (
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <NavLink activeClassName="active" to="/manage_meals">
                    Manage meals
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink activeClassName="active" to="/create_menu">
                    Create menu
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink activeClassName="active" to="/active_days">
                    View Customer Orders
                  </NavLink>
                </li>
              </ul>
            ) : null}
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <NavLink
              id="signOut"
              activeClassName="active"
              to="/signout"
              onClick={() => this.signOut()}
            >
              Logout
            </NavLink>
          </form>
        </div>
      </nav>
    );
  }
}

export default Nav;
