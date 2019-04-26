import React, {Component, Fragment} from 'react';
import {Col, Row} from "react-bootstrap";
import Wrapper from "../../Components/UI/Wrapper/Wrapper";

class Profile extends Component {
    render() {
        return (
            <Fragment>
                <Row>
                    <Col>
                        <Wrapper>Profile Information</Wrapper>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Wrapper>Hall of Fame</Wrapper>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Wrapper>Posts</Wrapper>
                    </Col>
                </Row>
            </Fragment>
        );
    }
}

export default Profile;