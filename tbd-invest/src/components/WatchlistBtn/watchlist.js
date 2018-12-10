import React from 'react';
import { Modal, Button, Col, FormGroup, Checkbox, FormControl, Form, ControlLabel } from "react-bootstrap";


const WatchlistComponent = ({savetoWatchlist, ticker, uid}) => (
  <div>
    <button
      type="submit"
      onClick={savetoWatchlist}
      className="btn btn-success">Save to Watchlist
    </button>
  </div>
 );

 export default WatchlistComponent;