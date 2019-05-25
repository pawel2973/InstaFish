import React, {Fragment} from 'react';
import {NavLink, Link} from "react-router-dom";
import {Badge, Nav, Navbar} from "react-bootstrap";

const Toolbar = (props) => {

    const logged_out_nav = (
        <Fragment>
            <Nav.Link as={NavLink}
                      to="/login"
                      exact={true}
                      activeStyle={{color: 'white'}}>Login
            </Nav.Link>
            <Nav.Link as={NavLink}
                      to="/signup"
                      exact={true}
                      activeStyle={{color: 'white'}}>Sign-up
            </Nav.Link>
        </Fragment>
    );

    const logged_in_nav = (
        <Fragment>
            <Nav.Link

                style={{color: 'white'}}>{props.username}
            </Nav.Link>
            <Nav.Link>
                <i className="fas fa-bell"/> <Badge variant="light">9</Badge>
                <span className="sr-only">unread messages</span>
            </Nav.Link>
            <Nav.Link as={NavLink}
                      to="/profile-settings"
                      exact={true}
                      activeStyle={{color: 'white'}}><i className="fas fa-user-cog"/>
            </Nav.Link>
            <Nav.Link to="/login" onClick={props.handle_logout}>
                <i className="fas fa-sign-out-alt"/>
            </Nav.Link>
        </Fragment>
    );
    return (
        <Navbar collapseOnSelect expand="md" bg="primary" variant="dark">
            <Navbar.Brand as={Link}
                          to="/"
                          >InstaFish</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={NavLink}
                              to="/"
                              exact={true}
                              activeStyle={{color: 'white'}}>Profile</Nav.Link>

                    <Nav.Link as={NavLink}
                              to="/wall"
                              exact={true}
                              activeStyle={{color: 'white'}}>Wall</Nav.Link>

                    <Nav.Link as={NavLink}
                              to="/create-post"
                              exact={true}
                              activeStyle={{color: 'white'}}>Crete Post</Nav.Link>

                    <Nav.Link as={NavLink}
                              to="/go-fishing"
                              exact={true}
                              activeStyle={{color: 'white'}}>Go Fishing</Nav.Link>

                    <Nav.Link as={NavLink}
                              to="/find-people"
                              exact={true}
                              activeStyle={{color: 'white'}}>Find People</Nav.Link>
                </Nav>
                <Nav>
                    {props.logged_in ? logged_in_nav : logged_out_nav}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Toolbar;

//TODO: verify routers