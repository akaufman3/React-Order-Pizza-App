import React from "react";
import PropTypes from "prop-types";

class PizzaOrder extends React.Component {
  static propTypes = {
    totalUpPizzas: PropTypes.func
  };

  render() {

    const pizzas = this.props.totalUpPizzas();

    return pizzas.map((pizza) => (
      <h4>Total number of <span>{pizza.type}</span> pizzas: <span>{pizza.count}</span></h4>
    ));
  }
}

export default PizzaOrder;