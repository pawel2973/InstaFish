import React, {Component} from 'react';

import Posts from "../Posts/Posts";
import Post from "../../Components/Post/Post";

class Wall extends Component {
    render() {
        return (
            <Posts
                postColSize={"col-lg-8 offset-lg-2"}
            />
        );
    }
}

export default Wall;