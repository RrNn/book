import React, { Component } from "react";
import "../index.css";
import { connect } from "react-redux";
import { getMeals } from "../actions/meals";
import { getMenus, createMenu, clearMenuMessages } from "../actions/menus";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class CreateMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      name: "",
      menu: []
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    this.props.getMeals();
    this.props.getMenus();
  }
  onChange(event) {
    if (event.target.name !== "menu") {
      this.setState({ [event.target.name]: event.target.value });
    } else {
      let selected = parseInt(event.target.value);
      if (this.state.menu.includes(selected)) {
        let meal_ids = this.state.menu;
        meal_ids.splice(meal_ids.indexOf(selected), 1);
        this.setState({ menu: meal_ids });
      } else {
        let meal_ids = this.state.menu;
        meal_ids.push(selected);
        this.setState({ menu: meal_ids });
      }
    }
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.createMenu(this.state);
  }

  componentWillReceiveProps(props) {
    const { success_message } = props;
    const { error_message } = props;
    if (success_message) {
      toast.success(success_message);
    } else if (error_message) {
      toast.error(error_message);
    }
    // this.props.clearMenuMessages();
  }

  render() {
    console.log(this.props);
    const meals = this.props.meals.map(meal => {
      let lower = meal.meal_option;
      let upperFirst = lower.charAt(0).toUpperCase() + lower.substr(1);
      return (
        <div key={meal.id} className="form-check meal-option-list">
          <input
            type="checkbox"
            className=""
            name="menu"
            onChange={this.onChange}
            value={meal.id}
          />
          <label className="form-check-label">
            &nbsp;
            {upperFirst}
          </label>
        </div>
      );
    });

    const menus = this.props.menus.map(menu => {
      return (
        <div key={menu.id} className="card mb-1">
          <ul className="list-group list-group-flush">
            <li className="list-group-item hover-grey">{menu.date}</li>
          </ul>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 ">
            <legend className="text-center">Create menu</legend>
            <form onSubmit={this.onSubmit} role="form">
              <div className="form-group">
                <div className="col-12 meal-option-list">
                  <input
                    className="form-control"
                    name="date"
                    value={this.state.date}
                    onChange={this.onChange}
                    type="date"
                  />
                </div>
              </div>
              <div className="form-group">
                <select
                  name="name"
                  value={this.state.name}
                  onChange={this.onChange}
                  className="col-12 meal-option-list"
                >
                  <option defaultValue value="">
                    Select menu type...
                  </option>
                  <option value="breakfast">Breakfast</option>
                  <option value="lunch">Lunch</option>
                  <option value="dinner">Dinner</option>
                  <option value="supper">Supper</option>
                </select>
              </div>
              <div className="text-center">
                Choose a meal or more from the meals you've registered
              </div>
              {meals}
              <button
                type="submit"
                className="create-menu-button btn btn-secondary btn-block"
              >
                Create menu
              </button>
            </form>
          </div>
          <div className="col-md-6 mt-1">
            <legend className="text-center">Available dates with menus</legend>
            {menus}
          </div>
        </div>

        <ToastContainer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  meals: state.meals.data,
  menus: state.menus.data,
  success_message: state.messages.create_menu_success_message,
  error_message: state.messages.create_menu_error_message
});

export default connect(
  mapStateToProps,

  { createMenu, getMeals, getMenus, clearMenuMessages }
)(CreateMenu);
