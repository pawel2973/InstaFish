import React, {Component} from 'react';
import {Row} from "react-bootstrap";

import Post from "../../Components/Post/Post";

class Posts extends Component {
    render() {
        return (
            <Row>
                <Post/>
                <Post/>
                <Post/>
            </Row>
        );
    }
}

export default Posts;