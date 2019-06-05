import React, {Component, Fragment} from 'react';
import {Button, Col, Row, Tab, Tabs} from "react-bootstrap";
import Wrapper from "../../Components/UI/Wrapper/Wrapper";
import Image from "react-bootstrap/Image";
import classes from "./Profile.module.css";
import Posts from "../Posts/Posts";
import axios from "../../axios";

class Profile extends Component {

    state = {
        profile: {},
        user_id: this.props.user_id,
        profile_id: this.props.match.params.profileId
    };


    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.user_id !== prevState.user_id) {
            // console.log("Czy powinienienm zaktualizwoac? Tak");
            return {user_id: nextProps.user_id};
        } else return null;
    }

    axiosGetProfile = () => {
        // console.log(this.state.profile_id);
        let profileId = this.state.user_id;
        if (this.state.profile_id) {
            profileId = this.state.profile_id;
        }
        if (profileId) {
            axios
                .get('/profile/' + profileId, {
                    headers: {
                        Authorization: `JWT ${localStorage.getItem('token')}`
                    }
                })
                .then(res => {
                    if (res.status === 200) {
                        this.setState({profile: res.data})
                    }
                })
                .catch(error => {
                    if (error.response.status === 404) {
                        // TODO Redirect to 404 or something
                        console.log("Profilu nie znaleziono -- redirecting")
                    }
                });
        }
    };

    componentDidMount() {
        // console.log("Zamontowany");
        this.axiosGetProfile();
        // console.log(this.state.user_id);
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.user_id !== this.props.user_id) {
            this.axiosGetProfile();
            // console.log("Aktualizuje")
        }
    }

    render() {
        const calculateAge = dateString => {
            let birthday = +new Date(dateString);
            return ~~((Date.now() - birthday) / (31557600000));
        };
        let profileId = this.state.user_id;
        if (this.state.profile_id) {
            profileId = this.state.profile_id;
        }
        return (

            <Fragment>
                <Wrapper> <Row> <Col>
                    <Tabs defaultActiveKey="basicInfo" transition={false} id="tab">
                        <Tab eventKey="basicInfo" title="Basic Information">
                            <Row>
                                <Col lg={4} md={4} sm={12} xs={12} className={classes.BasicInformation}>
                                    <header
                                        className={classes.ProfileHeader}>{this.state.profile.first_name} {this.state.profile.last_name}</header>
                                    <Image
                                        src={this.state.profile.avatar}
                                        rounded
                                        fluid
                                    />
                                    <footer>
                                        <span>{this.state.profile.country ? this.state.profile.country + ',' : null} {this.state.profile.city}</span><br/>
                                        <span>{this.state.profile.sex ? this.state.profile.sex + ',' : null} {this.state.profile.birthdate ?
                                            calculateAge(this.state.profile.birthdate) + " years old"
                                            : null}
                                        </span>
                                    </footer>
                                </Col>


                                {this.state.profile.communities ?
                                    <>
                                        <Col lg={5} md={8} sm={12} xs={12} className={classes.Communities}>
                                            <header className={classes.ProfileHeader}>Communities</header>
                                            <div className={classes.Communities__buttons}>
                                                {this.state.profile.facebook ?
                                                    <Button
                                                        onClick={() => window.location.href = this.state.profile.facebook}>Facebook
                                                    </Button> : <Button disabled>Facebook</Button>
                                                }
                                                {this.state.profile.instagram ?
                                                    <Button
                                                        onClick={() => window.location.href = this.state.profile.instagram}>Instagram
                                                    </Button> : <Button disabled>Instagram</Button>
                                                }

                                                {this.state.profile.youtube ?
                                                    <Button
                                                        onClick={() => window.location.href = this.state.profile.youtube}>Youtube
                                                    </Button> : <Button disabled>Youtube</Button>
                                                }
                                                {this.state.profile.website ?
                                                    <Button
                                                        onClick={() => window.location.href = this.state.profile.website}>Website
                                                    </Button> : <Button disabled>Website</Button>
                                                }
                                            </div>
                                        </Col>
                                    </> : null}

                                <Col>
                                    <div className={classes.Specializations}>
                                        <header className={classes.ProfileHeader}>Specialization</header>
                                        <div className="alert alert-primary">
                                            {this.state.profile.specialization}
                                        </div>

                                    </div>
                                </Col>
                            </Row>
                        </Tab>

                        <Tab eventKey="equipment" title="Equipment">
                            <Row className={classes.Equipment}>
                                <Col>
                                    <header className={classes.ProfileHeader}>Fishing rod</header>
                                    <div className={classes.ListItem}>
                                        <i className="fas fa-chevron-right"/>{this.state.profile.fishing_rod}
                                    </div>

                                </Col>
                                <Col>
                                    <header className={classes.ProfileHeader}>Fishing reel</header>
                                    <div className={classes.ListItem}>
                                        <i className="fas fa-chevron-right"/>{this.state.profile.fishing_reel}
                                    </div>

                                </Col>
                            </Row>
                        </Tab>

                        <Tab eventKey="organization" title="Organization">
                            <Row className={classes.Organizations}>
                                <Col>

                                    <header className={classes.ProfileHeader}>Organization</header>
                                    <div className={classes.ListItem}>
                                        <i className="fas fa-users"/>{this.state.profile.organization}
                                    </div>


                                </Col>
                            </Row>
                        </Tab>

                        <Tab eventKey="achievements" title="Achievements">
                            <Row className={classes.Achievements}>
                                <Col>
                                    <header className={classes.ProfileHeader}>Achievements</header>
                                    <div className={classes.ListItem}>
                                        <i className="fas fa-trophy"/> <strong>Your trophies:</strong>
                                        <pre>{this.state.profile.achievement}</pre>
                                    </div>

                                </Col>
                            </Row>
                        </Tab>

                        <Tab eventKey="about" title="About">
                            <Row className={classes.Achievements}>
                                <Col>
                                    <header className={classes.ProfileHeader}>About</header>
                                    <div className={classes.ListItem}>
                                        <i className="fas fa-info-circle" /> <strong>BIO:</strong>
                                        <pre>{this.state.profile.description}</pre>
                                    </div>

                                </Col>
                            </Row>
                        </Tab>
                    </Tabs>
                </Col> </Row> </Wrapper>

                <Wrapper>
                    <Row>
                        <Col>
                            {/*<h3 className="text-center"> Hall of Fame </h3>*/}
                            <h3 className="text-center"> {this.state.profile.first_name} posts</h3>
                        </Col>
                    </Row>
                </Wrapper>

                <Row>
                    <Col>
                        <Posts user_id={this.props.user_id}
                               profile_id={profileId}
                               postColSize={"col-lg-6 col-md-12 col-sm-12 col-12"}
                        />
                    </Col>
                </Row>

            </Fragment>

        );
    }
}

export default Profile;