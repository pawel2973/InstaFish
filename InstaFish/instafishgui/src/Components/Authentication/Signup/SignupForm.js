import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, Col, Form, Row} from "react-bootstrap";
import Wrapper from "../../UI/Wrapper/Wrapper";
import classes from "../Login/LoginForm.module.css";

class SignupForm extends Component {
    state = {
        username: '',
        password: ''
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
                        <Form onSubmit={e => this.props.handle_login(e, this.state)}>
                            <Form.Group controlId="FindPeople.Filter">
                                <Form.Row className={classes.FormRow}>
                                    <Col>
                                        <Form.Label><i className="fas fa-user"></i> Username</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="username"
                                            placeholder="username"
                                            value={this.state.username}
                                            onChange={this.handle_change}
                                        />
                                    </Col>
                                </Form.Row>
                                <Form.Row>
                                    <Col>
                                        <Form.Label><i className="fas fa-key"></i> Password</Form.Label>
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