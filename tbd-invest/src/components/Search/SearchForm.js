import React, { Component } from "react";
import "./searchForm.css";

class SearchForm extends Component {
    state = {
        ticker: "",
    };

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        // this.searchHolding(this.state.ticker, this.state.chartRange);
        console.log(this.state.ticker);
    };

    render() {
        return (
            <div>
                <form className="search">
                    <h2>Stock Search</h2>
                    <div className="form-group">
                        <label htmlFor="ticker">Stock Symbol:</label>
                        <input
                            value={this.state.ticker}
                            onChange={this.handleInputChange}
                            name="ticker"
                            className="form-control"
                            placeholder="Symbol"
                            id="ticker"
                        />
                    </div>
                    <button
                        type="submit"
                        onClick={this.handleFormSubmit}
                        className="btn btn-success">Search</button>
                </form>
            </div>
        )
    }
};

export default SearchForm;