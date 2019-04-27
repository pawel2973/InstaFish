import React, {Component} from 'react';
import {Breadcrumb} from "react-bootstrap";
import Wrapper from "../../Components/UI/Wrapper/Wrapper";

class GoFishing extends Component {
    render() {
        return (
            <Wrapper>
                <Breadcrumb>
                    <Breadcrumb.Item active>
                        Create Event
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        Show Events
                    </Breadcrumb.Item>
                </Breadcrumb>

                <h3>Create Event</h3>
                <Wrapper>Event creation...</Wrapper>

                <br/><br/>
                <h3>Show Events</h3>
                <Wrapper>Events...</Wrapper>
            </Wrapper>
        );
    }
}

export default GoFishing;