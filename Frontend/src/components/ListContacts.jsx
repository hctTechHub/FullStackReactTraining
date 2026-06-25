
import {useState,useEffect} from 'react';
import Form from './Form';
import ListTable from './ListTable';
const ListContacts = ({contacts,setContacts}) => {
  //console.log(contacts);
  const [listContacts,setListContacts] = useState([]);
  useEffect(() => {
    console.log(listContacts)
    setListContacts(contacts);
    console.log(listContacts);
  },[contacts]);

  const updateListContacts = (contacts) => {
    setListContacts(contacts)
  }
    return(
        <div>

               <div className="action">
                    <div className="totalContacts"><p>All Contacts ({listContacts.length}) </p></div>
                    <div className="addContact"><p>Create New Contact</p></div>
                  
                </div>  
                <Form listContacts={listContacts} updateListContacts={updateListContacts} contacts={contacts} updateContacts={setContacts}/>
                <ListTable listContacts={listContacts} />
        </div>
    )
}

export default ListContacts;