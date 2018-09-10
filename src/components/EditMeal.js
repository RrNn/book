import React, { Component } from "react";
import { connect } from "react-redux";
import { editMeal, finishEdit, clearMealMessages } from "../actions/meals";

export class EditMeal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meal_option: "",
      meal_option_price: "",
      meal_id: null
    };
  }

  componentDidMount() {
    this.setState({
      meal_option: this.props.meal.meal_option,
      meal_option_price: this.props.meal.meal_option_price,
      meal_id: this.props.meal.meal_id
    });
    this.props.clearMealMessages();
  }
  componentWillReceiveProps(props) {
    this.setState({
      meal_option: props.meal.meal_option,
      meal_option_price: props.meal.meal_option_price,
      meal_id: props.meal.meal_id
    });
  }
  onChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }
  onSubmit(evt) {
    evt.preventDefault();
    let data = {
      meal_option: this.state.meal_option,
      meal_option_price: parseInt(this.state.meal_option_price),
      meal_id: this.state.meal_id
    };
    this.props.editMeal(data);
    // this.props.clearMealMessages();
    this.props.finishEdit();
  }

  render() {
    return (
      <div>
        <form action="" role="form" onSubmit={evt => this.onSubmit(evt)}>
          <legend className="text-center">Edit {this.state.meal_option}</legend>
          <div className="form-group mb-3">
            <input
              id="meal_option"
              type="text"
              className="form-control"
              name="meal_option"
              value={this.state.meal_option}
              onChange={evt => this.onChange(evt)}
              placeholder="Meal name"
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control"
              name="meal_option_price"
              value={this.state.meal_option_price}
              onChange={evt => this.onChange(evt)}
              placeholder="Meal Price"
            />
          </div>

          <button type="submit" className="btn btn-info btn-block">
            Edit
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  meal: state.meals.meal_to_edit,
  success_message: state.meals.edit_success_message,
  error_message: state.meals.edit_error_message
});

export default connect(
  mapStateToProps,
  { editMeal, finishEdit, clearMealMessages }
)(EditMeal);
