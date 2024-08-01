import React from "react";
import { Button } from "react-bootstrap";
import {useLocation, useNavigate} from 'react-router-dom';


export default function ContactDetails() {
   
    const location = useLocation();
    console.log("location.state = " + JSON.stringify(location.state));

    const navigate = useNavigate();
    const goToListOfContacts = () => {
        navigate(`/list`);
    }

    const {contact} = location.state;

    return(
        <>
            <h1>Contact.name = {contact.fname}</h1>
            <Button onClick={() => goToListOfContacts()}>Go to Contact List</Button>
        </>
    )
}