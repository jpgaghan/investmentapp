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

     return dataLoaded ? (<div className="main-indicies-container">{data.map((stockmarketItem, i) => {
         return (

//             <Carousel>
//   <Carousel.Item>
//     <img width={900} height={500} alt="900x500" src="/carousel.png" />
//     <Carousel.Caption>
//       <h3>First slide label</h3>
//       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//     </Carousel.Caption>
//   </Carousel.Item>
//   <Carousel.Item>
//     <img width={900} height={500} alt="900x500" src="/carousel.png" />
//     <Carousel.Caption>
//       <h3>Second slide label</h3>
//       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//     </Carousel.Caption>
//   </Carousel.Item>
//   <Carousel.Item>
//     <img width={900} height={500} alt="900x500" src="/carousel.png" />
//     <Carousel.Caption>
//       <h3>Third slide label</h3>
//       <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//     </Carousel.Caption>
//   </Carousel.Item>
// </Carousel>

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