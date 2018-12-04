import React from "react";
import { Button } from "react-bootstrap";
import { Panel } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Grid } from "react-bootstrap";
import "./TickerCard.css";

class TickerCard extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            open: false
        };
    }

    render(props) {
        return (
            <div>
                <div className="card">
                    
                    <Grid className="rowFlex">
                        <Row className="cardTitle">

                            <Col xs={12} md={8}>
                                <h4 className="card-title">{'"Ticker Name"'}</h4>
                                <h6 className="card-subtitle mb-2 text-muted">{'"Primary Exchange"'}</h6>
                            </Col>

                            <Col className="alignRight">
                                <Button className="expandBttn" onClick={() => this.setState({ open: !this.state.open })}>+</Button>
                            </Col>
                        </Row>
                        
                        <Row>
                            
                            <Col xs={12} md={8}>
                                <Row>
                                    <h6 className="card-subtitle mb-2 text-muted">{'"Company Name"'}</h6>
                                    <h6 className="card-subtitle mb-2 text-muted">{'"Technology"'}</h6>
                                </Row>
                            </Col>

                            <Col>
                            
                            </Col>
                        </Row>

                        <Row>
                            <Panel id="collapsible-panel-TickerCard-1" expanded={this.state.open}>
                                <Panel.Collapse>
                                    <Panel.Body>
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life
                                        accusamus terry richardson ad squid. Nihil anim keffiyeh
                                        helvetica, craft beer labore wes anderson cred nesciunt sapiente
                                        ea proident.
                                    </Panel.Body>
                                </Panel.Collapse>
                            </Panel>
                        </Row>

                    </Grid>

                </div>

            </div>
        );
    }
}

export default TickerCard;