import React from "react";
import "./TickerCard.css";

const TickerCard = props => (

    <div className="card" style={{ width: 18 + "rem"}} >
        <div className="card-body">
            <h5 className="card-title">{props.compayName || "Company Name"}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{props.tickerName || "Ticker Name"}</h6>
            <hr></hr>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="card-link">Card link</a>
            <a href="#" className="card-link">Another link</a>
        </div>
    </div>

);

export default TickerCard;

// style="width: 18rem;"