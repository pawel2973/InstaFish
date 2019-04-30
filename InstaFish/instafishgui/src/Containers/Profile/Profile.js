import React, {Component, Fragment} from 'react';
import {Button, Col, Row, Tab, Tabs} from "react-bootstrap";
import Wrapper from "../../Components/UI/Wrapper/Wrapper";
import Image from "react-bootstrap/Image";
import classes from "./Profile.module.css";
import Posts from "../Posts/Posts";

class Profile extends Component {
    render() {
        return (
            <Fragment>
                <Row>
                    <Col>
                        <Wrapper>
                            <Row>
                                <Col lg={12}>
                                    <Tabs defaultActiveKey="basicInfo" transition={false} id="tab">
                                        <Tab eventKey="basicInfo" title="Basic Information">
                                            <Row className={classes.ProfileRow}>
                                                <Col lg={3} md={3} sm={3} xs={4}>
                                                    <h5 className="text-center">Adam Kowalski</h5>
                                                    <Image
                                                        src="https://vignette.wikia.nocookie.net/avatar/images/3/32/La.png/revision/latest?cb=20140124171520"
                                                        rounded
                                                        fluid
                                                    />
                                                    <div className="text-center">
                                                        <span>Poland, Krosno</span><br/>
                                                        <span>Male, 34 y/o</span>
                                                    </div>
                                                </Col>
                                                <Col lg={6} md={6} sm={6} xs={8}>
                                                    <div className={classes.Communities}>
                                                        <h5>Communities</h5>
                                                        <Button className={classes.CommunityButtons}
                                                                disabled>Facebook</Button>
                                                        <Button className={classes.CommunityButtons}>Instagram</Button>
                                                        <Button className={classes.CommunityButtons}>Youtube</Button>
                                                        <Button className={classes.CommunityButtons}>Website</Button>
                                                    </div>
                                                </Col>
                                                <Col>
                                                    <div className={classes.Specializations}>
                                                        <h5>Specializations</h5>
                                                        <div className="alert alert-primary">
                                                            Carp Fishing
                                                        </div>
                                                        <div className="alert alert-primary">
                                                            Fly Fishing
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Tab>
                                        <Tab eventKey="equipment" title="Equipment">
                                            <Row className={classes.ProfileRow}>
                                                <Col>
                                                    <div>
                                                        <h5>Fishing rods</h5>
                                                        <div className={classes.ListItem}>
                                                            <li>Nash H-Gun Retract</li>
                                                        </div>
                                                        <div className={classes.ListItem}>
                                                            <li>Daiwa Black Widow Stalker</li>
                                                        </div>
                                                        <div className={classes.ListItem}>
                                                            <li>Prologic C1 Alpha</li>
                                                        </div>
                                                        <div className={classes.ListItem}>
                                                            <li>Prologic FTR Carp Rod</li>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col>
                                                    <div>
                                                        <h5>Fishing reels</h5>
                                                        <div className={classes.ListItem}>
                                                            <li>Nash H-Gun Retract</li>
                                                        </div>
                                                        <div className={classes.ListItem}>
                                                            <li>Daiwa Black Widow Stalker</li>
                                                        </div>
                                                        <div className={classes.ListItem}>
                                                            <li>Prologic C1 Alpha</li>
                                                        </div>
                                                        <div className={classes.ListItem}>
                                                            <li>Prologic FTR Carp Rod</li>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Tab>
                                        <Tab eventKey="organizations" title="Organizations">
                                            <Row className={classes.ProfileRow}>
                                                <Col>
                                                    <div>
                                                        <h5>Organizations</h5>
                                                        <div className={classes.ListItem}>
                                                            <li>Team "CARP" poland</li>
                                                        </div>
                                                        <div className={classes.ListItem}>
                                                            <li>Team Korda</li>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Tab>
                                        <Tab eventKey="achivements" title="Achivements">
                                            <Row className={classes.ProfileRow}>
                                                <Col>
                                                    <div>
                                                        <h5>Organizations</h5>
                                                        <div className={classes.ListItem}>
                                                            <li>World "catfish" championship 2019 - II place</li>
                                                        </div>
                                                        <div className={classes.ListItem}>
                                                            <li>Polish "carp" championship 2019 - I place</li>
                                                        </div>
                                                        <div className={classes.ListItem}>
                                                            <li>Warsaw "pike" championship 2018 - V place</li>
                                                        </div>
                                                        <div className={classes.ListItem}>
                                                            <li>London "catch the biggest" championship 2017 - IV
                                                                place
                                                            </li>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Tab>
                                    </Tabs>
                                </Col>
                            </Row>
                        </Wrapper>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Wrapper><h3 className="text-center">Hall of Fame</h3></Wrapper>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Posts
                            postColSize={"col-lg-6 col-md-12 col-sm-12 col-12"}
                        />
                    </Col>
                </Row>
            </Fragment>
        );
    }
}

export default Profile;