import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Wrapper from "../../UI/Wrapper/Wrapper";
import {Button, Col, Form, Row} from "react-bootstrap";
import classes from "./LoginForm.module.css";

class LoginForm extends Component {
    state = {
        username: '',
        password: ''
    };

    handle_change = (e) => {
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
                        <h1>Log in</h1>
                        <hr/>
                        <Form onSubmit={e => this.props.handle_login(e, this.state)}>
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
                                <Form.Row>
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
                                    <Col className={classes.LoginButtonWrapper}>
                                        <Button className="btn-block" type="submit">Login</Button>
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

export default LoginForm;

LoginForm.propTypes = {
    handle_login: PropTypes.func.isRequired
};