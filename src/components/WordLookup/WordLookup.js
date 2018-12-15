import React, { Component } from "react";
import "./searchForm.css";
import "./WordLookup.css"
import API from "../../utils/API"
import { Button, Panel, Table, Glyphicon, Collapse } from "react-bootstrap";

class WordSearch extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            term: "",
            definition: "",
            submitted: false
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.getDefinition = this.getDefinition.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }


    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value.toUpperCase()
        });
        this.setState({
            submitted: false
        })
    };

    getDefinition = event => {
        API.scrapefinancialTerms().then(res => {
            let definitions = res.data[1];
            let terms = res.data[0];
            console.log(terms)
            let termIndex = terms.indexOf(this.state.term);
            console.log(termIndex)
            console.log(definitions[termIndex])
            if (termIndex !== -1) {
                this.setState({ definition: definitions[termIndex] })
            } else {
                this.setState({ definition: "Term doesn't exist." })
            }
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.setState({ submitted: true });
        this.getDefinition();
        // this.searchHolding(this.state.ticker, this.state.chartRange);
        // console.log(this.state.submitted);
        // console.log(this.state.ticker);
    };

    render() {
        return !this.state.submitted ? (
            <div>
                <form className="search">
                    <h2 className="searchTitle">Financial Terms Search</h2>
                    <div className="form-group">
                        <label htmlFor="term">Enter Term:</label>
                        <div>
                            <div className="termsBox">
                                <input
                                    value={this.state.term}
                                    onChange={this.handleInputChange}
                                    name="term"
                                    className="form-control"
                                    placeholder="i.e. : Dividends"
                                    id="term"
                                />
                                <button
                                    type="submit"
                                    onClick={this.handleFormSubmit}
                                    className="custom-button">Search
                                </button>
                            </div>
                        </div>
                    </div>

                </form>


            </div>
        ) : (<div>
            <form className="search">
                <h2 className="searchTitle">Financial Terms Search</h2>
                <div className="termsBoxAfter">
                    <div className="form-group form-group-after">
                        <label htmlFor="term">Enter Term:</label>
                        <div className="termSearchBoxButton">
                            <input
                                value={this.state.term}
                                onChange={this.handleInputChange}
                                name="term"
                                className="form-control"
                                placeholder="Baby Bond"
                                id="term"
                            />
                            <button
                                type="submit"
                                onClick={this.handleFormSubmit}
                                className="custom-button">Search
                            </button>
                        </div>
                    </div>
                </div>
            </form>
            <Panel className="panel-term">
                <Panel.Body>
                    <p>{this.state.term}: {this.state.definition}</p>
                </Panel.Body>
            </Panel>
        </div>)
    }
};

export default WordSearch;