import React, {Component} from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";
import Wrapper from "../../Components/UI/Wrapper/Wrapper";
import Image from "react-bootstrap/Image";
import classes from "./FindPeople.module.css";
import axios from "../../axios";

class FindPeople extends Component {
    state = {
        name: '',
        city: '',
        profiles: [],
        loading: true
    };

    componentDidMount() {
        this.getProfiles();
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

    calculateAge = dateString => {
            let birthday = +new Date(dateString);
            return ~~((Date.now() - birthday) / (31557600000));
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
                                <Form.Row className={classes.FormRow}>
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
                    {this.state.profiles.map((profile) => {
                        console.log(profile)
                        return (<Wrapper key={profile.id}>
                            <Row className={classes.People}>
                                <Col lg={12}>
                                    <Image
                                        src={profile.avatar}
                                        roundedCircle
                                        className="float-left"
                                    />
                                    <p className="float-left">
                                        <strong>{profile.first_name} {profile.last_name}</strong> <br/>
                                        {profile.country}, {profile.city} <br/>
                                        {profile.sex}, {profile.birthdate ? this.calculateAge(profile.birthdate) + " y/o": null}
                                    </p>
                                    <Button className="float-right">+ Follow</Button>
                                </Col>
                            </Row>
                        </Wrapper>)
                    })
                    }
                </Col>
            </Row>
        );
    }
}

export default FindPeople;