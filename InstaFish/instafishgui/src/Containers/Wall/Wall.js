import React, {Component} from 'react';

import Posts from "../Posts/Posts";

class Wall extends Component {
    render() {
        return (
            <Posts user_id={this.props.user_id}
                postColSize={"col-lg-6 col-md-12 col-sm-12 col-12"}
            />
        );
    }
}

export default Wall;