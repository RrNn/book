import React, { Component } from "react";
import "../index.css";

import { connect } from "react-redux";
import { getOrders } from "../actions/orders";

export class Order extends React.Component {
  componentDidMount() {
    this.props.getOrders();
  }
  render() {
    const revenue = this.props.revenue;
    const orders = this.props.orders.map(order => {
      return (
        <div key={order.id} className="card order-card">
          <div className="card-header row">
            <div className="col-md-9">
              Order by <code>{order.details.customer}</code>
            </div>

            <div className="col-md-3">
              <kbd class="text-center btn-block bg-primary">
                {order.order_number} plates ordered
              </kbd>
            </div>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-5">
                <h6 className="card-title">
                  Ordered for{" "}
                  <span className="text-info">
                    {order.details.day}, {order.details.date}
                  </span>
                </h6>
              </div>
              <div className="col-md-3">
                <div className="card-text">
                  <strong>Meal:</strong>
                  {order.details.meal}
                </div>
                <div className="card-text">
                  <strong>Price:</strong>
                  {order.details.price}
                </div>
              </div>
              <div className="col-md-4">
                <code>This is a {order.details.name} order</code>
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
              {this.props.orders.length} orders worth <code>{revenue}</code>{" "}
              have been made
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
