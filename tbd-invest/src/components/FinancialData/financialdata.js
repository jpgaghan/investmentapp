import React, { Component } from "react";
import API from "../../utils/API";



class FinancialData extends Component {
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
        exchange: "",
        companyName: "",
        news: [],
        logo: "",
    };
    this.componentDidMount=this.componentDidMount.bind(this);
    this.getfinancialData=this.getfinancialData.bind(this);
}
    componentDidMount() {
        if (this.props.submitted) {
          this.getFinancials();
        } 
    }
    getfinancialData = () => {
        console.log("here")
        API.financialData(this.props.ticker)
        .then(res => {
            console.log(res.data.chart.length-1)
            this.setState({
<<<<<<< HEAD
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
=======
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
>>>>>>> 9fbf7935968e068316d0e554bfed86194bff2b81
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








