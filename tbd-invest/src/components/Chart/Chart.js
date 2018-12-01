import React, { Component } from "react";
import API from "../utils/API";


class Chart extends Component {
    state = {
        ticker: "",
        chartRange: "",
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
}