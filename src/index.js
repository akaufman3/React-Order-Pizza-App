import React from "react";
import { render } from "react-dom";
import PizzaSelectForm from "./components/PizzaSelectForm";
import PizzaOrder from "./components/PizzaOrder";
import { calculatePizzasNeeded } from "../helpers/helpers";
import PropTypes from "prop-types";
require("react-log-state");

class App extends React.Component {
  state = {
    order: {}
  };

  addToOrder = (pizzaType, numberPeople) => {
    const pizzaOrder = { ...this.state.order };
    const numPizzas = calculatePizzasNeeded(numberPeople);

    pizzaOrder[`order${Date.now()}`] = {
      type: pizzaType,
      numPizzas: numPizzas
    };

    this.setState({
      order: pizzaOrder
    });

    ReactLogState.logAll();
    console.log(this.state.order);
  };

  totalUpPizzas = () => {
    const pizzaOrder = { ...this.state.order };
    const orderCount = [];
    orderCount.push(
      { type: "Pepperoni", count: 0 },
      { type: "Cheese", count: 0 },
      { type: "Meat", count: 0 },
      { type: "Vegetarian", count: 0 }
    );

    Object.keys(pizzaOrder).map(function(key) {
      let type = pizzaOrder[key].type;
      for (var i = 0; i < orderCount.length; i++) {
        if (type === orderCount[i].type) {
          orderCount[i].count += pizzaOrder[key].numPizzas;
        }
      }
    });

    return orderCount;
  };

  render() {
    return (
      <div>
        <PizzaSelectForm addToOrder={this.addToOrder} />
        <PizzaOrder totalUpPizzas={this.totalUpPizzas} />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
