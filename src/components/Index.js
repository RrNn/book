import React, { Component } from "react";
import { connect } from "react-redux";
import Menu from "./Menu";
import Meal from "./Meal";
import Order from "./Order";
import Nav from "./Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import signOut from "./signOut";
import CreateMenu from "./CreateMenu";
import LoginForm from "./LoginForm";

class Index extends React.Component {
  render() {
    return (
      <Router>
        <div className="img-faded">
          <Nav />
          <Switch>
            <Route exact path="/" component={LoginForm} />
            <Route path="/manage_meals" component={Meal} />
            <Route path="/view_registered_days" component={Menu} />
            <Route path="/active_days" component={Order} />
            <Route path="/create_menu" component={CreateMenu} />
            <Route path="/signout" component={signOut} />
            <Route
              render={function() {
                return (
                  <div className="content">
                    <div className="text-center">
                      <h3 className="text-muted">
                        That page could not be found!
                      </h3>
                    </div>
                  </div>
                );
              }}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Index;
