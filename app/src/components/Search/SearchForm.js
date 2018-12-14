import React, { Component } from "react";
import "./searchForm.css";
import { Form, Button } from "react-bootstrap";
import Charts from "../Chart/Chart.js";
import FinancialData from "../FinancialData/financialdata"
// import API from "../../utils/API"
class SearchForm extends Component {
    constructor(props, context) {
    super(props, context);
    this.state = {
        ticker: "",
        submitted: false,
        userid: this.props.uid,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
    

    handleInputChange = event => {

        const name = event.target.name;
        const value = event.target.value;
        event.preventDefault();

        this.setState({
            [name]: value
        });
        
        if (this.state.ticker === "") {
        this.setState({
            submitted: false
        })
      }
    };

    
    handleFormSubmit = event => {
        event.preventDefault();
        this.setState({submitted: true})
    };

    render() {
        return !this.state.submitted ?  (
            <div>
                <form className="search">
                    <h2 className="searchTitle">Stock Search</h2>
                    <div className="form-group">
                        <label htmlFor="ticker">Enter Ticker:</label>
                        <Form inline>
                            <input
                                value={this.state.ticker}
                                onChange={this.handleInputChange}
                                name="ticker"
                                className="form-control"
                                placeholder="AAPL"
                                id="ticker"
                            />
                            <button className='custom-button'
                                type="submit"
                                onClick={this.handleFormSubmit}
                                >Search
                            </button>
                        </Form>
                    </div>
                   
                </form>
            
                   
            </div>
        ) : (<div>
                <Form className="search">
                    <h2>Stock Search</h2>
                    <div className="stockSearchField">
                        <div className="form-group">
                            <label htmlFor="ticker">Stock Symbol:</label>
                            <input
                                value={this.state.ticker}
                                onChange={this.handleInputChange}
                                name="ticker"
                                className="form-control"
                                placeholder="Symbol"
                                id="ticker"
                            />
                        </div>
                        <button className='custom-button'
                            type="submit"
                            onClick={this.handleFormSubmit}
                            >Search
                        </button>
                    </div>
                </Form>
                <Charts ticker={this.state.ticker} submitted={this.state.submitted}/>
                <FinancialData ticker={this.state.ticker} submitted={this.state.submitted}
                userid={this.state.userid}/>
            </div>)
    }
};

export default SearchForm;