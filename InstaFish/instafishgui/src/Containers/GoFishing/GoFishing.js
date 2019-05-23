import React, {Component} from 'react';
import {Breadcrumb, Col, Form} from "react-bootstrap";
import Wrapper from "../../Components/UI/Wrapper/Wrapper";
import classes from "./GoFishing.module.css";
import Button from "react-bootstrap/Button";

class GoFishing extends Component {
    render() {
        return (
            <Wrapper>
                <Breadcrumb>
                    <Breadcrumb.Item active>
                        Create Event
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        Show Events
                    </Breadcrumb.Item>
                </Breadcrumb>

                <h3>Create Event</h3>
                <Wrapper>
                    <Form>
                        <Form.Group controlId="Settings.PersonalInformation">
                            <Form.Row className={classes.FormRow}>
                                <Col>
                                    <Form.Label>Event name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Full name"
                                    />
                                </Col>
                                <Col>
                                    <Form.Label>Fishing date</Form.Label>
                                    <Form.Control
                                        type="date"
                                        placeholder="Date of your birthday"
                                    />
                                </Col>
                            </Form.Row>
                            <Form.Row>
                                <Col>
                                    <Form.Label>Profile description</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows="3"
                                        placeholder="Tell something about your event."
                                    />
                                </Col>
                            </Form.Row>
                            <Form.Row>
                                <Col>
                                    <Form.Label>Localization</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="e.g. Poland, Besko Lake"/>
                                </Col>
                                <Col>
                                    <Form.Label>Choose people</Form.Label>
                                    <Form.Control as="select" multiple>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                    </Form.Control>
                                </Col>
                            </Form.Row>
                            <Form.Row className={classes.Flex}>
                                <Button>
                                    Create event
                                </Button>
                            </Form.Row>
                        </Form.Group>
                    </Form>
                </Wrapper>

                <br/><br/>
                <h3>Show Events</h3>
                <Wrapper>Events...</Wrapper>
            </Wrapper>
        );
    }
}

export default GoFishing;