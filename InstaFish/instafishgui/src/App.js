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
                console.log(error);
            })


            // }
            //     fetch('http://localhost:8000/current_user/', {
            //         headers: {
            //             Authorization: `JWT ${localStorage.getItem('token')}`
            //         }
            //     })
            //         .then(res => res.json())
            //         .then(json => {
            //             console.log(json)
            //             this.setState({
            //                 username: json.username,
            //                 user_id: json.id
            //             });
            //         }).catch(error => console.log(error));
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
                // console.log(error)
                // TODO: jakis komunikat / obsluga bledu dla zlych danych logowania? axios interceptery
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
                // console.log(error)
                // TODO: jakis komunikat / obsluga bledu dla zlych danych przy rejestracji ?
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
                        <Route exact path="/" render={(props) => <Profile {...props} user_id={this.state.user_id}/>}
                        />
                        <Route path="/wall" render={(props) => <Wall {...props} user_id={this.state.user_id}/>}
                        />
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

export default withErrorHandler(App, axios);
