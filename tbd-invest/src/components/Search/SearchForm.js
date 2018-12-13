import React, { Component } from "react";
import "./searchForm.css";
import Watchlist from "../WatchlistBtn/index";
import Charts from "../Chart/Chart.js";
import FinancialData from "../FinancialData/financialdata"
import API from "../../utils/API"
class SearchForm extends Component {
    constructor(props, context) {
    super(props, context);
    this.state = {
        ticker: "",
        submitted: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.savetoWatchlist = this.savetoWatchlist.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
    

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
        
        if (this.state.ticker === "") {
        this.setState({
            submitted: false
        })
      }
    };

    savetoWatchlist = event => {
        event.preventDefault();
        console.log(this.state.ticker, this.props.uid)
        // API.
        API.saveWatchlist(this.state.ticker, this.props.uid).then(res => {console.log(res)})
        console.log("here")
    };
    
    handleFormSubmit = event => {
        event.preventDefault();
        this.setState({submitted: true})
    };

    render() {
        return !this.state.submitted ?  (
            <div>
                <form className="search">
                    <h2 className="searchTitle">Stock Search</h2>
                    <div className="form-group">
                        <label htmlFor="ticker">Enter Ticker:</label>
                        <div>
                            <input
                                value={this.state.ticker}
                                onChange={this.handleInputChange}
                                name="ticker"
                                className="form-control"
                                placeholder="AAPL"
                                id="ticker"
                            />
                            <button className='custom-button'
                                type="submit"
                                onClick={this.handleFormSubmit}
                                >Search
                            </button>
                        </div>
                    </div>
                   
                </form>
            
                   
            </div>
        ) : (<div>
                <form className="search">
                    <h2>Stock Search</h2>
                    <div className="form-group">
                        <label htmlFor="ticker">Stock Symbol:</label>
                        <input
                            value={this.state.ticker}
                            onChange={this.handleInputChange}
                            name="ticker"
                            className="form-control"
                            placeholder="Symbol"
                            id="ticker"
                        />
                    </div>
                    <button className='custom-button'
                        type="submit"
                        onClick={this.handleFormSubmit}
                        >Search
                    </button>
                </form>
                <Charts ticker={this.state.ticker} submitted={this.state.submitted}/>
                <FinancialData ticker={this.state.ticker} submitted={this.state.submitted}/>
                <Watchlist
                    ticker={this.state.ticker}
                    savetoWatchlist = {this.savetoWatchlist}
                    uid={this.props.userid}
                />
            </div>)
    }
};

export default SearchForm;