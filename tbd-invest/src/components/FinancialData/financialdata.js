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
                CurrentPrice: "",
                PreviousClose: res.data.quote.previousClose,
                DailyRange: "",
                DailyVolume: "",
                MarketCap: res.data.quote.marketCap,
                Beta: res.data.stats.beta,
                PE: "",
                EPS: res.data.stats.consensusEPS,
                Sector: res.data.quote.sector,
                DailyPercentChange: "",
                week52high: res.data.quote.week52High,
                week52low: res.data.quote.week52Low,
            });
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








