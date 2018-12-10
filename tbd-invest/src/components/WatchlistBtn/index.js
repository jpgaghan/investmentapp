import React, { Component } from "react";
import watchlistComponent from './watchlist'
import SigninComponent from './SignUpView';
// import router from "../../routes/api/tickers";
import API from "../../utils/API";


export default class Watchlist extends Component {

  constructor(props, context) {
   super(props, context);
   this.savetoWatchlist = this.savetoWatchlist.bind(this);
  }

  savetoWatchlist(event) {
    event.preventDefault();
    console.log(event.symbol)
  }
  

  // symbol = {this.context.state.symbol}
 render() {
   return(
      <watchlistComponent savetoWatchlist = {this.savetoWatchlist} ticker={this.props.ticker} />
    )
};
}