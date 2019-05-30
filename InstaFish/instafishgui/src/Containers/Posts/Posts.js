import React, {Component} from 'react';
import axios from '../../axios';
import {Row} from "react-bootstrap";

import Post from "../../Components/Post/Post";
import Spinner from "../../Components/UI/Spinner/Spinner";
import classes from "./Posts.module.css";

class Posts extends Component {
    state = {
        posts: [],
        loading: false
    };

    componentDidMount() {
        this.setState({loading: true});
        axios
            .get('/post', {
                headers: {
                    Authorization: `JWT ${localStorage.getItem('token')}`
                }
            })
            .then(res => {
                const data = res.data.results;
                let posts = [];
                for (let key in data) {
                    posts.push(data[key]);
                }
                this.setState({posts: posts, loading: false});
                // console.log(this.state.posts);
            })
            .catch(error => {
                console.log(error);
            });
    };

    deletePostHandler = (postId) => {
        axios.delete('/post/' + postId, {
            headers: {Authorization: `JWT ${localStorage.getItem('token')}`}
        })
            .then(response => {
                this.setState({
                    posts: this.state.posts.filter(post => post.id !== postId),
                })
            })
            .catch((error) => {
                console.log(error);
            })
    };

    render() {
        let temporaryKey = 0;
        const posts = this.state.posts.map(post => {
            temporaryKey++;
            return (

                <Post
                    deletePostHandler={this.deletePostHandler}
                    user_id={this.props.user_id}
                    key={temporaryKey}
                    postId={post.id}
                    postOwner={post.user}
                    postAuthor={post.first_name + " " + post.last_name}
                    authorAvatar={post.avatar}
                    createdAt={post.created_at}
                    postTitle={post.title}
                    fishName={post.fish_name}
                    fishPhoto={post.fish_photo}
                    fishWeight={post.fish_weight}
                    fishLength={post.fish_length}
                    fishingDate={post.fishing_date}
                    fishingCountry={post.fishing_country}
                    fishingCity={post.fishing_city}
                    fishingSpot={post.fishing_city}
                    fishingReel={post.fishing_reel}
                    fishingLeader={post.fishing_leader}
                    fishingHook={post.fishing_hook}
                    fishingRod={post.fishing_rod}
                    fishingBait={post.fishing_bait}
                    fishingLine={post.fishing_line}
                    description={post.description}
                    postColSize={this.props.postColSize}
                />

            );
        });

        return (
            <Row className={classes.Posts}>
                {this.state.loading ?
                    <Spinner/> : posts}
            </Row>
        );
    }
}

export default Posts;