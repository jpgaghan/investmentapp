import React from "react";
import { Button } from "react-bootstrap";
import { Panel } from "react-bootstrap";
// import { Row } from "react-bootstrap";
// import { Col } from "react-bootstrap";
// import { Grid } from "react-bootstrap";
import "./TickerCard.css";

class TickerCard extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            open: false
        };
    }

    render(props) {

            {
                switch (this.state.open) {
                    case "false":
                        
                    return(
                        <div>
                            <div className="card">
                                
                                <div className="divFlex">
                                    <div className="cardTitle">

                                        <div xs={12} md={8}>
                                            <h4 className="card-title">{'"Ticker Name"'}</h4>
                                            <h6 className="card-subtitle mb-2 text-muted">{'"Primary Exchange"'}</h6>

                                            <div className="alignRight">
                                                <Button className="expandBttn" onClick={() => this.setState({ open: !this.state.open })}>+</Button>
                                            </div>
                                        </div>

                                        
                                    </div>
                                    
                                    <div>
                                        
                                        <div xs={12} md={8}>
                                            <div>
                                                <h6 className="card-subtitle mb-2 text-muted">{'"Company Name"'}</h6>
                                                <h6 className="card-subtitle mb-2 text-muted">{'"Technology"'}</h6>
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

                    case "true":

                    return(
                        <div>
                            <div className="card">
                                
                                <div className="divFlex">
                                    <div className="cardTitle">

                                        <div xs={12} md={8}>
                                            <h4 className="card-title">{'"Ticker Name"'}</h4>
                                            <h6 className="card-subtitle mb-2 text-muted">{'"Primary Exchange"'}</h6>

                                            <div className="alignRight">
                                                <Button className="expandBttn" onClick={() => this.setState({ open: !this.state.open })}>+</Button>
                                            </div>
                                        </div>

                                        
                                    </div>
                                    
                                    <div>
                                        
                                        <div xs={12} md={8}>
                                            <div>
                                                <h6 className="card-subtitle mb-2 text-muted">{'"Company asdflijkasdfoiaw;kojasdfasdfasdfkhName"'}</h6>
                                                <h6 className="card-subtitle mb-2 text-muted">{'"Technology"'}</h6>
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

                    return(
                        <div>
                            <div className="card">
                                
                                <div className="divFlex">
                                    <div className="cardTitle">

                                        <div xs={12} md={8}>
                                            <h4 className="card-title">{'"Ticker Name"'}</h4>
                                            <h6 className="card-subtitle mb-2 text-muted">{'"Primary Exchange"'}</h6>

                                            <div className="alignRight">
                                                <Button className="expandBttn" onClick={() => this.setState({ open: !this.state.open })}>+</Button>
                                            </div>
                                        </div>

                                        
                                    </div>
                                    
                                    <div>
                                        
                                        <div xs={12} md={8}>
                                            <div>
                                                <h6 className="card-subtitle mb-2 text-muted">{'"Company Name"'}</h6>
                                                <h6 className="card-subtitle mb-2 text-muted">{'"Technology"'}</h6>
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
                }
            }

            
    
    }
}

export default TickerCard;