import React, {Component} from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";
import Wrapper from "../../Components/UI/Wrapper/Wrapper";
import Image from "react-bootstrap/Image";
import classes from "./FindPeople.module.css";
import axios from "../../axios";
import Spinner from "../../Components/UI/Spinner/Spinner";
import {Link} from "react-router-dom";

class FindPeople extends Component {
    state = {
        first_name: '',
        last_name: '',
        city: '',
        profiles: [],
        loading: true,
        user_id: this.props.user_id
    };

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.user_id !== prevState.user_id) {
            return {user_id: nextProps.user_id};
        } else return null;
    }

    componentDidMount() {
        this.getProfiles();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.user_id !== this.props.user_id) {
            this.getProfiles();
        }
    }

    getProfiles = () => {
        this.setState({loading: true});
        axios
            .get('/profile/', {
                headers: {
                    Authorization: `JWT ${localStorage.getItem('token')}`
                }
            })
            .then(res => {
                // const next = res.data.next
                this.setState({profiles: res.data.results, loading: false});
                // console.log(this.state.posts);
            })
            .catch(error => {
            });
    };

    handleSearch = () => {
        this.setState({loading: true});
        axios
            .get('/profile/' +
                '?first_name=' + this.state.first_name +
                '&last_name=' + this.state.last_name +
                '&city=' + this.state.city, {
                headers: {
                    Authorization: `JWT ${localStorage.getItem('token')}`
                }
            })
            .then(res => {
                // const next = res.data.next
                this.setState({profiles: res.data.results, loading: false});
                // console.log(this.state.posts);
            })
            .catch(error => {
            });
    };

    calculateAge = dateString => {
        let birthday = +new Date(dateString);
        return ~~((Date.now() - birthday) / (31557600000));
    };

    handleFollow = (id) => {
        axios
            .patch('/profile/' + this.state.user_id + '/followers', {follow: id}, {
                headers: {
                    Authorization: `JWT ${localStorage.getItem('token')}`
                }
            })
            .then(res => {
                // actually not needed
                const userProfileId = this.state.profiles.findIndex((profile => profile.id === id)),
                    profiles = [...this.state.profiles]
                profiles[userProfileId].isFollowed = true;
                this.setState({
                    profiles: profiles
                })
            })
            .catch(error => {
            });
    };

    handleUnfollow = (id) => {
        axios.delete('/profile/' + this.state.user_id + '/followers', {
            data: {follow: id},
            headers: {Authorization: `JWT ${localStorage.getItem('token')}`}
        })
            .then(response => {
                // console.log(this.state.profiles)
                const userProfileId = this.state.profiles.findIndex((profile => profile.id === id)),
                    profiles = [...this.state.profiles]
                profiles[userProfileId].isFollowed = false
                this.setState({
                    profiles: profiles
                })
                // console.log(this.state.profiles)
            })
            .catch((error) => {
                // console.log(error);
            })
    };

    //TODO support other resolution: Specific People
    render() {
        // console.log("rendering....")
        const profiles =
            this.state.profiles.map((profile) => {
                if (!("isFollowed" in profile)) {
                    profile.isFollowed = profile.followed_by.includes(this.state.user_id)
                }
                return (<Wrapper key={profile.id}>
                    <Row className={classes.People}>
                        <Col lg={12}>
                            <Image
                                src={profile.avatar}
                                roundedCircle
                                className="float-left"
                                width="80px"
                                height="80px"
                            />
                            <p className="float-left">
                                <Link
                                    to={"/profile/" + profile.id}><strong>{profile.first_name} {profile.last_name}</strong>
                                </Link><br/>
                                {profile.country ? profile.country + ',' : null} {profile.city} <br/>
                                {profile.sex ? profile.sex + ',' : null} {profile.birthdate ? this.calculateAge(profile.birthdate) +
                                " y/o" : null}
                            </p>
                            {profile.isFollowed ?
                                <Button
                                    className="float-right"

                                    onClick={() => this.handleUnfollow(profile.id)}>-
                                    Unfollow</Button>
                                : <Button
                                    className="float-right"
                                    variant="outline-primary"
                                    onClick={() => this.handleFollow(profile.id)}>+
                                    Follow</Button>}
                        </Col>
                    </Row>
                </Wrapper>)
            })

        return (
            <Row>
                <Col lg={3}>
                    <Wrapper>
                        <h5>Filter results</h5>
                        <hr/>
                        <Form>
                            <Form.Group controlId="FindPeople.Filter">
                                <Form.Row className={classes.FormRow}>
                                    <Col>
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="First Name"
                                            value={this.state.first_name}
                                            onChange={(event) => this.setState({first_name: event.target.value})}
                                        />
                                    </Col>
                                </Form.Row>
                                <Form.Row className={classes.FormRow}>
                                    <Col>
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Last Name"
                                            value={this.state.last_name}
                                            onChange={(event) => this.setState({last_name: event.target.value})}
                                        />
                                    </Col>
                                </Form.Row>
                                <Form.Row className={classes.FormRow}>
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
                                            variant="primary"
                                            size="sm"
                                            block
                                            onClick={this.handleSearch}
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
                    {this.state.loading ?
                        <Spinner/> : profiles}
                </Col>
            </Row>
        );
    }
}

export default FindPeople;