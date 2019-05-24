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
                <Wrapper> <Row> <Col>
                    <Tabs defaultActiveKey="basicInfo" transition={false} id="tab">
                        <Tab eventKey="basicInfo" title="Basic Information">
                            <Row>
                                <Col lg={4} md={4} sm={12} xs={12} className={classes.BasicInformation}>
                                    <header className={classes.ProfileHeader}>Adam Kowalski</header>
                                    <Image
                                        src="https://vignette.wikia.nocookie.net/avatar/images/3/32/La.png/revision/latest?cb=20140124171520"
                                        rounded
                                        fluid
                                    />
                                    <footer>
                                        <span>Poland, Krosno</span><br/>
                                        <span>Male, 34 y/o</span>
                                    </footer>
                                </Col>
                                <Col lg={5} md={8} sm={12} xs={12} className={classes.Communities}>
                                    <header className={classes.ProfileHeader}>Communities</header>
                                    <div className={classes.Communities__buttons}>
                                        <Button>Facebook</Button>
                                        <Button>Instagram</Button>
                                        <Button>Youtube</Button>
                                        <Button>Website</Button>
                                    </div>
                                </Col>
                                <Col>
                                    <div className={classes.Specializations}>
                                        <header className={classes.ProfileHeader}>Specializations</header>
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
                            <Row className={classes.Equipment}>
                                <Col>
                                    <header className={classes.ProfileHeader}>Fishing rods</header>
                                    <div className={classes.ListItem}>
                                        <i className="fas fa-chevron-right"></i>Nash H-Gun Retract
                                    </div>
                                    <div className={classes.ListItem}>
                                         <i className="fas fa-chevron-right"></i>Daiwa Black Widow Stalker
                                    </div>
                                    <div className={classes.ListItem}>
                                         <i className="fas fa-chevron-right"></i>Prologic C1 Alpha
                                    </div>
                                    <div className={classes.ListItem}>
                                         <i className="fas fa-chevron-right"></i>Prologic FTR Carp Rod
                                    </div>
                                </Col>
                                <Col>
                                    <header className={classes.ProfileHeader}>Fishing reels</header>
                                    <div className={classes.ListItem}>
                                         <i className="fas fa-chevron-right"></i>Nash H-Gun Retract
                                    </div>
                                    <div className={classes.ListItem}>
                                         <i className="fas fa-chevron-right"></i>Daiwa Black Widow Stalker
                                    </div>
                                    <div className={classes.ListItem}>
                                         <i className="fas fa-chevron-right"></i>Prologic C1 Alpha
                                    </div>
                                    <div className={classes.ListItem}>
                                         <i className="fas fa-chevron-right"></i>Prologic FTR Carp Rod
                                    </div>
                                </Col>
                            </Row>
                        </Tab>

                        <Tab eventKey="organizations" title="Organizations">
                            <Row className={classes.Organizations}>
                                <Col>

                                    <header className={classes.ProfileHeader}>Organizations</header>
                                    <div className={classes.ListItem}>
                                         <i className="fas fa-users"></i>Team "CARP" poland
                                    </div>
                                    <div className={classes.ListItem}>
                                         <i className="fas fa-users"></i>Team Korda
                                    </div>

                                </Col>
                            </Row>
                        </Tab>

                        <Tab eventKey="achievements" title="Achievements">
                            <Row className={classes.Achievements}>
                                <Col>
                                    <header className={classes.ProfileHeader}>Achievements</header>
                                    <div className={classes.ListItem}>
                                         <i className="fas fa-trophy"></i>World "catfish" championship 2019 - II place
                                    </div>
                                    <div className={classes.ListItem}>
                                         <i className="fas fa-trophy"></i>Polish "carp" championship 2019 - I place
                                    </div>
                                    <div className={classes.ListItem}>
                                         <i className="fas fa-trophy"></i>Warsaw "pike" championship 2018 - V place
                                    </div>
                                    <div className={classes.ListItem}>
                                         <i className="fas fa-trophy"></i>London "catch the biggest" championship 2017 - IV
                                            place
                                    </div>
                                </Col>
                            </Row>
                        </Tab>
                    </Tabs>
                </Col> </Row> </Wrapper>

                <Wrapper>
                    <Row>
                        <Col>
                            <h3 className="text-center"> Hall of Fame </h3>
                        </Col>
                    </Row>
                </Wrapper>

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