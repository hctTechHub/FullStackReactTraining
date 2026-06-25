
//Screen 
//show select contact list
//show form to add new contact
//edit, delete contact from list
//Display contacts based on time added
//search for contacts

import {useState} from 'react';
import ListContacts from './ListContacts';
import Screen from "./Screen";


const DisplayGUI = ({contacts,updateContacts}) => {
    return(
       <div className="appContainer">
            <Screen />
            <ListContacts contacts={contacts} setContacts={updateContacts} />
       </div>

    )
}

export default DisplayGUI;