import React, { Component } from "react";
import API from "../../utils/API";
import numeral from "numeral";
import { Table } from "react-bootstrap";
import "./financialData.css"
import Watchlist from "../WatchlistBtn/index";
import ShareCalc from "../ShareCalc/shareCalc.js"

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
    DailyChange: "",
    week52high: "",
    week52low: "",
    exchange: "",
    companyName: "",
    news: [],
    logo: "",
    userid: this.props.userid
  };
  this.componentDidMount=this.componentDidMount.bind(this);
  this.getfinancialData=this.getfinancialData.bind(this);
  this.savetoWatchlist = this.savetoWatchlist.bind(this);
}
  componentDidMount() {
    if (this.props.submitted) {
     this.getfinancialData();
    } 
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
        DailyVolume: numeral(res.data.chart[res.data.chart.length-2].volume).format("0.000a"),
        MarketCap: numeral(res.data.quote.marketCap).format("0.000a"),
        Beta: numeral(res.data.stats.beta).format("0.00"),
        PE: res.data.quote.peRatio,
        EPS: numeral(res.data.stats.ttmEPS).format("0.00"),
        Sector: res.data.quote.sector,
        DailyPercentChange: numeral(res.data.chart[res.data.chart.length-1].changePercent).format("0.00"),
        DailyChange: numeral(res.data.quote.change).format("0.00"),
        week52high: res.data.quote.week52High,
        week52low: res.data.quote.week52Low,
        exchange: res.data.quote.primaryExchange,
        companyName: res.data.quote.companyName,
        news: res.data.news,
        logo: res.data.logo.url,
      });
      console.log(res.data);
      console.log(this.state)
    })
  }

  savetoWatchlist = event => {
    event.preventDefault();
    console.log("a: " + this.props.ticker, this.state.userid)
    // API.
    if (this.state.userid !== null) {
        API.saveWatchlist(this.props.ticker, this.state.userid).then(res => {console.log(res)})
    }
    console.log("here")
};

  render() {
    return (
    // <div className="fin-container"> 
    <div className="fin-container">
    <Table >
      <tbody>
        <tr>
        <td>
        <h2 className="companyName">
        {this.state.companyName}
        </h2>
        </td>
        <td>
          <Watchlist
            ticker={this.props.ticker}
            savetoWatchlist = {this.savetoWatchlist}
            uid={this.state.userid}
          />
        </td>
        <td>
          <ShareCalc
            CurrentPrice = {this.state.CurrentPrice}
          />
        </td>
        </tr>
        <tr>
        <td>
        <img className="logo" src={this.state.logo} alt="logo"/>
        </td>
        <td className="latestNews">Latest News
        <ul>{this.state.news.map(element => {
          return(
          <li>
            <a className="news" href={element.url} target="_blank">{element.headline} </a>
          </li>
          )
        })}
        </ul>
        </td>
      </tr>
      <tr class="dataChart">
        <td>
          <strong>{"Current Price: $"}</strong>{ this.state.CurrentPrice}
        </td>
        <td>
          <strong>{"Market Cap: "}</strong>{this.state.MarketCap}
        </td>
        <td>
          <strong>{"BETA: "}</strong>{this.state.Beta}
        </td>
      </tr>
      <tr class="dataChart">
      <td>
          <strong>{"P/E: "}</strong>{this.state.PE}
        </td>
        <td>
          <strong>{"EPS: "}</strong>{this.state.EPS}
        </td>
        <td>
          <strong>{"52 Week High: $"}</strong>{ this.state.week52high}
        </td>
      </tr>
      <tr class="dataChart">
      <td>
          <strong>{"Daily Percent Change: "}</strong>{ this.state.DailyPercentChange + "%"}
        </td>
        <td>
          <strong>{"Daily Change: $"}</strong>{ this.state.DailyChange}
        </td>
        <td>
          <strong>{"52 Week Low: $"}</strong>{ this.state.week52low}
        </td>
      </tr>
      <tr class="dataChart">
      <td>
          <strong>{"Daily Volume: "}</strong>{ this.state.DailyVolume}
        </td>
        <td>
          <strong>{"Sector: "}</strong>{ this.state.Sector}
        </td>
        <td>
          <strong>{"Exchange: "}</strong>{ this.state.exchange}
        </td>
      </tr>
      </tbody>
    </Table> 
    </div>
    )
  }
}
export default FinancialData;