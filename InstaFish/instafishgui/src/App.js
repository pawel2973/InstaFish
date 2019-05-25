import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";

import Layout from './hoc/Layout/Layout';
import Profile from "./Containers/Profile/Profile";
import Wall from "./Containers/Wall/Wall";
import CreatePost from "./Containers/CreatePost/CreatePost"
import GoFishing from "./Containers/GoFishing/GoFishing";
import FindPeople from "./Containers/FindPeople/FindPeople";
import Settings from "./Containers/Settings/Settings";
import LoginForm from "./Components/Authentication/Login/LoginForm";
import SignupForm from "./Components/Authentication/Signup/SignupForm";


class App extends Component {
    state = {
        logged_in: !!localStorage.getItem('token'),
        username: '',
        user_id: null
    };

    componentDidMount() {
        if (this.state.logged_in) {
            fetch('http://localhost:8000/current_user/', {
                headers: {
                    Authorization: `JWT ${localStorage.getItem('token')}`
                }
            })
                .then(res => res.json())
                .then(json => {
                    this.setState({
                        username: json.username,
                        user_id: json.id
                    });
                });
        }
    }

    handle_login = (e, data) => {
        e.preventDefault();
        fetch('http://localhost:8000/token-auth/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(json => {
                localStorage.setItem('token', json.token);
                this.setState({
                    logged_in: true,
                    username: json.user.username,
                    user_id: json.user.id
                });
            });
    };

    handle_signup = (e, data) => {
        e.preventDefault();
        fetch('http://localhost:8000/users/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(json => {
                localStorage.setItem('token', json.token);
                this.setState({
                    logged_in: true,
                    username: json.user.username,
                    user_id: json.user.id
                });
            });
    };

    handle_logout = () => {
        localStorage.removeItem('token');
        this.setState({logged_in: false, username: '', user_id: null});
    };


    render() {
        return (
            <BrowserRouter>
                <Layout
                    logged_in={this.state.logged_in}
                    username={this.state.username}
                    user_id={this.state.user_id}
                    handle_logout={this.handle_logout}>
                    <Switch>
                        <Route path="/" exact component={Profile}/>
                        <Route path="/wall" component={Wall}/>
                        <Route path="/create-post"
                               render={(props) => <CreatePost {...props} user_id={this.state.user_id}/>}
                        />
                        <Route path="/go-fishing" component={GoFishing}/>
                        <Route path="/find-people" component={FindPeople}/>
                        <Route path="/profile-settings" component={Settings}/>
                        <Route path="/login"
                               render={(props) => <LoginForm {...props} handle_login={this.handle_login}/>}
                        />
                        <Route path="/signup"
                               render={(props) => <SignupForm {...props} handle_signup={this.handle_signup}/>}
                        />
                    </Switch>
                </Layout>
            </BrowserRouter>
        );
    }
}

export default App;
