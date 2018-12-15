import React, { Component } from 'react';
import { Form } from "react-bootstrap";
import numeral from "numeral";

class ShareCalc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shares: "",
            dollarAmount: "",
        }
    }

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        event.preventDefault();

        this.setState({
            [name]: value
        });
        console.log(this.state.dollarAmount)
    }
    handleFormSubmit = event => {
        event.preventDefault();
        var calc = numeral((this.state.dollarAmount * 10) / this.props.CurrentPrice).format("0.00");
        this.setState({shares: calc})
    };

    render() {
        return (
            <div>
                <label htmlFor="dollarAmount">Enter $ Amount:</label>
                <Form inline>
                  <input
                    value={this.state.dollarAmount}
                    onChange={this.handleInputChange}
                    name="dollarAmount"
                    placeholder="Dollar Amount"
                    id="dollarAmount"
                  />
                  <input
                    value= {this.state.shares + " shares"}
                  />
                  <button
                  type="submit"
                  onClick={this.handleFormSubmit}
                  >Calculate
                  </button>
                </Form>
            </div>

        )
    }

};

export default ShareCalc;
