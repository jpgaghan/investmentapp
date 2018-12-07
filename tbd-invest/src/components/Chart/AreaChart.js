import React from "react";
import { AreaChart } from "react-easy-chart";

const ChartArea = (props) => {
    var value;
    switch (props.range) {
        case "1m":
        value = <AreaChart
        axes
        xType={"time"}
        margin={{top: 30, right: 30, bottom: 70, left: 50}}
        width={1050}
        height={250}
        datePattern={'%d-%m-%Y'}
        tickTimeDisplayFormat={'%d %m'}
        data = {[
            props.dataPoints
        ]}
        />
        break;
        case "1y":
        value = <AreaChart
        axes
        xType={"time"}
        margin={{top: 30, right: 30, bottom: 70, left: 50}}
        width={1050}
        height={250}
        datePattern={'%d-%m-%Y'}
        tickTimeDisplayFormat={'%d %m'}
        data = {[
            props.dataPoints
        ]}
        />
        break;
        default:
        console.log("no graph");

    }
    return value;
};

export default ChartArea;