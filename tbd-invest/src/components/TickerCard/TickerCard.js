import React from "react";
import { Button } from "react-bootstrap";
import { Panel } from "react-bootstrap";
import API from "../../utils/API";
// import { Row } from "react-bootstrap";
// import { Col } from "react-bootstrap";
// import { Grid } from "react-bootstrap";
import "./TickerCard.css";

class TickerCard extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            stock: "aapl",
            open: false,
            CurrentPrice: "",
            PreviousClose: "",
            DailyRange: "",
            DailyVolume: "",
            MarketCap: "",
            Beta: "",
            PE: "",
            EPS: "",
            Sector: "",
            DailyPercentChange: "",
            news: []
        };
        this.getfinancialData = this.getfinancialData.bind(this)
    }
    getfinancialData = () => {
        console.log("here")
        API.financialData(this.state.stock)
            .then(res => {
                console.log(res.data.chart.length - 1)
                this.setState({
                    CurrentPrice: res.data.quote.latestPrice,
                    PreviousClose: res.data.quote.previousClose,
                    DailyRange: res.data.chart.length,
                    DailyVolume: res.data.chart[res.data.chart.length - 2].volume,
                    MarketCap: res.data.quote.marketCap,
                    Beta: res.data.stats.beta,
                    PE: res.data.quote.peRatio,
                    EPS: res.data.stats.consensusEPS,
                    Sector: res.data.quote.sector,
                    DailyPercentChange: res.data.chart[res.data.chart.length - 2].changePercent,
                    Exchange: res.data.quote.primaryExchange,
                    CompanyName: res.data.quote.companyName,
                    news: res.data.news
                })
                this.setState({ open: !this.state.open })
                console.log(this.state)
            })
    }

    render(props) {

        {
            switch (this.state.open) {
                case false:

                    return (
                        <div>
                            <div className="card">

                                <div className="divFlex">

                                    <div className="alignRight">
                                        <Button className="expandBttn" onClick={() => { this.getfinancialData() }}>+</Button>
                                        {/* () => this.setState({ open: !this.state.open }) */}
                                    </div>

                                    <div className="cardTitle">

                                        <div xs={12} md={8}>

                                            <h4 className="card-title">{this.state.stock}</h4>
                                            <h6 className="card-subtitle mb-2 text-muted">{this.state.Exchange}</h6>

                                        </div>


                                    </div>

                                    <div>

                                        <div xs={12} md={8}>
                                            <div>
                                                <h6 className="card-subtitle mb-2 text-muted">{this.state.CompanyName}</h6>
                                                <h6 className="card-subtitle mb-2 text-muted">{this.state.Sector}</h6>
                                            </div>
                                        </div>

                                        <div>

                                        </div>
                                    </div>

                                    <div>
                                        <Panel className="expandedCard" id="collapsible-panel-TickerCard-1" expanded={this.state.open}>
                                            <Panel.Collapse>
                                                <Panel.Body>
                                                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                                                    accusamus terry richardson ad squid. Nihil anim keffiyeh
                                                    helvetica, craft beer labore wes anderson cred nesciunt sapiente
                                                    ea proident.
                                                </Panel.Body>
                                            </Panel.Collapse>
                                        </Panel>
                                    </div>

                                </div>

                            </div>

                        </div>
                    );

                case true:

                    return (
                        <div>
                            <div className="card">

                                <div className="divFlex">

                                    <div className="alignRight">
                                        <Button className="expandBttn" onClick={() => { this.getfinancialData() }}>+</Button>
                                    </div>

                                    <div className="cardTitle">

                                        <div xs={12} md={8}>
                                            <h4 className="card-title">{this.state.stock}</h4>
                                            <h6 className="card-subtitle mb-2 text-muted">{this.state.Exchange}</h6>
                                        </div>


                                    </div>

                                    <div>

                                        <div xs={12} md={8}>
                                            <div>
                                                <h6 className="card-subtitle mb-2 text-muted">{this.state.CompanyName}</h6>
                                                <h6 className="card-subtitle mb-2 text-muted">{this.state.Sector}</h6>
                                            </div>
                                        </div>

                                        <div>

                                        </div>
                                    </div>

                                    <div>
                                        <Panel className="expandedCard" id="collapsible-panel-TickerCard-1" expanded={this.state.open}>
                                            <Panel.Collapse>
                                                <Panel.Body>
                                                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                                                    accusamus terry richardson ad squid. Nihil anim keffiyeh
                                                    helvetica, craft beer labore wes anderson cred nesciunt sapiente
                                                    ea proident.
                                                </Panel.Body>
                                            </Panel.Collapse>
                                        </Panel>
                                    </div>

                                </div>

                            </div>

                        </div>
                    );
                    break;

                default:

                    return (
                        <div>
                            <div className="card">

                                <div className="divFlex">
                                    <div className="cardTitle">

                                        <div xs={12} md={8}>
                                            <h4 className="card-title">{this.state.stock}</h4>
                                            <h6 className="card-subtitle mb-2 text-muted">{this.state.Exchange}</h6>
                                            <div className="alignRight">
                                                <Button className="expandBttn" onClick={() => { this.getfinancialData() }}>+</Button>
                                            </div>
                                        </div>


                                    </div>

                                    <div>

                                        <div xs={12} md={8}>
                                            <div>
                                                <h6 className="card-subtitle mb-2 text-muted">{this.state.CompanyName}</h6>
                                                <h6 className="card-subtitle mb-2 text-muted">{this.state.Sector}</h6>
                                            </div>
                                        </div>

                                        <div>

                                        </div>
                                    </div>

                                    <div>
                                        <Panel className="expandedCard" id="collapsible-panel-TickerCard-1" expanded={this.state.open}>
                                            <Panel.Collapse>
                                                <Panel.Body>
                                                    {/* financial api data goes here */}
                                                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                                                    accusamus terry richardsedrtytrertgfdertfcdfvcxdrtgbvcfrtyhbon ad squid. Nihil anim keffiyeh
                                                    helvetica, craft beer labore wes anderson cred nesciunt sapiente
                                                    ea proident.
                                                </Panel.Body>
                                            </Panel.Collapse>
                                        </Panel>
                                    </div>

                                </div>

                            </div>

                        </div>
                    );
                    break;
            }
        }



    }
}

export default TickerCard;