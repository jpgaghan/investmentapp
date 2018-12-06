import React, { Component } from "react";
import API from "../../utils/API";
import SearchForm from "../Search/SearchForm";
import { AreaChart } from "react-easy-chart";
import * as d3  from "d3";
import { timeParse as parse } from "d3-time-format";


class Charts extends Component {
    state = {
        ticker: "",
        chartRange: "1m",
        results: [],
        dataPoints: [],
        dateFormatter: "",
    };
     
    
    chartDisplay = () => {
            var dataPointsA = [];
            console.log("a", dataPointsA);
            console.log(this.state.results);
            this.state.results.forEach(function (element) {               
                var dateM = element.date.split("-");
                var formatTime = d3.timeFormat("%d-%m-%y");
                // this.setState({dateFormatter:  dateM});
                // console.log(month(dateM));
                // console.log(element.date);
                // console.log(parseDate(element.date));
                // console.log(new Date(dateM));
                var year = (parseInt(dateM[0]));
                var month = (parseInt(dateM[1]));
                var day = (parseInt(dateM[2]));
                var da = formatTime(new Date(dateM));
                console.log(da);
                // console.log(dateM);
                dataPointsA.push({ x: da, y: parseFloat(element.close) 
                });
                // console.log(dataPointsA, "dataPointsA");
            });
            this.setState({dataPoints: dataPointsA});
    }
    
    
    x = function(d) {
        return new Date(d.da);
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
                <AreaChart
                    axes
                    xType={"time"}
                    margin={{top: 30, right: 30, bottom: 30, left: 50}}
                    width={1050}
                    height={250}
                    datePattern={'%d-%m-%Y'}
                    tickTimeDisplayFormat={'%d %m'}
                    data = {[
                        this.state.dataPoints
                    ]}
                    // x={x}
                    
                    // xScale={'time'}
                    // xTicks={[this.state.dataPoints.length, " "]}
                    // xTickFormat={function(d) { return this.state.dateFormatter(new Date(d)) }}
                />
            </div>
            </div>
        );
    }
}

export default Charts;