import React, { Component } from "react";
import API from "../../utils/API";
import SearchForm from "../Search/SearchForm";
// import ChartArea from "./AreaChart";
import * as d3  from "d3";
import { AreaChart } from "react-easy-chart";
// import { timeParse as parse } from "d3-time-format";


class Charts extends Component {
    state = {
        ticker: "",
        chartRange: "1d",
        results: [],
        dataPoints: [],
    };
     
    
    chartDisplay = () => {
            var dataPointsA = [];
            // console.log(this.state.results);
            this.state.results.forEach(function (element) {               
                var dateM = element.date.split("-");
                console.log(dateM);
                var formatTime = d3.timeFormat("%d-%m-%y");
                var da = formatTime(new Date(dateM));
                console.log(da);
                dataPointsA.push({ x: da, y: parseFloat(element.close) 
                });
            });
            this.setState({dataPoints: dataPointsA});
    }
    chartDisplayD = () => {
        var dataPointsD = [];
        this.state.results.forEach(function (element) {
            var timeM = element.minute;
            var dateM = element.date;
            var date = [];
            var year = dateM[0] + dateM[1] + dateM[2] + dateM[3];
            var month = dateM[4] + dateM[5];
            var day = dateM[6] + dateM[7];
            date.push(year, month, day, timeM);
            var formatTime = d3.timeFormat("%y-%m-%d %H:%M");
            var dm = formatTime(new Date(date));
            dataPointsD.push({ x: dm, y: parseFloat(element.close) });
        });
        // console.log(dataPointsD);
        this.setState({dataPoints: dataPointsD});
    }
    
    searchHolding = (symbol, range) => {
        API.chart(symbol, range)
        .then(res => {
            // console.log(res.data.chart);
            this.setState({ results: res.data.chart })
            // console.log(this.state.results);
            if (this.state.chartRange === "1m" || this.state.chartRange === "1y") {
            this.chartDisplay();
            }
            else {
                this.chartDisplayD();
            }
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
                // range = {this.state.chartRange}
                    axes
                    xType={"time"}
                    margin={{top: 30, right: 30, bottom: 70, left: 50}}
                    width={1050}
                    height={250}
                    datePattern={'%Y-%m-%d %H:%M'}
                    tickTimeDisplayFormat={'%I:%M'}
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