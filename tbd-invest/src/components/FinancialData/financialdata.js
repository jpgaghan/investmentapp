import React, { Component } from "react";
import API from "../../utils/API";



class FinancialData extends React.PureComponent {
    constructor(props, context) {
    super(props, context);
    this.state = {
        CurrentPrice: "",
        PreviousClose: "",
        DailyRange: "",
        DailyVolume: "",
        MarketCap: "",
        Beta: "",
        PE: "",
        EPS: "",
        Sector: "",
        DailyPercentChange: "",
        week52high: "",
        week52low: "",
    };
    this.componentDidMount=this.componentDidMount.bind(this);
    this.getfinancialData=this.getfinancialData.bind(this);
}
    componentDidMount() {
        if (this.props.submitted) {
          this.getfinancialData();
        } 
    }
    getfinancialData = () => {
        console.log("here")
        API.financialData(this.props.ticker)
        .then(res => {
            console.log(res.data.chart.length-1)
            this.setState({
            CurrentPrice: res.data.quote.latestPrice,
            PreviousClose: res.data.chart[res.data.chart.length-2].close,
            DailyRange: res.data.chart.length,
            DailyVolume: res.data.chart[res.data.chart.length-2].volume,
            MarketCap: res.data.quote.marketCap,
            Beta: res.data.stats.beta,
            PE: res.data.quote.peRatio,
            EPS: res.data.stats.consensusEPS,
            Sector: res.data.quote.sector,
            DailyPercentChange: res.data.chart[res.data.chart.length-2].changePercent,
            Exchange: res.data.quote.primaryExchange,
            CompanyName: res.data.quote.companyName,
            })
            console.log(this.state)
        })
    }

    render() {
        return (
           <div></div> 
        )
    }
}

export default FinancialData;








