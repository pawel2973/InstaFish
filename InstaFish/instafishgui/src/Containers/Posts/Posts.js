import React, {Component} from 'react';
import axios from '../../axios';
import {Row} from "react-bootstrap";

import Post from "../../Components/Post/Post";

class Posts extends Component {
    state = {
        posts: []
    };

    componentDidMount() {
        axios.get('/Post.json')
            .then(res => {
                const data = res.data;

                let posts = [];
                for (let key in data) {
                    posts.push(data[key]);
                }
                this.setState({posts: posts});
                console.log(this.state.posts);
            })
            .catch(error => {
                console.log(error);
            });
    };

    render() {
        console.log(this.state.posts);
        let temporaryKey = 0;
        const posts = this.state.posts.map(post => {
            temporaryKey++;
            return (
                <Post
                    key={temporaryKey}
                    postAuthor="Jan Kowalski"
                    postTitle={post.postTitle}
                    fishName={post.fishName}
                    fishWeight={post.fishWeight}
                    fishLength={post.fishLength}
                    fishPhoto={post.fishPhoto}
                    fishingDate={post.fishingDate}
                    fishingCountry={post.fishingCountry}
                    fishingCity={post.fishingCity}
                    fishingSpot={post.fishingSpot}
                    fishingReel={post.fishingReel}
                    fishingLeader={post.fishingLeader}
                    fishingHook={post.fishingHook}
                    fishingRod={post.fishingRod}
                    fishingBait={post.fishingBait}
                    fishingLine={post.fishingLine}
                    description={post.description}
                />
            );
        });

        return (
            <Row>
                {posts}
            </Row>
        );
    }
}

export default Posts;