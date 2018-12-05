import React, { Component } from "react";
import API from "../../utils/API";
import SearchForm from "../Search/SearchForm";
import { AreaChart } from "react-easy-chart";




class Charts extends Component {
    state = {
        ticker: "",
        chartRange: "1d",
        results: [],
        dataPoints: [],
    };

    chartDisplay = () => {
            var dataPointsA = [];
            console.log(this.state.results);
            this.state.results.forEach(function (element) {
                var dateM = element.minute.split(":");
                var hour = parseInt(dateM[0]);
                var minute = parseInt(dateM[1]);
                dataPointsA.push({ x: (hour, minute), y: parseFloat(element.close) 
                });
            });
            this.setState({dataPoints: dataPointsA});
    }
    
    searchHolding = (symbol, range) => {
        API.chart(symbol, range)
        .then(res => {
            console.log(res.data.chart);
            this.setState({ results: res.data.chart })
            console.log(this.state.results);
            this.chartDisplay();
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
            <div>
            <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            />
            <div>
                <AreaChart
                    xType={"time"}
                    axes
                    margin={{top: 30, right: 30, bottom: 30, left: 50}}
                    width={1050}
                    height={450} 
                    data = {[
                        this.state.dataPoints
                    ]}
                />
            </div>
            </div>
        );
    }
}

export default Charts;