
import {useEffect,useState} from 'react';
import axios from 'axios';
import DisplayGUI from "./components/DisplayGUI";

const baseURL = "/api/notes";
const App = () => {

    const [contacts,setContacts] = useState([]);
    useEffect(() => {
      console.log(contacts)
      axios.get(baseURL).then(
        (response) => {
            setContacts(response.data);
        }
      )
    },[])

    const updateContacts = (contacts) => {
        setContacts(contacts);
    }
    return(

      <DisplayGUI contacts={contacts} updateContacts={updateContacts}/>
    )
}

export default App;