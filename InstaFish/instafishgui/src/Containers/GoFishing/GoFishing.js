import React, {Component} from 'react';
import {Col, Form, Image, Row, Tab, Tabs} from "react-bootstrap";
import Wrapper from "../../Components/UI/Wrapper/Wrapper";
import classes from "./GoFishing.module.css";
import Button from "react-bootstrap/Button";

class GoFishing extends Component {
    render() {
        return (
            <Wrapper>
                <Tabs defaultActiveKey="show" id="tab">
                    <Tab eventKey="create" title="Create event" className={classes.Tab}>
                        <Wrapper>
                            <Form>
                                <Form.Group controlId="Events.create">
                                    <Form.Row className={classes.FormRow}>
                                        <Col>
                                            <Form.Label>Event name</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Event name"
                                            />
                                        </Col>
                                        <Col>
                                            <Form.Label>Fishing date</Form.Label>
                                            <Form.Control
                                                type="date"
                                                placeholder="Fishing date"
                                            />
                                        </Col>
                                    </Form.Row>
                                    <Form.Row className={classes.FormRow}>
                                        <Col>
                                            <Form.Label>Profile description</Form.Label>
                                            <Form.Control
                                                as="textarea"
                                                rows="3"
                                                placeholder="Tell something about your event."
                                            />
                                        </Col>
                                    </Form.Row>
                                    <Form.Row className={classes.FormRow}>
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

                                    <Form.Row className={classes.BtnContainer}>
                                        <Button>
                                            Create event
                                        </Button>
                                    </Form.Row>
                                </Form.Group>
                            </Form>
                        </Wrapper>
                    </Tab>

                    <Tab eventKey="show" title="Show events" className={classes.Tab}>
                        <Wrapper>
                            <Row>
                                <Col lg={9} sm={12} xs={12}>
                                    <div className={classes.EventBasic}>
                                        <header>Fishing event #1</header>
                                        <p className="text-justify">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod
                                            bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra
                                            justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus
                                            et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum,
                                            nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus
                                            sapien nunc eget.
                                        </p>
                                    </div>
                                    <div className={classes.EventTeam}>
                                        <header>Fishing team</header>
                                        <div className={classes.EventTeam__teammates}>
                                            <div className={classes.EventTeam__teammate}>
                                                <Image
                                                    src="https://cdn.pixabay.com/photo/2016/03/21/05/05/plus-1270001_960_720.png"
                                                    roundedCircle/>
                                                <a href="/">Jan Kowalski</a>
                                            </div>
                                            <div className={classes.EventTeam__teammate}>
                                                <Image
                                                    src="https://cdn.pixabay.com/photo/2016/03/21/05/05/plus-1270001_960_720.png"
                                                    roundedCircle/>
                                                <a href="/">Jan Kowalski</a>
                                            </div>
                                            <div className={classes.EventTeam__teammate}>
                                                <Image
                                                    src="https://cdn.pixabay.com/photo/2016/03/21/05/05/plus-1270001_960_720.png"
                                                    roundedCircle/>
                                                <a href="/">Jan Kowalski</a>
                                            </div>
                                            <div className={classes.EventTeam__teammate}>
                                                <Image
                                                    src="https://cdn.pixabay.com/photo/2016/03/21/05/05/plus-1270001_960_720.png"
                                                    roundedCircle/>
                                                <a href="/">Jan Kowalski</a>
                                            </div>
                                        </div>
                                    </div>
                                </Col>

                                <Col>
                                    <div className={classes.EventDetails}>
                                        <span className={classes.Date}>14.03.2019, 8:00</span>
                                        <span className={classes.LocalizationHeader}>Localization</span>
                                        <hr className={classes.Hr}/>
                                        <span className={classes.Localization}>Poland, Besko</span>
                                        <span className={classes.Localization}>Besko Lake</span>
                                    </div>
                                    <div className={classes.EventStatus}>
                                        <span className={classes.EventHeader}>Status</span>
                                        <hr className={classes.Hr}/>
                                        <span className={classes.StatusInfo}>Pending</span>
                                        <div className={classes.EventBtns}>
                                            <Button>Accept</Button>
                                            <Button>Decline</Button>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <div className={classes.EventCreator}>
                                <span>Created by:</span>
                                <Image
                                    src="https://cdn.pixabay.com/photo/2016/03/21/05/05/plus-1270001_960_720.png"
                                    roundedCircle/>
                                <a href="/">Jan Kowalski</a>
                            </div>
                        </Wrapper>
                    </Tab>
                </Tabs>
            </Wrapper>
        );
    }
}

export default GoFishing;