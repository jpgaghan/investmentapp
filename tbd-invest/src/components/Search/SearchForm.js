import React, { Component } from "react";
import "./searchForm.css";
import Charts from "../Chart/Chart.js";
// import Financialdata from "../FinancialData/financialdata"

class SearchForm extends Component {
    state = {
        ticker: "",
        submitted: false
    };

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
        this.setState({
            submitted: false
        })
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.setState({submitted: true})
        // this.searchHolding(this.state.ticker, this.state.chartRange);
        console.log(this.state.submitted);
        console.log(this.state.ticker);
    };

    render() {
        return !this.state.submitted ?  (
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
        ) : (<div>
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
            <Charts ticker={this.state.ticker} submitted={this.state.submitted}/>
            {/* <Financialdata symbol={this.state.ticker}/> */}
            </div>)
    }
};

export default SearchForm;