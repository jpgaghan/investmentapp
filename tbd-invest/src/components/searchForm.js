import React from "react";
import "./searchForm.css";

const searchForm = props => (
    <div>
        <h4>Stock Search</h4>
        <form className="search">
            <div className="form-group">
                <label htmlFor="symbol">Stock Symbol:</label>
                <input
                    value={props.symbol}
                    onChange={props.handleInputChange}
                    name="symbol"
                    className="form-control"
                    placeholder="Symbol"
                    id="symbol"
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