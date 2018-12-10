import React from "react";
import "./searchForm.css";
import Watchlist from "../WatchlistBtn/index";


const SearchForm = props => (
    <div>
        <form className="search">
        <h2>Stock Search</h2>
            <div className="form-group">
                <label htmlFor="ticker">Stock Symbol:</label>
                <input
                    value={props.ticker}
                    onChange={props.handleInputChange}
                    name="ticker"
                    className="form-control"
                    placeholder="Symbol"
                    id="ticker"
                />
            </div>
            <button
                type="submit"
                onClick={props.handleFormSubmit}
                className="btn btn-success">Search
            </button>
        </form>
        <Watchlist symbol = {props.ticker}/>
    </div>
);

export default SearchForm;