import React from 'react';
import { Modal, Button, Col, FormGroup, Checkbox, FormControl, Form, ControlLabel } from "react-bootstrap";
import './watchlist.css';



const WatchlistComponent = ({savetoWatchlist, ticker, uid}) => (
  <div>
    <button
      type="submit"
      onClick={savetoWatchlist}
      className="custom-button watchButton">Save to Watchlist
    </button>
  </div>
 );

 export default WatchlistComponent;