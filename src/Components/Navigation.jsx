import React from "react";
import { NavLink } from "react-bootstrap";
// import {Navbar, Container, Nav} from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

export default function Navigation(){
    return(
        <>
            <Navbar bg="primary" data-bs-theme="dark">
                <Container>
                <Navbar.Brand exact href="/">Contact Lists</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link exact href="/">Home</Nav.Link>
                    <Nav.Link exact href="/about">About</Nav.Link>
                    <Nav.Link exact href="/add">Add Contacts</Nav.Link>
                    <Nav.Link exact href="/list">Contact List</Nav.Link>
                    <Nav.Link exact href="/departments">Departments</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        </>
    )
}
