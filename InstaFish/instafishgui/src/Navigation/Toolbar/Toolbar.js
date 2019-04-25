import React from 'react';
import {Badge, Button, Form, FormControl, Nav, Navbar, NavDropdown} from "react-bootstrap";

const Toolbar = (props) => {
    return (
        <Navbar collapseOnSelect expand="md" bg="primary" variant="dark">
            <Navbar.Brand href="#home">InstaFish</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#features">Profile</Nav.Link>
                    <Nav.Link href="#wall">Wall</Nav.Link>
                    <Nav.Link href="#create">Crete Post</Nav.Link>
                    <Nav.Link href="#go">Go Fishing</Nav.Link>
                    <Nav.Link href="#find">Find People</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link visible="lg">
                        <i className="fas fa-bell"></i> <Badge variant="light">9</Badge>
                        <span className="sr-only">unread messages</span>
                    </Nav.Link>
                    <Nav.Link href="#settings"><i className="fas fa-user-cog"></i></Nav.Link>
                    <Nav.Link href="#login"><i className="fas fa-sign-out-alt"></i></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Toolbar;