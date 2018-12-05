import React, { Component } from "react";
import API from "../../utils/API";
import SearchForm from "../Search/SearchForm";
import Canvas from "../Canvasjs/Canvas";
// import CanvasJSReact from "../Canvasjs/canvasjs.react";
// var CanvasJS = CanvasJSReact.CanvasJS;
// var CanvasJSChart = CanvasJSReact.CanvasJSChart;



class Charts extends Component {
    state = {
        ticker: "",
        chartRange: "1d",
        results: [],
    };

    chartDisplay = () => {
            var dataPoints = [];
            console.log(this.state.results);
            this.state.results.forEach(function (element) {
                var dateM = element.minute.split(":");
                var hour = dateM[0];
                var minute = dateM[1];
                dataPoints.push({ x: new Date(2018, 2, 9, hour, minute), y: parseFloat(element.close) 
                });
            });
            return(dataPoints);

    }
    
    searchHolding = (symbol, range) => {
        API.chart(symbol, range)
        .then(res => {
            // console.log(res.data.chart);
            this.setState({ results: res.data.chart })
            // console.log(this.state.results);
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
                <Canvas chartDisplay={this.chartDisplay} />
            </div>
            </div>
        );
    }
}

export default Charts;