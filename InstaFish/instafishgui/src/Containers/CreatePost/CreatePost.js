import React, {Component} from 'react';
import Wrapper from "../../Components/UI/Wrapper/Wrapper";

class CreatePost extends Component {
    render() {
        return (
            <div>
                <Wrapper>
                    <h1>Create Post</h1>
                    <Wrapper>
                        <h5>Post name</h5>
                        <hr/>
                    </Wrapper>

                    <Wrapper>
                        <h5>Fish & location</h5>
                        <hr/>
                    </Wrapper>

                    <Wrapper>
                        <h5>Fishing equipment</h5>
                        <hr/>
                    </Wrapper>

                    <Wrapper>
                        <h5>Summary</h5>
                        <hr/>
                    </Wrapper>
                </Wrapper>
            </div>
        );
    }
}

export default CreatePost;