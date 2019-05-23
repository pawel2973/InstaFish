import React, {Component} from 'react';

import Posts from "../Posts/Posts";
import Post from "../../Components/Post/Post";

class Wall extends Component {
    render() {
        return (
            <Posts
                postColSize={"col-lg-6 col-md-12 col-sm-12 col-12"}
            />
        );
    }
}

export default Wall;