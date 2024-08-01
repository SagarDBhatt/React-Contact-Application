import React, { useContext } from "react";
import {Button, Card, button} from 'react-bootstrap';
import { ContactContext } from "../context/ContactContext";
import { useNavigate } from 'react-router-dom';


// export default function ContactCards({conId, fname, lname, email, deleteCallBackFunc}){
    
//     const deleteCallBackFuncChild = () => {
//         alert("Delete button clicked child = " + conId);
//         deleteCallBackFunc(conId);
//     }

//     return(
//         <>
//         <Card style={{ width: '18rem' }}>
//             <Card.Body>
//                 <Card.Title>{email}</Card.Title>
//                 <Card.Text>
//                     {fname}
//                 </Card.Text>
//                 <Card.Text>
//                     {lname}
//                 </Card.Text>
//             </Card.Body>
//         </Card>
//         <button variant="primary" onClick={deleteCallBackFuncChild}>Delete</button>
//         </>
//     );
// }

export default function ContactCards(){
    
    // const deleteCallBackFuncChild = () => {
    //     alert("Delete button clicked child = " + conId);
    //     deleteCallBackFunc(conId);
    // }
    const {contacts, setContacts} = useContext(ContactContext);
    console.log("Contacts - " + JSON.stringify(contacts));

    const deleteContact = (id) => {
        alert("Delete button clicked child = " + id);
        setContacts(contacts.filter((contact) => contact.id !== id));
    }

    const navigate = useNavigate(); 

    const goToContactDetails = (contact, id) => {
        navigate(`/contact/${id}`, {state: {contact}});
    }

    return(
        <>
            {contacts.map( (contact, id) => (
                <>
                    <div key={id}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body onClick={() => goToContactDetails(contact, id)}>
                                <Card.Title>{contact.email}</Card.Title>
                                <Card.Text>
                                    {contact.fname}
                                </Card.Text>
                                <Card.Text>
                                    {contact.lname}
                                </Card.Text>
                        </Card.Body>
                    </Card>
                    <Button onClick={() => deleteContact(id)}>Delete</Button>   
                    </div>
                </>))}


        {/* <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{email}</Card.Title>
                <Card.Text>
                    {fname}
                </Card.Text>
                <Card.Text>
                    {lname}
                </Card.Text>
            </Card.Body>
        </Card>
        <button variant="primary" onClick={deleteCallBackFuncChild}>Delete</button> */}
        </>
    );
}