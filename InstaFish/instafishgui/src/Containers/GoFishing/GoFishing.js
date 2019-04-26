import React, {Component} from 'react';
import {Breadcrumb, Nav, Row} from "react-bootstrap";
import Wrapper from "../../Components/UI/Wrapper/Wrapper";
import {NavLink} from "react-router-dom";

class GoFishing extends Component {
    render() {
        return (
            <Wrapper>
                <Breadcrumb>
                    <Breadcrumb.Item
                        active
                        as={NavLink}
                        to="/go-fishing"
                        exact>Create Event
                    </Breadcrumb.Item>
                    <Breadcrumb.Item
                        as={NavLink}
                        to="/go-fishing"
                        exact>Show Events
                    </Breadcrumb.Item>
                </Breadcrumb>

                <h3>Create Event</h3>
                <Wrapper>Event creation...</Wrapper>

                <br /><br />
                <h3>Show Events</h3>
                <Wrapper>Events...</Wrapper>
            </Wrapper>
        );
    }
}

export default GoFishing;