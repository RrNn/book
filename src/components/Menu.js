import React, { Component } from "react";
import "../index.css";

import { connect } from "react-redux";
import { getMenus } from "../actions/menus";
import { createOrder, clearOrderMessages } from "../actions/orders";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.orderMade = this.orderMade.bind(this);
    this.state = {
      orderInitiated: false,
      orderMealId: null,
      orderDate: "",
      menuCategory: "",
      orderNumber: null
    };
    this.orderNumberValue = this.orderNumberValue.bind(this);
  }
  componentDidMount() {
    this.props.getMenus();
  }
  orderInitiated(evt, orderMealId, orderDate, menuCategory) {
    evt.preventDefault();
    this.setState({
      orderInitiated: true,
      orderMealId,
      orderDate,
      menuCategory
    });
  }
  orderNumberValue(evt) {
    this.setState({ orderNumber: parseInt(evt.target.value) });
  }
  orderMade(meal_id, date, category, evt) {
    evt.preventDefault();
    let data = {
      customer_id: parseInt(localStorage.getItem("user_id")),
      date: date,
      menu_category: category,
      meal_option: meal_id,
      order_number: this.state.orderNumber
    };

    this.props.createOrder(data);
    this.setState({
      orderInitiated: false,
      orderMealId: null,
      orderDate: "",
      menuCategory: "",
      orderNumber: null
    });
  }

  componentWillReceiveProps(props) {
    const { success_message } = props;
    const { error_message } = props;
    if (success_message) {
      toast.success(success_message);
    } else if (error_message) {
      toast.error(error_message);
    }
    this.props.clearOrderMessages();
  }

  render() {
    const menus = this.props.menus.map(menu => {
      return (
        <div key={menu.id}>
          {/* --------- Breakfast menus ---------- */}
          {menu.menu.breakfast.length > 0 ? (
            <div className="card menu-card-title mt-1">
              <div className="card-body display-4 text-center">
                {menu.day}
                &nbsp; <code>({menu.date})</code>
                &nbsp; Breakfast meals
              </div>
            </div>
          ) : null}
          {menu.menu.breakfast.length > 0
            ? menu.menu.breakfast.map(breakfast_meal => {
                return (
                  <div key={breakfast_meal.id} className="card menu-card">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-4">
                          <h6 className="card-title">
                            <strong className="text-primary">Meal:</strong>{" "}
                            &nbsp;
                            {breakfast_meal.meal_option}
                          </h6>
                        </div>
                        <div className="col-md-2">
                          <div className="card-text">
                            <strong className="text-primary">Price:</strong>
                            &nbsp;
                            {breakfast_meal.meal_option_price}
                          </div>
                        </div>

                        {!(
                          this.state.orderInitiated &&
                          this.state.orderMealId === breakfast_meal.id &&
                          this.state.orderDate === menu.date &&
                          this.state.menuCategory === "breakfast"
                        ) ? (
                          <div className="col-md-6">
                            <a
                              id="bo-1"
                              className="btn hover-orange btn-block order-button"
                              href=""
                              role="button"
                              onClick={evt =>
                                this.orderInitiated(
                                  evt,
                                  breakfast_meal.id,
                                  menu.date,
                                  "breakfast"
                                )
                              }
                            >
                              Order {breakfast_meal.meal_option} for {menu.date}{" "}
                              breakfast
                            </a>
                          </div>
                        ) : (
                          <div className="col-md-6 row">
                            <div className="col-md-6">
                              <input
                                id="bo-input"
                                type="number"
                                name="order_number"
                                className="form-control order-button-proceed"
                                onChange={this.orderNumberValue}
                                min="1"
                                required="required"
                                placeholder="Number of orders"
                              />
                            </div>
                            <div className="col-md-6">
                              <a
                                id="bo-2"
                                href=""
                                className="btn hover-orange btn-block order-button"
                                role="button"
                                onClick={evt =>
                                  this.orderMade(
                                    breakfast_meal.id,
                                    menu.date,
                                    "breakfast",
                                    evt
                                  )
                                }
                              >
                                Make Order
                              </a>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })
            : null}
          {/* --------- Lunch menus ---------- */}
          {menu.menu.lunch.length > 0 ? (
            <div className="card menu-card-title mt-1">
              <div className="card-body display-4 text-center">
                {menu.day}
                &nbsp; <code>({menu.date})</code>
                &nbsp; Lunch meals
              </div>
            </div>
          ) : null}
          {menu.menu.lunch.length > 0
            ? menu.menu.lunch.map(lunch_meal => {
                return (
                  <div key={lunch_meal.id} className="card menu-card">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-4">
                          <h6 className="card-title">
                            <strong className="text-primary">Meal:</strong>{" "}
                            &nbsp;
                            {lunch_meal.meal_option}
                          </h6>
                        </div>
                        <div className="col-md-2">
                          <div className="card-text">
                            <strong className="text-primary">Price:</strong>
                            &nbsp;
                            {lunch_meal.meal_option_price}
                          </div>
                        </div>
                        {!(
                          this.state.orderInitiated &&
                          this.state.orderMealId === lunch_meal.id &&
                          this.state.orderDate === menu.date &&
                          this.state.menuCategory === "lunch"
                        ) ? (
                          <div className="col-md-6">
                            <a
                              id="lo-1"
                              className="btn hover-orange btn-block order-button"
                              href=""
                              role="button"
                              onClick={evt =>
                                this.orderInitiated(
                                  evt,
                                  lunch_meal.id,
                                  menu.date,
                                  "lunch"
                                )
                              }
                            >
                              Order {lunch_meal.meal_option} for {menu.date}{" "}
                              lunch
                            </a>
                          </div>
                        ) : (
                          <div className="col-md-6 row">
                            <div className="col-md-6">
                              <input
                                type="number"
                                name="order_number"
                                className="form-control order-button-proceed"
                                onChange={this.orderNumberValue}
                                min="1"
                                required="required"
                                placeholder="Number of orders"
                              />
                            </div>
                            <div className="col-md-6">
                              <a
                                id="lo-2"
                                href=""
                                className="btn hover-orange btn-block order-button"
                                role="button"
                                onClick={evt =>
                                  this.orderMade(
                                    lunch_meal.id,
                                    menu.date,
                                    "lunch",
                                    evt
                                  )
                                }
                              >
                                Make Order
                              </a>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })
            : null}
          {/* --------- Dinner menus ---------- */}
          {menu.menu.dinner.length > 0 ? (
            <div className="card menu-card-title mt-1">
              <div className="card-body display-4 text-center">
                {menu.day}
                &nbsp; <code>({menu.date})</code>
                &nbsp; Dinner meals
              </div>
            </div>
          ) : null}
          {menu.menu.dinner.length > 0
            ? menu.menu.dinner.map(dinner_meal => {
                return (
                  <div key={dinner_meal.id} className="card menu-card">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-4">
                          <h6 className="card-title">
                            <strong className="text-primary">Meal:</strong>{" "}
                            &nbsp;
                            {dinner_meal.meal_option}
                          </h6>
                        </div>
                        <div className="col-md-2">
                          <div className="card-text">
                            <strong className="text-primary">Price:</strong>
                            &nbsp;
                            {dinner_meal.meal_option_price}
                          </div>
                        </div>
                        {!(
                          this.state.orderInitiated &&
                          this.state.orderMealId === dinner_meal.id &&
                          this.state.orderDate === menu.date &&
                          this.state.menuCategory === "dinner"
                        ) ? (
                          <div className="col-md-6">
                            <a
                              id="do-1"
                              className="btn hover-orange btn-block order-button"
                              href=""
                              role="button"
                              onClick={evt =>
                                this.orderInitiated(
                                  evt,
                                  dinner_meal.id,
                                  menu.date,
                                  "dinner"
                                )
                              }
                            >
                              Order {dinner_meal.meal_option} for {menu.date}{" "}
                              dinner
                            </a>
                          </div>
                        ) : (
                          <div className="col-md-6 row">
                            <div className="col-md-6">
                              <input
                                type="number"
                                name="order_number"
                                className="form-control order-button-proceed"
                                onChange={this.orderNumberValue}
                                min="1"
                                required="required"
                                placeholder="Number of orders"
                              />
                            </div>
                            <div className="col-md-6">
                              <a
                                id="do-2"
                                href=""
                                className="btn hover-orange btn-block order-button"
                                role="button"
                                onClick={evt =>
                                  this.orderMade(
                                    dinner_meal.id,
                                    menu.date,
                                    "dinner",
                                    evt
                                  )
                                }
                              >
                                Make Order
                              </a>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })
            : null}

          {/* --------- Supper menus ---------- */}
          {menu.menu.supper.length > 0 ? (
            <div className="card menu-card-title mt-1">
              <div className="card-body display-4 text-center">
                {menu.day}
                &nbsp; <code>({menu.date})</code>
                &nbsp; Supper meals
              </div>
            </div>
          ) : null}
          {menu.menu.supper.length > 0
            ? menu.menu.supper.map(supper_meal => {
                return (
                  <div key={supper_meal.id} className="card menu-card">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-4">
                          <h6 className="card-title">
                            <strong className="text-primary">Meal:</strong>{" "}
                            &nbsp;
                            {supper_meal.meal_option}
                          </h6>
                        </div>
                        <div className="col-md-2">
                          <div className="card-text">
                            <strong className="text-primary">Price:</strong>
                            &nbsp;
                            {supper_meal.meal_option_price}
                          </div>
                        </div>
                        {!(
                          this.state.orderInitiated &&
                          this.state.orderMealId === supper_meal.id &&
                          this.state.orderDate === menu.date &&
                          this.state.menuCategory === "supper"
                        ) ? (
                          <div className="col-md-6">
                            <a
                              id="so-1"
                              className="btn hover-orange btn-block order-button"
                              href=""
                              role="button"
                              onClick={evt =>
                                this.orderInitiated(
                                  evt,
                                  supper_meal.id,
                                  menu.date,
                                  "supper"
                                )
                              }
                            >
                              Order {supper_meal.meal_option} for {menu.date}{" "}
                              supper
                            </a>
                          </div>
                        ) : (
                          <div className="col-md-6 row">
                            <div className="col-md-6">
                              <input
                                type="number"
                                name="order_number"
                                className="form-control order-button-proceed"
                                onChange={this.orderNumberValue}
                                min="1"
                                required="required"
                                placeholder="Number of orders"
                              />
                            </div>
                            <div className="col-md-6">
                              <a
                                id="so-2"
                                href=""
                                className="btn hover-orange btn-block order-button"
                                role="button"
                                onClick={evt =>
                                  this.orderMade(
                                    supper_meal.id,
                                    menu.date,
                                    "supper",
                                    evt
                                  )
                                }
                              >
                                Make Order
                              </a>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })
            : null}
          <div className="menu-date" />
        </div>
      );
    });
    return (
      <div className="container">
        <legend className="text-center display-4 text-heading">
          Registered menus
        </legend>
        <hr />
        <div className="">
          <div className="menu menu-item">
            <div className="menu-header">{menus}</div>
          </div>
        </div>
        <ToastContainer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    menus: state.menus.data,
    success_message: state.messages.create_order_success_message,
    error_message: state.messages.create_order_error_message
  };
};

export default connect(
  mapStateToProps,
  { getMenus, createOrder, clearOrderMessages }
)(Menu);
