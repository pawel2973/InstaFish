import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, Col, Form, Row} from "react-bootstrap";
import Wrapper from "../../UI/Wrapper/Wrapper";
import classes from "./SigupForm.module.css";

class SignupForm extends Component {
    state = {
        username: '',
        password: '',
        email: '',
        first_name: '',
        last_name: ''
    };

    handle_change = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState(prevState => {
            const newState = {...prevState};
            newState[name] = value;
            return newState;
        });
    };

    render() {
        return (
            <Row>
                <Col xs={12} sm={12} md={{span: 8, offset: 2}} lg={{span: 6, offset: 3}}>
                    <Wrapper>
                        <h1>Sign up</h1>
                        <hr/>
                        <Form onSubmit={e => this.props.handle_signup(e, this.state)}>
                            <Form.Group controlId="FindPeople.Filter">
                                <Form.Row className={classes.FormRow}>
                                    <Col>
                                        <Form.Label><i className="fas fa-user"/> Username</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="username"
                                            placeholder="username"
                                            value={this.state.username}
                                            onChange={this.handle_change}
                                        />
                                    </Col>
                                </Form.Row>
                                <Form.Row className={classes.FormRow}>
                                    <Col>
                                        <Form.Label><i className="fas fa-key"/> Password</Form.Label>
                                        <Form.Control
                                            type="password"
                                            name="password"
                                            placeholder="password"
                                            value={this.state.password}
                                            onChange={this.handle_change}
                                        />
                                    </Col>
                                </Form.Row>
                                <Form.Row className={classes.FormRow}>
                                    <Col>
                                        <Form.Label><i className="fas fa-envelope"/> Email</Form.Label>
                                        <Form.Control
                                            type="email"
                                            name="email"
                                            placeholder="email"
                                            value={this.state.email}
                                            onChange={this.handle_change}
                                        />
                                    </Col>
                                </Form.Row>
                                <Form.Row className={classes.FormRow}>
                                    <Col>
                                        <Form.Label><i className="fas fa-signature"/> First Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="first_name"
                                            placeholder="First Name"
                                            value={this.state.first_name}
                                            onChange={this.handle_change}
                                        />
                                    </Col>
                                </Form.Row>
                                <Form.Row className={classes.FormRow}>
                                    <Col>
                                        <Form.Label><i className="fas fa-signature"/> Last Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="last_name"
                                            placeholder="Last Name"
                                            value={this.state.last_name}
                                            onChange={this.handle_change}
                                        />
                                    </Col>
                                </Form.Row>
                                <Form.Row className={classes.FormRow}>
                                    <Col className={classes.LoginButtonWrapper}>
                                        <Button className="btn-block" type="submit">Sign up</Button>
                                    </Col>
                                </Form.Row>
                            </Form.Group>
                        </Form>
                    </Wrapper>
                </Col>
            </Row>
        );
    }
}

export default SignupForm;

SignupForm.propTypes = {
    handle_signup: PropTypes.func.isRequired
};