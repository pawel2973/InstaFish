import React, {Component} from 'react';
import axios from '../../axios';
import {Button, Col, Form} from "react-bootstrap";
import classes from './CreatePost.module.css';
import Wrapper from "../../Components/UI/Wrapper/Wrapper";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import {Redirect} from "react-router-dom";

class CreatePost extends Component {
    state = {
        isSubmitted: false,

        postTitle: '',
        fishName: '',
        fishWeight: '',
        fishLength: '',
        fishPhoto: '',
        fishingDate: '',
        fishingCountry: '',
        fishingCity: '',
        fishingSpot: '',
        fishingReel: '',
        fishingLeader: '',
        fishingHook: '',
        fishingRod: '',
        fishingBait: '',
        fishingLine: '',
        description: ''
    };

    createPostHandler = () => {
        const newPost = {
            user: this.props.user_id,
            title: this.state.postTitle,
            fish_name: this.state.fishName,
            fish_weight: this.state.fishWeight,
            fish_length: this.state.fishLength,
            fish_photo: this.state.fishPhoto,
            fishing_date: this.state.fishingDate,
            fishing_country: this.state.fishingCountry,
            fishing_city: this.state.fishingCity,
            fishing_spot: this.state.fishingSpot,
            fishing_reel: this.state.fishingReel,
            fishing_leader: this.state.fishingLeader,
            fishing_hook: this.state.fishingHook,
            fishing_rod: this.state.fishingRod,
            fishing_bait: this.state.fishingBait,
            fishing_line: this.state.fishingLine,
            description: this.state.description
        };
        const formData = new FormData();
        Object.keys(newPost).map(item => formData.append(item, newPost[item]));

        const headers = {Authorization: `JWT ${localStorage.getItem('token')}`};
        axios.post('/post/', formData, {headers})
            .then(response => {
                if (response.status === 201) {
                    this.setState({isSubmitted: true})
                }
            })
            .catch((error) => {
                // console.log("Error");
                // console.log(erorr);
            });
    };

