import React from "react";
import "./searchForm.css";

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
                    onKeyUp="this.value = this.value.toUpperCase()"
                />
            </div>
            <button
                type="submit"
                onClick={props.handleFormSubmit}
                className="btn btn-success">Search</button>
        </form>
    </div>
);

export default SearchForm;