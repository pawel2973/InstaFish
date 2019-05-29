import React, {Component} from 'react';
import Wrapper from "../../Components/UI/Wrapper/Wrapper";
import {Button, Col, Form} from "react-bootstrap";
import classes from "./Settings.module.css";

class Settings extends Component {
    state = {
        personalInformation: [],
        fullName: '',
        birthday: '',
        gender: '',
        avatar: '',
        country: '',
        city: '',
        specializations: '',
        organizations: '',
        description: '',
        facebook: '',
        instagram: '',
        youtube: '',
        website: '',
        fishingRods: '',
        fishingReels: ''
    };

    render() {
        return (
            <div>
                <Wrapper>
                    <h1>General Account Settings</h1>
                    <Form>
                        <Wrapper>
                            <h5>Personal information</h5>
                            <hr/>
                            <Form.Group controlId="Settings.PersonalInformation">
                                <Form.Row className={classes.FormRow}>
                                    <Col>
                                        <Form.Label>Full name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Full name"
                                            value={this.state.fullName}
                                            onChange={(event) => this.setState({fullName: event.target.value})}
                                        />
                                    </Col>
                                    <Col>
                                        <Form.Label>Birthday</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Date of your birthday"
                                            value={this.state.birthday}
                                            onChange={(event) => this.setState({birthday: event.target.value})}
                                        />
                                    </Col>
                                </Form.Row>

                                <Form.Row className={classes.FormRow}>
                                    <Col>
                                        <Form.Label>Gender</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Gender"
                                            value={this.state.gender}
                                            onChange={(event) => this.setState({gender: event.target.value})}
                                        />
                                    </Col>
                                    <Col>
                                        <Form.Label>Avatar</Form.Label>
                                        <Form.Control
                                            type="file"
                                            placeholder="Choose photo"
                                            value={this.state.avatar}
                                            onChange={(event) => this.setState({avatar: event.target.value})}
                                        />
                                    </Col>
                                </Form.Row>

                                <Form.Row className={classes.FormRow}>
                                    <Col>
                                        <Form.Label>Country</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Country"
                                            value={this.state.country}
                                            onChange={(event) => this.setState({country: event.target.value})}
                                        />
                                    </Col>
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

                                <Form.Row className={classes.FormRow}>
                                    <Col>
                                        <Form.Label>Specializations</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="e.g. Carp fishing"
                                            value={this.state.specializations}
                                            onChange={(event) => this.setState({specializations: event.target.value})}
                                        />
                                    </Col>
                                    <Col>
                                        <Form.Label>Organizations</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Organizations"
                                            value={this.state.organizations}
                                            onChange={(event) => this.setState({organizations: event.target.value})}
                                        />
                                    </Col>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Label>Profile description</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows="3"
                                        placeholder="Tell something more about your passion."
                                        value={this.state.description}
                                        onChange={(event) => this.setState({description: event.target.value})}
                                    />
                                </Form.Row>
                            </Form.Group>
                        </Wrapper>

                        <Wrapper>
                            <h5>Communities</h5>
                            <hr/>
                            <Form.Group controlId="Settings.Communities">
                                <Form.Row className={classes.FormRow}>
                                    <Col>
                                        <Form.Label>Facebook</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Facebook"
                                            value={this.state.facebook}
                                            onChange={(event) => this.setState({facebook: event.target.value})}
                                        />
                                    </Col>
                                    <Col>
                                        <Form.Label>Instagram</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Instagram"
                                            value={this.state.instagram}
                                            onChange={(event) => this.setState({instagram: event.target.value})}
                                        />
                                    </Col>
                                </Form.Row>

                                <Form.Row className={classes.FormRow}>
                                    <Col>
                                        <Form.Label>Youtube</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Youtube"
                                            value={this.state.youtube}
                                            onChange={(event) => this.setState({youtube: event.target.value})}
                                        />
                                    </Col>
                                    <Col>
                                        <Form.Label>Website</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Website"
                                            value={this.state.website}
                                            onChange={(event) => this.setState({website: event.target.value})}
                                        />
                                    </Col>
                                </Form.Row>
                            </Form.Group>
                        </Wrapper>

                        <Wrapper>
                            <h5>Fishing equipment</h5>
                            <hr/>
                            <Form.Group controlId="Settings.Communities">
                                <Form.Row className={classes.FormRow}>
                                    <Col>
                                        <Form.Label>Fishing rod #1</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Fishing rod"
                                            value={this.state.fishingRods}
                                            onChange={(event) => this.setState({fishingRods: event.target.value})}
                                        />
                                    </Col>
                                    <Col>
                                        <Form.Label>Fishing reel #1</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Fishing reel"
                                            value={this.state.fishingReels}
                                            onChange={(event) => this.setState({fishingReels: event.target.value})}
                                        />
                                    </Col>
                                </Form.Row>
                            </Form.Group>
                        </Wrapper>
                        <Button
                            className={classes.Button}
                            variant="primary"
                            size="lg"
                            block
                            // onClick={this.createPostHandler}
                        >
                            Update
                        </Button>
                    </Form>
                </Wrapper>
            </div>
        );
    }
}

export default Settings;