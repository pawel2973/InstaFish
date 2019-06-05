import React, {Component} from 'react';
import Wrapper from "../../Components/UI/Wrapper/Wrapper";
import {Button, Col, Form} from "react-bootstrap";
import classes from "./Settings.module.css";
import axios from "axios";
import Image from "react-bootstrap/Image";
import {Redirect} from "react-router";

class Settings extends Component {
    state = {
        user_id: this.props.user_id,
        personalInformation: [],
        firstName: '',
        lastName: '',
        birthday: '',
        gender: '',
        avatar: '',
        avatarDisplay: null,
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
        fishingReels: '',
        achievement: ''
    };

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.user_id !== prevState.user_id) {
            return {user_id: nextProps.user_id};
        } else return null;
    }

    componentDidMount() {
        this.getProfileData()
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.user_id !== this.props.user_id) {
            this.getProfileData()
        }
    }

    getProfileData = () => {
        if (this.state.user_id) {
            axios
                .get('/profile/' + this.state.user_id, {
                    headers: {
                        Authorization: `JWT ${localStorage.getItem('token')}`
                    }
                })
                .then(res => {
                    this.setState({
                        firstName: res.data.first_name,
                        lastName: res.data.last_name,
                        birthday: res.data.birthdate,
                        gender: res.data.sex,
                        avatarDisplay: res.data.avatar,
                        country: res.data.country,
                        city: res.data.city,
                        specializations: res.data.specialization,
                        organizations: res.data.organization,
                        facebook: res.data.facebook,
                        instagram: res.data.instagram,
                        youtube: res.data.youtube,
                        website: res.data.website,
                        fishingRods: res.data.fishing_rod,
                        fishingReels: res.data.fishing_reel,
                        profile: res.data,
                        description: res.data.description,
                        achievement: res.data.achievement
                    });
                    // console.log(this.state.profile)
                })
                .catch(error => {
                });

        }
    }

    updateProfileHandler = () => {
        const profile = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            birthdate: this.state.birthday,
            sex: this.state.gender,
            avatar: this.state.avatar,
            country: this.state.country,
            city: this.state.city,
            specialization: this.state.specializations,
            organization: this.state.organizations,
            facebook: this.state.facebook,
            instagram: this.state.instagram,
            youtube: this.state.youtube,
            website: this.state.website,
            fishing_rod: this.state.fishingRods,
            fishing_reel: this.state.fishingReels,
            description: this.state.description,
            achievement:  this.state.achievement

        };
        const formData = new FormData();
        Object.keys(profile).map(item => formData.append(item, profile[item]));
        // console.log(formData);
        const headers = {Authorization: `JWT ${localStorage.getItem('token')}`};
        axios.patch('/profile/' + this.state.user_id, formData, {headers})
            .then(response => {
                if (response.status === 204) {
                    this.setState({isSubmitted: true})
                }
                // console.log(response)
                // console.log(response.data)
            })
            .catch((error) => {
                // console.log("Error");
                // console.log(erorr);
            });
    };

    render() {
        if (this.state.isSubmitted) {
            return <Redirect to={{pathname: "/profile/" + this.props.user_id}}/>;
        }
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
                                        <Form.Label>First name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="First name"
                                            value={this.state.firstName}
                                            onChange={(event) => this.setState({firstName: event.target.value})}
                                        />
                                    </Col>
                                    <Col>
                                        <Form.Label>Last name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Last name"
                                            value={this.state.lastName}
                                            onChange={(event) => this.setState({lastName: event.target.value})}
                                        />
                                    </Col>
                                    <Col>
                                        <Form.Label>Birthday</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Date of your birthday"
                                            value={this.state.birthday ? this.state.birthday : ''}
                                            onChange={(event) => this.setState({birthday: event.target.value})}
                                        />
                                    </Col>
                                </Form.Row>

                                <Form.Row className={classes.FormRow}>
                                    <Col>
                                        <Form.Label>Gender</Form.Label>

                                        <Form.Control as="select"
                                                      type="text"
                                                      value={this.state.gender ? this.state.gender : ''}
                                                      onChange={(event) => this.setState({gender: event.target.value})}>
                                            <option>Male</option>
                                            <option>Female</option>
                                        </Form.Control>
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
                                    <Form.Label>Achievements</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows="3"
                                        placeholder="What is your greatest achievements?"
                                        value={this.state.achievement}
                                        onChange={(event) => this.setState({achievement: event.target.value})}
                                    />
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
                            <Form.Group>
                                <h5>Avatar</h5>
                                <hr/>
                                <Form.Row className={classes.FormRow}>
                                    <Col className={classes.ProfileAvatar} lg={12}>
                                        <Form.Label>Change avatar</Form.Label>
                                        <Image
                                            src={this.state.avatarDisplay}
                                            roundedCircle
                                            fluid
                                        />
                                        <div>
                                            <Form.Control
                                                type="file"
                                                onChange={(event) => this.setState({avatar: event.target.files[0]})}
                                            />
                                        </div>
                                    </Col>
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
                                        <Form.Label>Fishing rod</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Fishing rod"
                                            value={this.state.fishingRods}
                                            onChange={(event) => this.setState({fishingRods: event.target.value})}
                                        />
                                    </Col>
                                    <Col>
                                        <Form.Label>Fishing reel</Form.Label>
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
                            onClick={this.updateProfileHandler}
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