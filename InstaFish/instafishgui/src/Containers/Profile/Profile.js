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
        user_id: this.props.user_id
    };


    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.user_id !== prevState.user_id) {
            console.log("Czy powinienienm zaktualizwoac? Tak")
            return {user_id: nextProps.user_id};
        } else return null;
    }

    // componentWillReceiveProps(nextProps, nextContext) {
    //     this.setState({user_id: nextProps.user_id})
    //     console.log(nextProps.user_id, "fsdfds")
    // }

    axiosGetProfile = () => {
        // let profileId = this.state.user_id;
        // console.log(profileId);
        // if (this.props.params.profileId) {
        //     profileId = this.props.params.profileId;
        // }
        axios
            .get('/profile/' + profileId, {
                headers: {
                    Authorization: `JWT ${localStorage.getItem('token')}`
                }
            })
            .then(res => {
                this.setState({profile: res.data});
                // console.log(res.data)
            })
            .catch(error => {
                console.log("Something went wrong\n" + error);
            });
    };

    componentDidMount() {
        console.log("Zamontowany");
        this.axiosGetProfile();
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.user_id !== this.props.user_id) {
            this.axiosGetProfile();
            console.log("Aktualizuje")
        }
    }

    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     console.log(nextProps.user_id);
    //     this.setState({user_id: this.props.user_id})
    //     return false;
    // }
    // componentDidUpdate(prevProps, prevState, snapshot) {
    //
    // }

    render() {
        const calculateAge = dateString => {
            let birthday = +new Date(dateString);
            return ~~((Date.now() - birthday) / (31557600000));
        };
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
                                        <span>{this.state.profile.country}, {this.state.profile.city}</span><br/>
                                        <span>{this.state.profile.sex}, {this.state.profile.birthdate ?
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
                                                <Button
                                                    onClick={() => window.location.href = "https://google.pl"}>Facebook
                                                </Button>
                                                <Button
                                                    onClick={() => window.location.href = "https://google.pl"}>Instagram
                                                </Button>
                                                <Button
                                                    onClick={() => window.location.href = "https://google.pl"}>Youtube
                                                </Button>
                                                <Button
                                                    onClick={() => window.location.href = "https://google.pl"}>Website
                                                </Button>
                                            </div>
                                        </Col>
                                    </> : null}


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
                                        <i className="fas fa-chevron-right"/>Nash H-Gun Retract
                                    </div>
                                    <div className={classes.ListItem}>
                                        <i className="fas fa-chevron-right"/>Daiwa Black Widow Stalker
                                    </div>
                                    <div className={classes.ListItem}>
                                        <i className="fas fa-chevron-right"/>Prologic C1 Alpha
                                    </div>
                                    <div className={classes.ListItem}>
                                        <i className="fas fa-chevron-right"/>Prologic FTR Carp Rod
                                    </div>
                                </Col>
                                <Col>
                                    <header className={classes.ProfileHeader}>Fishing reels</header>
                                    <div className={classes.ListItem}>
                                        <i className="fas fa-chevron-right"/>Nash H-Gun Retract
                                    </div>
                                    <div className={classes.ListItem}>
                                        <i className="fas fa-chevron-right"/>Daiwa Black Widow Stalker
                                    </div>
                                    <div className={classes.ListItem}>
                                        <i className="fas fa-chevron-right"/>Prologic C1 Alpha
                                    </div>
                                    <div className={classes.ListItem}>
                                        <i className="fas fa-chevron-right"/>Prologic FTR Carp Rod
                                    </div>
                                </Col>
                            </Row>
                        </Tab>

                        <Tab eventKey="organizations" title="Organizations">
                            <Row className={classes.Organizations}>
                                <Col>

                                    <header className={classes.ProfileHeader}>Organizations</header>
                                    <div className={classes.ListItem}>
                                        <i className="fas fa-users"/>Team "CARP" poland
                                    </div>
                                    <div className={classes.ListItem}>
                                        <i className="fas fa-users"/>Team Korda
                                    </div>

                                </Col>
                            </Row>
                        </Tab>

                        <Tab eventKey="achievements" title="Achievements">
                            <Row className={classes.Achievements}>
                                <Col>
                                    <header className={classes.ProfileHeader}>Achievements</header>
                                    <div className={classes.ListItem}>
                                        <i className="fas fa-trophy"/>World "catfish" championship 2019 - II place
                                    </div>
                                    <div className={classes.ListItem}>
                                        <i className="fas fa-trophy"/>Polish "carp" championship 2019 - I place
                                    </div>
                                    <div className={classes.ListItem}>
                                        <i className="fas fa-trophy"/>Warsaw "pike" championship 2018 - V place
                                    </div>
                                    <div className={classes.ListItem}>
                                        <i className="fas fa-trophy"/>London "catch the biggest" championship 2017 -
                                        IV
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
                        <Posts user_id={this.props.user_id}
                            postColSize={"col-lg-6 col-md-12 col-sm-12 col-12"}
                        />
                    </Col>
                </Row>

            </Fragment>

        );
    }
}

export default Profile;