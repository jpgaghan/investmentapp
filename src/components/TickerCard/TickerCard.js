import React, { Component } from "react";
import API from "../../utils/API";
import { Button, Panel, Table, Glyphicon, Collapse } from "react-bootstrap";
import Charts from "../Chart/Chart.js";
import numeral from "numeral";
// import { Row } from "react-bootstrap";
// import { Col } from "react-bootstrap";
// import { Grid } from "react-bootstrap";
import "./TickerCard.css";
import WatchlistRemoveComponent from "../WathlistRmBtn/index"
class TickerCard extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            tickers: ["aapl", "msft", "googl", "amzn", "tsla", "rht"],
            tickerdata: [],
            ticker: "",
            open: false,
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
            news: [],
            logo: "",
        };
    }


    componentDidMount() {
        console.log(this.state.tickers, this.state.tickerdata)
        this.createTickers(this.props.userid);
    }

    createTickers = uid => {
        // API.scrapefinancialTerms().then(res => {console.log(res)});
        console.log(window.location.href)

        if (window.location.href === "http://localhost:3000/watchlist") {
            console.log(uid)
            this.setState({page:true})
            API.pullWatchlist(uid).then(res => {
                console.log(res)
                const tickerarray = []
                res.data.forEach((index, i) => { tickerarray.push(index.ticker);
                                                this.setState({[`item${i}`]:index._id}) });
                this.setState({ tickers: tickerarray })
                this.getfinancialData()
            }
            )
        } else if (window.location.href === "http://localhost:3000/") {
            this.setState({page:false})
            this.getfinancialData()
        }
    };

    getfinancialData = () => {
      const tickerdataarray = []
    //   console.log(this.state.tickers)
    console.log(this.state.tickers)
      this.state.tickers.forEach((ticker, i) => {
        this.setState({[`open${i}`]:false})
        
      API.financialData(ticker)
      .then(res => {
          console.log(ticker)
          const tickerdataarray = this.state.tickerdata
          tickerdataarray.push({
            ticker,
            CurrentPrice: numeral(res.data.quote.latestPrice).format("$0,0.00"),
            PreviousClose: res.data.quote.previousClose,
            DailyRange: res.data.chart.length,
            DailyVolume: numeral(res.data.chart[res.data.chart.length-2].volume).format("0.000a"),
            MarketCap: numeral(res.data.quote.marketCap).format("0.000a"),
            Beta: res.data.stats.beta,
            PE: res.data.quote.peRatio,
            EPS: res.data.stats.consensusEPS,
            Sector: res.data.quote.sector,
            DailyPercentChange: res.data.chart[res.data.chart.length-2].changePercent,
            DailyChange: numeral(res.data.quote.change).format("$0,0.00"),
            Exchange: res.data.quote.primaryExchange,
            CompanyName: res.data.quote.companyName,
            news: res.data.news,
            open:false,
            logo: res.data.logo.url
            })
          this.setState({tickerdata:tickerdataarray})
      })
    })
    
  }
  removefromWatchlist = (data) => {
        API.removeWatchlist(data.id).then(res => {console.log(res)})
  }
    handleopenState = () => {
        this.setState({ open: !this.state.open })
        console.log(this.state)
    }

    render(props) {
        return (
            <div>
                {this.state.tickerdata.length ? (
                    <div className="tickerContainer">
                        {this.state.tickerdata.map((ticker, i) => (

                            <div>
                                <div className="card">

                                    <Table hover >
                                        <tbody>

                                            <tr>
                                                <td><h4 className="tickerSymbol">{ticker.ticker}</h4></td>
                                                <td className="rightData"><h4>{ticker.CurrentPrice}</h4></td>
                                            </tr>

                                            <tr>
                                                <td>{ticker.Exchange}</td>
                                                <td className="rightData">{ticker.DailyPercentChange + " %"}</td>
                                            </tr>

                                            <tr>
                                                <td>{ticker.CompanyName}</td>
                                                <td className="rightData">{ticker.DailyChange}</td>
                                            </tr>

                                            <tr>
                                                <td>{ticker.Sector}</td>
                                                <td className="rightData"><a className="expandBttn" onClick={() => { this.setState({ [`open${i}`]: !this.state[`open${i}`] }) }}><Glyphicon glyph="resize-full" /></a></td>
                                            </tr>

                                        </tbody>
                                    </Table>
                                    <Panel className="expandedCard" id="collapsible-panel-TickerCard-1" expanded={this.state[`open${i}`]}>
                                        <Panel.Collapse>
                                            <Panel.Body>
                                                <Charts ticker={ticker.ticker} submitted={true} />
                                                Anim pariatur cliche reprehenderit, enim eiusmod high life
                                                accusamus terry richardson ad squid. Nihil anim keffiyeh
                                                helvetica, craft beer labore wes anderson cred nesciunt sapiente
                                                ea proident.
                                            </Panel.Body>
                                        </Panel.Collapse>
                                    </Panel>
                                {
                                    this.state.page && (
                                        <div>
                                            <WatchlistRemoveComponent
                                                removefromWatchlist = {this.removefromWatchlist}
                                                id = {this.state[`item${i}`]}
                                            />
                                        </div>) || <span></span>
                                }


                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                        <h3>No Results to Display</h3>
                    )
                }
            </div>
        );


    }
}

export default TickerCard;