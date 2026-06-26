
import {useEffect,useState} from 'react';
import axios from 'axios';
import DisplayGUI from "./components/DisplayGUI";

const baseURL = import.meta.env.VITE_BACKEND_URL;
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