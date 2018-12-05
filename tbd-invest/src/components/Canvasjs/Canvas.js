import React from "react";
import CanvasJSReact from "../Canvasjs/canvasjs.react";
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Chart = props => {
        const options = {
            animationEnabled: true,
            title: {
                text: props.ticker + " Daily Chart"
            },
            axisX: {
                title: "Time",
                interval: 15,
                valueFormatString: "hh:mm TT",
                intervalType: "minute"
            },
            axisY: {
                includeZero: false,
                title: "Price Per Share"
            },
            data: [{
                type: "area",
                dataPoints: props.results
            }]
        }
        return (
            <div>
              <CanvasJSChart
               options={options}
               onRef = {ref => this.chart = ref}
              />
            </div>
        );    
}

export default Chart;