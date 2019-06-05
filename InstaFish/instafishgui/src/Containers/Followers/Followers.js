import React, {Component} from 'react';
import {Button, Col, Row} from "react-bootstrap";
import Wrapper from "../../Components/UI/Wrapper/Wrapper";
import Image from "react-bootstrap/Image";
import classes from "./Followers.module.css";
import axios from "../../axios";
import Spinner from "../../Components/UI/Spinner/Spinner";
import {Link} from "react-router-dom";

class Followers extends Component {
    state = {
        profile: [],
        userProfile: [],
        loading: true,
        user_id: this.props.user_id
    };

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.user_id !== prevState.user_id) {
            return {user_id: nextProps.user_id};
        } else return null;
    }

    componentDidMount() {
        this.getProfile();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.user_id !== this.props.user_id) {
            this.getProfile();
        }
    }

    getProfile = () => {
        if (this.state.user_id) {
            // console.log(this.state.user_id);
            axios
                .get('/profile/' + this.props.user_id, {
                    headers: {
                        Authorization: `JWT ${localStorage.getItem('token')}`
                    }
                })
                .then(res => {
                    this.setState({userProfile: res.data, loading: false});
                    this.getProfiles();
                })
                .catch(error => {
                });
        }
    };

    getProfiles = () => {
        const followers = this.state.userProfile.follows;
        // console.log(followers);

        for (let i = 0; i < followers.length; i++) {
            axios
                .get('/profile/' + followers[i], {
                    headers: {
                        Authorization: `JWT ${localStorage.getItem('token')}`
                    }
                })
                .then(res => {
                    this.setState({
                        profile: [...this.state.profile, res.data],
                        loading: false
                    });
                    // console.log(this.state.profile);
                })
                .catch(error => {
                });
        }
    };

    handleUnfollow = (id) => {
        axios.delete('/profile/' + this.state.user_id + '/followers', {
            data: {follow: id},
            headers: {Authorization: `JWT ${localStorage.getItem('token')}`}
        })
            .then(response => {
                // this.forceUpdate();
                this.setState({
                    profile: this.state.profile.filter(profile => profile.id !== id),
                    commentsCount: this.state.commentsCount - 1
                });
            })
            .catch((error) => {
                // console.log(error);
            })
    };

    //TODO support other resolution: Specific People
    render() {
        const profile =
            this.state.profile.map((profile) => {
                return (<Wrapper key={profile.id}>
                    <Row className={classes.People}>
                        <Col lg={12}>
                            <Image
                                src={profile.avatar}
                                roundedCircle
                                className="float-left"
                            />
                            <p className="float-left">
                                <Link
                                    to={"/profile/" + profile.id}><strong>{profile.first_name} {profile.last_name}</strong>
                                </Link><br/>
                            </p>
                            <Button className="float-right" onClick={() => this.handleUnfollow(profile.id)}>-
                                Unfollow</Button>
                        </Col>
                    </Row>
                </Wrapper>)
            })

        return (
            <Row>
                <Col lg={{span: 8, offset: 2}}>
                    {this.state.loading ?
                        <div className={classes.Spinner}>
                            <Spinner/>
                        </div> : profile}
                </Col>
            </Row>
        );
    }
}

export default Followers;