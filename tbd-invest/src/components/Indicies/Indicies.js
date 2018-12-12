import React, { Component } from "react";
import axios from 'axios';

import API from "../../utils/API";
import './Indicies.css';

class Indicies extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dataLoaded:false,
            data:[],
        }
    }

    componentDidMount(){
        API.getStockData()
        .then(res => {
            const {data} = res;
            const supportedStockMarkets = ["XNYS",
            "XBOS","XPHL"];
            const filteredData = data.filter(stockMarketData => supportedStockMarkets.indexOf(stockMarketData.mic) > -1);
            this.setState({data: filteredData, dataLoaded:true});
        })
        .catch(err=> console.log(err));
    }

    render(){
     const {data, dataLoaded} = this.state;   

     return dataLoaded ? (<div className="main-indicies-container">{data.map((stockmarketItem, i) => {
         return (
             <div key={i} className={`stockmarketItem stockmarketItem-${i + 1}`}>
             <p>{stockmarketItem.venueName}</p>
             <p>{(stockmarketItem.volume).toLocaleString('en')}</p>
             <p>{`${(stockmarketItem.marketPercent * 100).toFixed(2)}%`}</p>
             </div>
         )
     })}</div>) : null;
    }
}

export default Indicies;