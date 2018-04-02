import React from "react";
import { render } from "react-dom";
import PropTypes from "prop-types";

class PizzaSelectForm extends React.Component {
  static propTypes = {
    order: PropTypes.object,
    addToOrder: PropTypes.func
  };

  handleOrder = event => {
    event.preventDefault();

    const numberPeople = this.refs.numberPeople.value;
    const pizzaType = this.refs.pizzaType.value;

    this.props.addToOrder(pizzaType, numberPeople);
  };

  render() {
    return (
      <form onSubmit={this.handleOrder}>
        <h3>Select the type of pizza:</h3>
        <br />
        <select ref="pizzaType">
          <option value="Pepperoni">Pepperoni</option>
          <option value="Cheese">Cheese</option>
          <option value="Meat">Meat</option>
          <option value="Vegetarian">Vegetarian</option>
        </select>
        <h3>Please enter the number of people that want to eat this pizza:</h3>
        <br />
        <input type="number" ref="numberPeople" />
        <br />
        <br />
        <button type="submit">+ Add Pizza To Order</button>
      </form>
    );
  }
}

export default PizzaSelectForm;