    render() {
        if (this.state.isSubmitted) {
            return <Redirect to={{pathname: "/wall"}}/>;
        }
        return (

            <Wrapper>
                <h1>Create Post</h1>
                <Form>
                    <Wrapper>
                        <h5>Post name</h5>
                        <Form.Group controlId="CreatePost.Title">
                            <Form.Control
                                type="text"
                                placeholder="Title"
                                value={this.state.postTitle}
                                onChange={(event) => this.setState({postTitle: event.target.value})}
                            />
                        </Form.Group>
                    </Wrapper>

                    <Wrapper>
                        <h5>Fish information</h5>
                        <hr/>
                        <Form.Group controlId="CreatePost.FishInformation">
                            <Form.Row className={classes.FormRow}>
                                <Col>
                                    <Form.Label>Fish name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="e.g. Carp"
                                        value={this.state.fishName}
                                        onChange={(event) => this.setState({fishName: event.target.value})}
                                        required
                                    />
                                </Col>
                            </Form.Row>
                            <Form.Row className={classes.FormRow}>
                                <Col>
                                    <Form.Label>Fish weight</Form.Label>
                                    <Form.Control
                                        type="number"
                                        min={0}
                                        precision={2}
                                        placeholder="weight in kg"
                                        value={this.state.fishWeight}
                                        onChange={(event) => this.setState({fishWeight: event.target.value})}
                                    />
                                </Col>
                                <Col>
                                    <Form.Label>Fish length </Form.Label>
                                    <Form.Control
                                        type="number"
                                        min={0}
                                        precision={2}
                                        placeholder="length in cm"
                                        value={this.state.fishLength}
                                        onChange={(event) => this.setState({fishLength: event.target.value})}
                                    />
                                </Col>
                            </Form.Row>
                            <Form.Row className={classes.FormRow}>
                                <Col>
                                    <Form.Label>Fish photo</Form.Label>
                                    <Form.Control
                                        type="file"
                                        onChange={(event) => this.setState({fishPhoto: event.target.files[0]})}
                                    />
                                </Col>
                            </Form.Row>
                        </Form.Group>
                    </Wrapper>

                    <Wrapper>
                        <h5>Date & location</h5>
                        <hr/>
                        <Form.Group controlId="CreatePost.FishAndLocation">
                            <Form.Row className={classes.FormRow}>
                                <Col>
                                    <Form.Label>Fishing date</Form.Label>
                                    <Form.Control
                                        type="date"
                                        placeholder="Choose date"
                                        value={this.state.fishingDate}
                                        onChange={(event) => this.setState({fishingDate: event.target.value})}
                                    />
                                </Col>
                                <Col>
                                    <Form.Label>Fishing Country</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="e.g. Poland"
                                        value={this.state.fishingCountry}
                                        onChange={(event) => this.setState({fishingCountry: event.target.value})}/>
                                </Col>
                            </Form.Row>
                            <Form.Row className={classes.FormRow}>
                                <Col>
                                    <Form.Label>Fishing city</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="e.g. Krosno"
                                        value={this.state.fishingCity}
                                        onChange={(event) => this.setState({fishingCity: event.target.value})}
                                    />
                                </Col>
                                <Col>
                                    <Form.Label>Fishing spot</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="e.g. Balaton lake or Wisła river"
                                        value={this.state.fishingSpot}
                                        onChange={(event) => this.setState({fishingSpot: event.target.value})}
                                    />
                                </Col>
                            </Form.Row>
                        </Form.Group>
                    </Wrapper>

                    <Wrapper>
                        <h5>Fishing equipment</h5>
                        <hr/>
                        <Form.Group controlId="CreatePost.Equipment">
                            <Form.Row className={classes.FormRow}>
                                <Col>
                                    <Form.Label>Fishing reel</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Fishing reel"
                                        value={this.state.fishingReel}
                                        onChange={(event) => this.setState({fishingReel: event.target.value})}
                                    />
                                </Col>
                                <Col>
                                    <Form.Label>Fishing leader</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="e.g. Chod-Rig"
                                        value={this.state.fishingLeader}
                                        onChange={(event) => this.setState({fishingLeader: event.target.value})}
                                    />
                                </Col>
                            </Form.Row>
                            <Form.Row className={classes.FormRow}>
                                <Col>
                                    <Form.Label>Hook</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="e.g. Korda Delta 5"
                                        value={this.state.fishingHook}
                                        onChange={(event) => this.setState({fishingHook: event.target.value})}
                                    />
                                </Col>
                                <Col>
                                    <Form.Label>Fishing rod</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Fishing rod"
                                        value={this.state.fishingRod}
                                        onChange={(event) => this.setState({fishingRod: event.target.value})}
                                    />
                                </Col>
                            </Form.Row>
                            <Form.Row className={classes.FormRow}>
                                <Col>
                                    <Form.Label>Fishing Bait</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Fishing Bait"
                                        value={this.state.fishingBait}
                                        onChange={(event) => this.setState({fishingBait: event.target.value})}
                                    />
                                </Col>
                                <Col>
                                    <Form.Label>Fishing Line</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Fishing Line"
                                        value={this.state.fishingLine}
                                        onChange={(event) => this.setState({fishingLine: event.target.value})}
                                    />
                                </Col>
                            </Form.Row>
                        </Form.Group>
                    </Wrapper>

                    <Wrapper>
                        <h5>Description</h5>
                        <hr/>
                        <Form.Group controlId="CreatePost.Description">
                            <Form.Label>Tell something more about your fishing trip.</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows="3"
                                value={this.state.description}
                                onChange={(event) => this.setState({description: event.target.value})}
                            />
                        </Form.Group>
                    </Wrapper>
                    <Button
                        className={classes.Button}
                        variant="primary"
                        size="lg"
                        block
                        onClick={this.createPostHandler}>
                        Create post
                    </Button>
                </Form>
            </Wrapper>
        );
    }
}

export default withErrorHandler(CreatePost, axios);