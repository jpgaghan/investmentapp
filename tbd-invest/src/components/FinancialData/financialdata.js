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
          this.getfinancialData();
        } 
    }

    abbreviateNumber = (value) => {
        var newValue = value;
        if (value >= 1000) {
            var suffixes = ["", "k", "m", "b","t"];
            var suffixNum = Math.floor( (""+value).length/3 );
            // console.log(suffixNum);
            var shortValue = '';
            for (var precision = 2; precision >= 1; precision--) {
                shortValue = parseFloat( (suffixNum !== 0 ? (value / Math.pow(1000,suffixNum) ) : value).toPrecision(precision));
                var dotLessShortValue = (shortValue + '').replace(/[^a-zA-Z 0-9]+/g,'');
                if (dotLessShortValue.length <= 3) { break; }
            }
            if (shortValue % 2 !== 0) {  
                shortValue = shortValue.toFixed(3);
            newValue = shortValue+suffixes[suffixNum];
            }
        }
        // console.log(newValue);
        return newValue;
        
    }

    getfinancialData = () => {
        // console.log("here")
        API.financialData(this.props.ticker)
        .then(res => {
            // console.log(res.data.chart.length-1)
            this.setState({
                CurrentPrice: res.data.quote.latestPrice,
                PreviousClose: res.data.quote.previousClose,
                DailyRange: res.data.chart.length,
                DailyVolume: res.data.chart[res.data.chart.length-2].volume,
                MarketCap: this.abbreviateNumber(res.data.quote.marketCap),
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
               <ul>{this.state.news.map(element => {
                   return(
                   <li>
                       <a href={element.url}>{element.headline}</a>
                   </li>
                   )
               })};
               </ul>
           </div> 
        )
    }
}

export default FinancialData;








