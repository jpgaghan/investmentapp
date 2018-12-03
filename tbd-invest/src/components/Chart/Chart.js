import React, { Component } from "react";
import API from "../../utils/API";
import SearchForm from "../SearchForm/SearchForm";

class Chart extends Component {
    state = {
        ticker: "",
        chartRange: "1m",
        results: [],
    };
    
    searchHolding = (symbol, range) => {
        API.chart(symbol, range)
        .then(res => {
            console.log(res.data.response.chart);
            this.setState({ results: res.data.response.chart })
        })
        .catch(err => console.log(err));
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
        this.searchHolding(this.state.ticker, this.state.chartRange);
    };

    render() {
        return (
            <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            />
        
        );
    }
}

export default Chart;