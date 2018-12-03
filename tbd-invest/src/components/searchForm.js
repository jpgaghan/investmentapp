import React from "react";
import "./searchForm.css";

const searchForm = props => (
    <div>
        <h4>Stock Search</h4>
        <form className="search">
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
                className="btn btn-success">Search</button>
        </form>
    </div>
);

export default searchForm;