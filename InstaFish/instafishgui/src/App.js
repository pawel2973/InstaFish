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
import axios from 'axios';

import withErrorHandler from "./hoc/withErrorHandler/withErrorHandler";
import PrivateRoute from "./hoc/PrivateRoute/PrivateRoute";
import PublicRoute from "./hoc/PublicRoute/PublicRoute";
import Followers from "./Containers/Followers/Followers";


class App extends Component {
    state = {
        logged_in: !!localStorage.getItem('token'),
        username: '',
        user_id: null
    };


    componentDidMount() {
        if (this.state.logged_in) {
            axios.get('/current_user/', {
                headers: {
                    Authorization: `JWT ${localStorage.getItem('token')}`
                }
            })
                .then(response => {
                    if (response.data.id) {
                        this.setState({
                            username: response.data.username,
                            user_id: response.data.id
                        });

                    } else {
                        localStorage.removeItem('token');
                        this.setState({
                            logged_in: false,
                            username: '',
                            user_id: null
                        });
                    }

                }).catch(error => {
                // console.log(error);
            })
        }
    }

    handle_login = (e, data) => {
        e.preventDefault();
        const headers = {
            'Content-Type': 'application/json'
        };
        axios.post('/token-auth/', data, headers)
            .then(response => {
                // console.log("Ustawiam tokena");
                localStorage.setItem('token', response.data.token);
                this.setState({
                    logged_in: true,
                    username: response.data.user.username,
                    user_id: response.data.user.id
                });
            })
            .catch(error => {
            })
        ;
    };

    handle_signup = (e, data) => {
        e.preventDefault();
        const headers = {
            'Content-Type': 'application/json'
        };
        axios.post('/users/', data, headers)
            .then(response => {
                localStorage.setItem('token', response.data.token);
                this.setState({
                    logged_in: true,
                    username: response.data.username,
                    user_id: response.data.id
                });
            })
            .catch(error => {
            });

    };

    handle_logout = () => {
        localStorage.removeItem('token');
        this.setState({
            logged_in: false,
            username: '',
            user_id: null
        });
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
                        <PrivateRoute exact path="/"
                                      component={Profile}
                                      logged_in={this.state.logged_in}
                                      user_id={this.state.user_id}/>
                        <PrivateRoute exact path="/profile/:profileId"
                                      component={Profile}
                                      logged_in={this.state.logged_in}
                                      user_id={this.state.user_id}/>
                        <PrivateRoute path="/wall"
                                      component={Wall}
                                      logged_in={this.state.logged_in}
                                      user_id={this.state.user_id}/>
                        <PrivateRoute path="/create-post"
                                      component={CreatePost}
                                      logged_in={this.state.logged_in}
                                      user_id={this.state.user_id}/>
                        <PrivateRoute path="/go-fishing"
                                      component={GoFishing}
                                      logged_in={this.state.logged_in}
                                      user_id={this.state.user_id}/>
                        <PrivateRoute path="/find-people"
                                      component={FindPeople}
                                      logged_in={this.state.logged_in}
                                      user_id={this.state.user_id}/>
                        <PrivateRoute path="/followers"
                                      component={Followers}
                                      logged_in={this.state.logged_in}
                                      user_id={this.state.user_id}/>
                        <PrivateRoute path="/profile-settings"
                                      component={Settings}
                                      logged_in={this.state.logged_in}
                                      user_id={this.state.user_id}/>
                        <PublicRoute path="/login"
                                     component={LoginForm}
                                     logged_in={this.state.logged_in}
                                     handle_login={this.handle_login}/>
                        <PublicRoute path="/signup"
                                     component={SignupForm}
                                     logged_in={this.state.logged_in}
                                     handle_signup={this.handle_signup}/>
                        {/*  404 */}
                        <Route path="/"
                               render={(props) => <>404 ryby nie znaleziono</>}
                        />
                    </Switch>
                </Layout>
            </BrowserRouter>
        );
    }
}

export default withErrorHandler(App, axios);
