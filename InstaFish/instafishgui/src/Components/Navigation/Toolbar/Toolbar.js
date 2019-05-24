import React from 'react';
import {NavLink, Link} from "react-router-dom";
import {Badge, Nav, Navbar} from "react-bootstrap";

const Toolbar = (props) => {

    const logged_out_nav = (
        <>
            <Nav.Link as={NavLink}
                      to="/login"

                      activeStyle={{color: 'white'}}>Login
            </Nav.Link>
            <Nav.Link as={NavLink}
                      to="/signup"

                      activeStyle={{color: 'white'}}>Sign-up
            </Nav.Link>
        </>
    );

    const logged_in_nav = (
        <>
            <Nav.Link style={{color: 'white'}}>{props.username}
            </Nav.Link>
            <Nav.Link>
                <i className="fas fa-bell"/> <Badge variant="light">9</Badge>
                <span className="sr-only">unread messages</span>
            </Nav.Link>
            <Nav.Link as={NavLink}
                      to="/profile-settings"
                      exact
                      activeStyle={{color: 'white'}}><i className="fas fa-user-cog"/>
            </Nav.Link>
            <Nav.Link to="/login" onClick={props.handle_logout}>
                <i className="fas fa-sign-out-alt"/>
            </Nav.Link>
        </>
    );
    return (
        <Navbar collapseOnSelect expand="md" bg="primary" variant="dark">
            <Navbar.Brand as={Link}
                          to="/"
                          exact="True">InstaFish</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">

                    <Nav.Link as={NavLink}
                              to="/"
                              exact
                              activeStyle={{color: 'white'}}>
                        Profile
                    </Nav.Link>

                    <Nav.Link as={NavLink}
                              to="/wall"
                              exact
                              activeStyle={{color: 'white'}}>Wall</Nav.Link>

                    <Nav.Link as={NavLink}
                              to="/create-post"
                              exact
                              activeStyle={{color: 'white'}}>Crete Post
                    </Nav.Link>

                    <Nav.Link as={NavLink}
                              to="/go-fishing"
                              exact
                              activeStyle={{color: 'white'}}>Go Fishing</Nav.Link>
                    <Nav.Link as={NavLink}
                              to="/find-people"
                              exact
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