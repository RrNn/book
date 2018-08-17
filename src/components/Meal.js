import React, { Component } from "react";
import "../index.css";
import CreateMeal from "./CreateMeal";
import EditMeal from "./EditMeal";

import { connect } from "react-redux";
import { getMeals, editMealInitialised, deleteMeal } from "../actions/meals";

class Meal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edit_success: "",
      edit_error: "",
      delete_success: "",
      delete_error: ""
    };
  }
  componentDidMount() {
    this.props.getMeals();
  }
  deleteMeal(evt, meal_id) {
    evt.preventDefault();
    this.props.deleteMeal(meal_id);
  }
  startMealEdit(evt, meal_id, meal_option, meal_option_price) {
    // remove the link in react-router later
    evt.preventDefault();
    let data = {
      meal_id,
      meal_option,
      meal_option_price
    };

    this.props.editMealInitialised(data);
  }
  componentWillReceiveProps(props) {
    const { edit_success } = props;
    const { edit_error } = props;
    const { delete_success } = props;
    const { delete_error } = props;
    this.setState({
      edit_success,
      edit_error,
      delete_success,
      delete_error
    });
    this.hideMessages();
  }
  hideMessages() {
    setTimeout(() => {
      this.setState({
        edit_success: "",
        edit_error: "",
        delete_success: "",
        delete_error: ""
      });
    }, 5000);
  }

  render() {
    const meals = this.props.meals.map(meal => (
      <div key={meal.id} className="card meal-card">
        <div className="card-body">
          <div className="row">
            <div className="col-md-3">
              <h6 className="card-title">{meal.meal_option}</h6>
            </div>
            <div className="col-md-3">
              <h6 className="card-title">{meal.meal_price}</h6>
            </div>
            <div className="col-md-3">
              <a
                href={"/edit_meal/" + meal.id}
                className="text-info"
                onClick={evt =>
                  this.startMealEdit(
                    evt,
                    meal.id,
                    meal.meal_option,
                    meal.meal_price
                  )
                }
              >
                Edit meal
              </a>
            </div>
            <div className="col-md-3">
              <a
                href={"/delete_meal/" + meal.id}
                className="text-danger"
                onClick={evt => this.deleteMeal(evt, meal.id)}
              >
                Delete meal
              </a>
            </div>
          </div>
        </div>
      </div>
    ));
    return (
      <div className="container">
        <legend className="text-center display-4 text-heading">
          Registered meals
        </legend>
        <hr />
        <div className="row">
          <div className="col-md-8">
            <legend className="text-center">
              You have registered {meals.length} meals
            </legend>

            {this.state.delete_success ? (
              <div className="alert alert-success text-center">
                {this.state.delete_success}
              </div>
            ) : null}
            {this.state.delete_error ? (
              <div className="alert alert-danger text-center">
                {this.state.delete_error}
              </div>
            ) : null}

            {meals}
          </div>
          <div className="col-md-4">
            <CreateMeal />
            {this.state.edit_success ? (
              <div className="alert alert-success text-center mt-2">
                {this.state.edit_success}
              </div>
            ) : null}
            {this.state.edit_error ? (
              <div className="alert alert-danger text-center mt-2">
                {this.state.edit_error}
              </div>
            ) : null}
            {this.props.edit_mode ? <EditMeal /> : null}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  meals: state.meals.data,
  edit_mode: state.meals.editing_mode,
  edit_success: state.messages.edit_meal_success_message,
  edit_error: state.messages.edit_meal_error_message,
  delete_success: state.messages.delete_meal_success_message,
  delete_error: state.messages.delete_meal_error_message
});
export default connect(
  mapStateToProps,
  { getMeals, editMealInitialised, deleteMeal }
)(Meal);
