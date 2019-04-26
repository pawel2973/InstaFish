import React, {Component} from 'react';
import {Col, Row} from "react-bootstrap";
import Wrapper from "../../Components/UI/Wrapper/Wrapper";

class FindPeople extends Component {
    render() {
        return (
            <Row>
                <Col lg={3}>
                    <Wrapper>
                        <h5>Filter</h5>
                        <hr />
                    </Wrapper>
                </Col>
                <Col lg={9}>
                    <Wrapper>
                        People #1
                    </Wrapper>
                    <Wrapper>
                        People #2
                    </Wrapper>
                    <Wrapper>
                        People #3
                    </Wrapper>
                </Col>
            </Row>
        );
    }
}

export default FindPeople;