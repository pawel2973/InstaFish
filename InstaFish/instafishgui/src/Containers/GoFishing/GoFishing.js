import React, {Component} from 'react';
import {Col, Form, Image, Row, Tab, Tabs} from "react-bootstrap";
import Wrapper from "../../Components/UI/Wrapper/Wrapper";
import classes from "./GoFishing.module.css";
import Button from "react-bootstrap/Button";
import axios from "../../axios";
import Spinner from "../Posts/Posts";

class GoFishing extends Component {

    state = {
        events: [],
        loading: true,
        name: '',
        date: '',
        description: '',
        localization: ''
    }

    componentDidMount() {
        this.loadEvents()
    }

    loadEvents = () => {

        this.setState({loading: true});
        axios
            .get('/event', {
                headers: {
                    Authorization: `JWT ${localStorage.getItem('token')}`
                }
            })
            .then(res => {
                this.setState({
                    events: res.data.results,
                    next_posts: res.data.next,
                    loading: false
                });
            })
            .catch(error => {
            });

    }
    postEvent = () => {
        const new_event = {
            name: this.state.name,
            date: this.state.date,
            description: this.state.description,
            localization: this.state.localization,
            creator: this.props.user_id
        }

        const headers = {Authorization: `JWT ${localStorage.getItem('token')}`};
        axios.post('/event/', new_event, headers)
            .then(response => {
                if (response.status === 201) {
                    this.setState({events: [...this.state.events, new_event]})
                }
            })
            .catch((error) => {
            });

    }

    render() {
        const events = <>{this.state.events ? <Wrapper>
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
                                            value={this.state.name}
                                            onChange={(event) => this.setState({name: event.target.value})}
                                        />
                                    </Col>
                                    <Col>
                                        <Form.Label>Fishing date</Form.Label>
                                        <Form.Control
                                            type="datetime-local"
                                            placeholder="Fishing date"
                                            value={this.state.date}
                                            onChange={(event) => this.setState({date: event.target.value})}
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
                                            value={this.state.description}
                                            onChange={(event) => this.setState({description: event.target.value})}
                                        />
                                    </Col>
                                </Form.Row>
                                <Form.Row className={classes.FormRow}>
                                    <Col>
                                        <Form.Label>Localization</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="e.g. Poland, Besko Lake"
                                            value={this.state.localization}
                                            onChange={(event) => this.setState({localization: event.target.value})}/>
                                    </Col>

                                </Form.Row>

                                <Form.Row className={classes.BtnContainer}>
                                    <Button onClick={this.postEvent}>
                                        Create event
                                    </Button>
                                </Form.Row>
                            </Form.Group>
                        </Form>
                    </Wrapper>
                </Tab>

                <Tab eventKey="show" title="Show events" className={classes.Tab}>
                    {this.state.events.map(event =>
                        <Wrapper key={event.id}>
                            <Row>
                                <Col lg={9} sm={12} xs={12}>
                                    <div className={classes.EventBasic}>
                                        <header>{event.name}</header>
                                        <p className="text-justify">
                                            {event.description}
                                        </p>
                                    </div>
                                    <div className={classes.EventTeam}>
                                        {/*<header>Fishing team</header>*/}
                                        {/*<div className={classes.EventTeam__teammates}>*/}
                                        {/*<div className={classes.EventTeam__teammate}>*/}
                                        {/*<Image*/}
                                        {/*src="https://cdn.pixabay.com/photo/2016/03/21/05/05/plus-1270001_960_720.png"*/}
                                        {/*roundedCircle/>*/}
                                        {/*<a href="/">Jan Kowalski</a>*/}
                                        {/*</div>*/}
                                        {/*<div className={classes.EventTeam__teammate}>*/}
                                        {/*<Image*/}
                                        {/*src="https://cdn.pixabay.com/photo/2016/03/21/05/05/plus-1270001_960_720.png"*/}
                                        {/*roundedCircle/>*/}
                                        {/*<a href="/">Jan Kowalski</a>*/}
                                        {/*</div>*/}
                                        {/*<div className={classes.EventTeam__teammate}>*/}
                                        {/*<Image*/}
                                        {/*src="https://cdn.pixabay.com/photo/2016/03/21/05/05/plus-1270001_960_720.png"*/}
                                        {/*roundedCircle/>*/}
                                        {/*<a href="/">Jan Kowalski</a>*/}
                                        {/*</div>*/}
                                        {/*<div className={classes.EventTeam__teammate}>*/}
                                        {/*<Image*/}
                                        {/*src="https://cdn.pixabay.com/photo/2016/03/21/05/05/plus-1270001_960_720.png"*/}
                                        {/*roundedCircle/>*/}
                                        {/*<a href="/">Jan Kowalski</a>*/}
                                        {/*</div>*/}
                                        {/*</div>*/}
                                    </div>
                                </Col>

                                <Col>
                                    <div className={classes.EventDetails}>
                                        <span className={classes.Date}>{event.date}</span>
                                        <span className={classes.LocalizationHeader}>Localization</span>
                                        <hr className={classes.Hr}/>
                                        <span className={classes.Localization}>{event.localization}</span>
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
                                    src={event.creator_avatar}
                                    roundedCircle/>
                                <a href={"/profile/" + event.creator}>{event.creator_first_name + " " + event.creator_last_name}</a>
                            </div>
                        </Wrapper>)}
                </Tab>
            </Tabs>
        </Wrapper> : null}</>

        return (<>
                {this.state.loading ?
                    <Spinner/> : events}</>
        );
    }
}

export default GoFishing;