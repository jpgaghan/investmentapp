import React, { Component } from "react";
import API from "../../utils/API";
import SearchForm from "../Search/SearchForm";
// import { CanvasJS } from "canvasjs";
// var CanvasJSReact = require('./canvasjs.react');
// var CanvasJS = CanvasJSReact.CanvasJS;
// var CanvasJSChart = CanvasJSReact.CanvasJSChart;



class Charts extends Component {
    state = {
        ticker: "",
        chartRange: "1d",
        results: [],
    };

    // componentDidMount() {
    //     var chart = new CanvasJS.Chart("chartContainerD", {
    //         animationEnabled: true,
        
    //         title: {
    //             text: this.state.ticker + " Daily Chart"
    //         },
    //         axisX: {
    //             title: "Time",
    //             interval: 15,
    //             valueFormatString: "hh:mm TT",
    //             intervalType: "minute"
    //         },
    //         axisY: {
    //             includeZero: false,
    //             title: "Price Per Share"
    //         },
    //         data: [{
    //             type: "area",
    //             dataPoints: addDataD()
    //         }]
    //     });
        
    //     chart.render();

    //     function addDataD() {
    //         var dataPoints = [];
    //         var quotes = this.state.results;
    //         quotes.forEach(function (element) {
    //             var dateM = element.minute.split(":");
    //             var hour = dateM[0];
    //             var minute = dateM[1];
    //             dataPoints.push({ x: new Date(2018, 2, 9, hour, minute), y: parseFloat(element.close) 
    //             });
    //         });
    //         return(dataPoints);
    //     }
    // }
    
    searchHolding = (symbol, range) => {
        API.chart(symbol, range)
        .then(res => {
            console.log(res.data.chart);
            this.setState({ results: res.data.chart })
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
            <div id="chartContainerD">
            </div>
            </div>
        );
    }
}

export default Charts;