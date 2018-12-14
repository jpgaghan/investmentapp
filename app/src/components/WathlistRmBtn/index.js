import React, { Component } from "react";
import WatchlistRemoveComponent from './watchlist'

// import SigninComponent from './SignUpView';
// import router from "../../routes/api/tickers";


export default class WatchlistRemoveComponentBtn extends Component {

  // symbol = {this.context.state.symbol}
 render() {
   return(
      <WatchlistRemoveComponent
        removefromWatchlist = {this.props.removefromWatchlist}
        id={this.props.id}
      />
    )
};
}