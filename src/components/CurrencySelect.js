import React from "react";
import CurrencyLabel from "./CurrencyLabel";
import "bootstrap/dist/css/bootstrap.css";
import "./CurrencySelect.css";

class CurrencySelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currency: "USD", //default state
    };
    this.handleChange = this.handleChange.bind(this);
  }

  //trigger when select currency
  handleChange(e) {
    // console.log("currency selected");
    this.setState({ currency: e.target.value });
  }

  render() {
    return (
      <div>
        <select
          className="select-container"
          value={this.state.currency}
          onChange={this.handleChange}
        >
          <option value="USD">USD$</option>
          <option value="EUR">EUR€</option>
          <option value="CAD">CAD$</option>
        </select>
        <CurrencyLabel currency={this.state.currency} />
      </div>
    );
  }
}

export default CurrencySelect;
