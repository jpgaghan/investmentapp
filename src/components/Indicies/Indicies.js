import React, { Component } from "react";
import { Carousel } from "react-bootstrap";



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
            "XBOS","XPHL", "XASE", "IEXG"];
            const filteredData = data.filter(stockMarketData => supportedStockMarkets.indexOf(stockMarketData.mic) > -1);
            this.setState({data: filteredData, dataLoaded:true});
        })
        .catch(err=> console.log(err));
    }

    render(){
     const {data, dataLoaded} = this.state;   

     return dataLoaded ? (<div className="tickerContainer">{data.map((stockmarketItem, i) => {
         return (


            // <div key={i} className={`stockmarketItem stockmarketItem-${i + 1}`}>
            <div className="index1">
             <p>{stockmarketItem.venueName}</p>
             </div>
                 <div className="index2">
             <p>{(stockmarketItem.volume).toLocaleString('en')}</p>
             </div>
             <div className="index3">
             <p>{`${(stockmarketItem.marketPercent * 100).toFixed(2)}%`}</p>
             </div>
             
            
         )
     })}</div>) : null;
    }
}

export default Indicies;