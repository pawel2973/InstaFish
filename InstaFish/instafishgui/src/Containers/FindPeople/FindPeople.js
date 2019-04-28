import React, {Component} from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";
import Wrapper from "../../Components/UI/Wrapper/Wrapper";
import Image from "react-bootstrap/Image";
import classes from "./FindPeople.module.css";

class FindPeople extends Component {
    state = {
        name: '',
        city: ''
    };

    //TODO support other resolution: Specific People
    render() {
        return (
            <Row>
                <Col lg={3}>
                    <Wrapper>
                        <h5>Filter results</h5>
                        <hr/>
                        <Form>
                            <Form.Group controlId="FindPeople.Filter">
                                <Form.Row>
                                    <Col>
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Name"
                                            value={this.state.name}
                                            onChange={(event) => this.setState({name: event.target.value})}
                                        />
                                    </Col>
                                </Form.Row>
                                <Form.Row>
                                    <Col>
                                        <Form.Label>City</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="City"
                                            value={this.state.city}
                                            onChange={(event) => this.setState({city: event.target.value})}
                                        />
                                    </Col>
                                </Form.Row>
                                <Form.Row>
                                    <Col>
                                        <Button
                                            className={classes.Button}
                                            variant="primary"
                                            size="sm"
                                            block
                                            // onClick={this.createPostHandler}
                                        >
                                            Search
                                        </Button>
                                    </Col>
                                </Form.Row>
                            </Form.Group>
                        </Form>
                    </Wrapper>
                </Col>
                <Col lg={9}>
                    <Wrapper>
                        <Row className={classes.People}>
                            <Col lg={9}>
                                <Image
                                    src="https://vignette.wikia.nocookie.net/avatar/images/3/32/La.png/revision/latest?cb=20140124171520"
                                    roundedCircle
                                    className="float-left"
                                />
                                <p>
                                    <strong>Adam Kowalski</strong> <br/>
                                    Poland, Krosno <br/>
                                    Male, 34 y/o
                                </p>
                            </Col>
                            <Col lg={3}>
                                <Button className="float-lg-right">+ Follow</Button>
                            </Col>
                        </Row>
                    </Wrapper>
                    <Wrapper>
                        People #2
                    </Wrapper>
                    <Wrapper>
                        People #3
                    </Wrapper>
                </Col>
            </Row>
        );
    }
}

export default FindPeople;