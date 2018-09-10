import React, { Component } from "react";
import "../index.css";
import { connect } from "react-redux";
import { createMeal, clearMealMessages } from "../actions/meals";
import "react-toastify/dist/ReactToastify.css";

export class CreateMeal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meal_option: "",
      meal_option_price: "",
      success: "",
      error: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    let data = {
      meal_option: this.state.meal_option,
      meal_option_price: parseInt(this.state.meal_option_price)
    };
    this.props.createMeal(data);
  }
  componentWillReceiveProps(props) {
    const { success_message } = props;
    const { error_message } = props;
    if (success_message) {
      this.setState({ success: success_message });
    } else if (error_message) {
      this.setState({ error: error_message });
    }
    this.props.clearMealMessages();
    this.hideMessages();
  }

  hideMessages() {
    setTimeout(() => {
      this.setState({ success: "", error: "" });
    }, 5000);
  }

  render() {
    return (
      <div>
        <form action="" role="form" onSubmit={this.onSubmit}>
          <legend className="text-center">Create a new meal</legend>
          {this.state.success ? (
            <div className="alert alert-success text-center">
              {this.state.success}
            </div>
          ) : null}
          {this.state.error ? (
            <div className="alert alert-danger text-center">
              {this.state.error}
            </div>
          ) : null}

          <div className="form-group mb-3">
            <input
              id="meal_option"
              type="text"
              className="form-control"
              name="meal_option"
              value={this.state.meal_option}
              onChange={this.onChange}
              placeholder="Meal name"
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control"
              name="meal_option_price"
              value={this.state.meal_option_price}
              onChange={this.onChange}
              placeholder="Meal Price"
            />
          </div>

          <button type="submit" className="btn btn-info btn-block">
            Create meal
          </button>
        </form>
        {/* <ToastContainer /> */}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    create_meal: state.meals.data,
    success_message: state.messages.create_meal_success_message,
    error_message: state.messages.create_meal_error_message
  };
};

export default connect(
  mapStateToProps,
  { createMeal, clearMealMessages }
)(CreateMeal);
