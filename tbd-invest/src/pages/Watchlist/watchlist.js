import React, { Component } from "react";
import API from "../../utils/API"
import { List, ListItem, Link, DeleteBtn, FormGroup, Checkbox, FormControl, Form, ControlLabel } from "react-bootstrap";

class Watchlist extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      tickers: [],
      tickerdata:[]
    };
  }

  componentDidMount() {
    this.createTickers(this.props.userid);
    
  }

  createTickers = uid => {
    API.pullWatchlist(uid).then(res => 
      {this.setState({tickers: res.data})
      this.getfinancialData(this.state.tickers)}
    )
    
  };
  
  getfinancialData = () => {
    const tickerdataarray = []
    this.state.tickers.forEach(ticker => {
      console.log(ticker.ticker)
    API.financialData(ticker.ticker)
    .then(res => {
        const tickerdataarray = this.state.tickerdata
        tickerdataarray.push({
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
          Exchange: res.data.quote.primaryExchange,
          CompanyName: res.data.quote.companyName,
          news: res.data.news
          })
        this.setState({tickerdata:tickerdataarray})
    })
  })
  
}

  render() {
    return (
 <div>here
 {this.state.tickerdata.length ? (
   <div>
    {this.state.tickerdata.map(ticker => (
      
        
        ticker.EPS
        // {/* <DeleteBtn onClick={() => this.deleteBook(book._id)} /> */}
      
    ))}
  </div>
) : (
  <h3>No Results to Display</h3>
)}
</div>
    );

  }
  
}

export default Watchlist;
