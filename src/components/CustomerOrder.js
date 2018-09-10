import React, { Component } from "react";
import { getCustomerOrders } from "../actions/orders";
import { connect } from "react-redux";

export class CustomerOrder extends React.Component {
  componentDidMount() {
    this.props.getCustomerOrders();
  }
  render() {
    const credit = this.props.credit;
    const orders = this.props.my_orders.map(order => {
      return (
        <div key={order.id} className="card order-card">
          <div className="card-body">
            <div className="row">
              <div className="col-md-5">
                <h6 className="card-title">
                  This order is for{" "}
                  <span className="text-info">
                    {order.details.day}, {order.details.date}
                  </span>
                </h6>
                <kbd class="btn-block text-center bg-primary">
                  You ordered {order.order_number} plates
                </kbd>
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
              You have made {orders.length} orders worth <code>{credit}</code>
            </strong>
          </div>
        </div>
        <div className="mb-5">{orders}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state.orders.customer_orders);
  return {
    my_orders: state.orders.customer_orders,
    credit: state.orders.credit
  };
};

export default connect(
  mapStateToProps,
  { getCustomerOrders }
)(CustomerOrder);
