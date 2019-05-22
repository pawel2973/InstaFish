import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Wrapper from "../../UI/Wrapper/Wrapper";

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
        console.log(this.state);
    };

    render() {
        return (
            <Wrapper>
            <form onSubmit={e => this.props.handle_login(e, this.state)}>
                <h4>Log In</h4>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    name="username"
                    value={this.state.username}
                    onChange={this.handle_change}
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handle_change}
                />
                <input type="submit"/>
            </form>
            </Wrapper>
        );
    }
}

export default LoginForm;

LoginForm.propTypes = {
    handle_login: PropTypes.func.isRequired
};