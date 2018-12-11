import React, { Component } from "react";
import API from "../../utils/API";



class FinancialData extends Component {
    state = {
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
        exchange: "",
        companyName: "",
        news: [],
        logo: "",
    };
    componentDidMount() {
        if (this.props.submitted) {
          this.getFinancials();
        } 
    }
    getFinancials = () => {
        API.financialData(this.props.ticker)
        .then(res => {
            console.log(res.data)
            this.setState({
                CurrentPrice: res.data.quote.latestPrice,
                PreviousClose: res.data.quote.previousClose,
                DailyRange: res.data.chart.length,
                DailyVolume: res.data.chart[res.data.chart.length-2].volume,
                MarketCap: res.data.quote.marketCap,
                Beta: res.data.stats.beta,
                PE: res.data.quote.peRatio,
                EPS: res.data.stats.consensusEPS,
                Sector: res.data.quote.sector,
                DailyPercentChange: res.data.chart[res.data.chart.length-2].changePercent,
                week52high: res.data.quote.week52High,
                week52low: res.data.quote.week52Low,
                exchange: res.data.quote.primaryExchange,
                companyName: res.data.quote.companyName,
                news: res.data.news,
                logo: res.data.logo.url,
            });
            console.log(this.state)
        })
    }

    render() {
        return (
           <div>
               <img src={this.state.logo} alt="logo" />
           </div> 
        )
    }
}

export default FinancialData;








