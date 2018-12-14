import React from 'react';
import { Modal, Button, Col, FormGroup, Checkbox, FormControl, Form, ControlLabel } from "react-bootstrap";



const WatchlistRemoveComponent = ({removefromWatchlist, id}) => (
  <div>
    <button
      type= "submit"
      onClick={c => removefromWatchlist({c,id})}
      data = {id}
      className="custom-button">Remove from Watchlist
    </button>
  </div>
 );

 export default WatchlistRemoveComponent;