import React, { Component } from "react";
import "../index.css";

import { connect } from "react-redux";
import { getOrders } from "../actions/orders";

class Order extends React.Component {
  componentDidMount() {
    this.props.getOrders();
  }
  render() {
    // console.log(this.props.orders);
    const orders = this.props.orders.map(order => {
      return (
        <div key={order.id} className="card order-card">
          <div className="card-header">Order by {order.customer}</div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-5">
                <h6 className="card-title">This order is for {order.date}</h6>
              </div>
              <div className="col-md-3">
                <div className="card-text">
                  <strong>Meal:</strong>
                  {order.meal}
                </div>
                <div className="card-text">
                  <strong>Price:</strong>
                  {order.price}
                </div>
              </div>
              <div className="col-md-4">
                <code>This is a {order.name} order</code>
              </div>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div className="content">
        <div className="card order-card">
          <div className="card-header text-center display-4">
            <strong>
              {this.props.orders.length} orders worth <code>12000</code> have
              been made
            </strong>
          </div>
        </div>
        <div className="mb-5">{orders}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    orders: state.orders.data,
    revenue: state.orders.revenue
  };
};

export default connect(
  mapStateToProps,
  { getOrders }
)(Order);
