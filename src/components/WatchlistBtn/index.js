import React, { Component } from "react";
import WatchlistComponent from './watchlist'

// import SigninComponent from './SignUpView';
// import router from "../../routes/api/tickers";


export default class Watchlist extends Component {

  // symbol = {this.context.state.symbol}
 render() {
  //  console.dir(this.context)
   return(
      <WatchlistComponent
        savetoWatchlist = {this.props.savetoWatchlist}
      />
    )
};
}