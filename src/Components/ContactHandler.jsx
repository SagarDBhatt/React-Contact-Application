import React, {useState, useEffect, useContext} from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import ContactCards from './ContactCards';
import { Link, BrowserRouter, Route, Routes } from 'react-router-dom';

import { ContactContext } from '../context/ContactContext';


export default function ContactHandler(){ 

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    // const [contacts, setContacts] = useState([]);
    const [contactId, setContactId] = useState(0);

    const {contacts, setContacts} = useContext(ContactContext);

    const handleSubmit = (e) => {
        // e.preventDefault();
        // if(firstName !== "" || lastName !== "" || email !== ""){
        //     console.log("Inside if")
        //     setContacts(prevCont => [...prevCont, {id: contactId, fname: firstName, lname: lastName, email: email}]);
        //     setContactId(contactId + 1);
        //     console.log(contacts);
        // }

        // setFirstName("");
        // setLastName("");
        // setEmail("");

        e.preventDefault();
        console.log("Inside handleSubmit. Contacts from context API - " + contacts);

        setContacts([...contacts, {id: contactId, fname: firstName, lname: lastName, email: email}]);
        setContactId(contactId + 1);

        console.log("Contacts after updating the setCotacts = " + contacts);
        setFirstName("");
        setLastName("");
        setEmail("");
    }

    const deleteCallBack = (id) => {
        alert("Delete button clicked parent = " + id);
        setContacts(contacts.filter( (contact) => contact.id !== id));
    }

    useEffect(() => {console.log("contacts update using useEffect hook -- " + JSON.stringify(contacts))}, [contacts]);

    return(
        <>
            <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} md="4">
                        <Form.Label>First name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="First name"
                            value={firstName}
                            onChange={ (e) => {setFirstName(e.target.value)}}
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Last name"
                        value={lastName}
                        onChange = {(e) => {setLastName(e.target.value)}}
                    />
                    {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Username"
                        aria-describedby="inputGroupPrepend"
                        value={email}
                        required
                        onChange = { (e) => {setEmail(e.target.value)}} 
                        />
                        {/* <Form.Control.Feedback type="invalid">
                        Please choose a valid Email Address.
                        </Form.Control.Feedback> */}
                    </Form.Group>
                </Row>
                <Button type="submit">Submit</Button>
                <Link to="/list"> 
                    <Button>View All Contacts</Button>
                </Link>
            </Form>
            {/* {contacts.map( (contact) => 
                <ContactCards conId={contact.id} fname={contact.fname} lname={contact.lname} email={contact.email} deleteCallBackFunc={deleteCallBack} />)} */}
        </>
    );
}