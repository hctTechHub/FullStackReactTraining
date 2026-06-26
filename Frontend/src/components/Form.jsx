

import {useState,useEffect} from 'react';
import axios from 'axios';
const baseUrl = import.meta.env.VITE_BACKEND_URL;


const initialFormData = {
    name:'',
    phoneNo:'',
    location:''
}


const Form = ({listContacts,updateListContacts,contacts,updateContacts}) => {

    const [formData,setFormData] = useState(initialFormData);
    const [keyWord,setKeyWord] = useState('');

    useEffect(() => {
      const searchResult = contacts.filter((contact) => contact.name.toLowerCase().includes(keyWord.toLowerCase()));
      updateListContacts(searchResult);
    },[keyWord]);

  
    const handleSearch = (e) => {
        setKeyWord(''+e.target.value);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        axios.post(`${baseUrl}/api/addNotes`,formData)
        .then((response) => {
           const newObj = contacts.concat(response.data);
            updateListContacts(newObj);
            updateContacts(newObj);
            setFormData(initialFormData);
        })
        .catch((err) => console.log(err));
       
    }

    const handleInputData = (e) => {
      const {name,value} = e.target;
      setFormData({...formData,[name]:value})
    }

    return(

        <div style={{marginTop:"10px",marginBottom:"20px"}}>
            <div>
                <input type="text" name="search" placeholder="Search By Keyword" onChange={(e) => handleSearch(e)}/> <br/><br/>
            </div>
            <form onSubmit={(e) => handleFormSubmit(e)}>
                <label>Full Name</label>
                <input type="text" name="name" placeholder="Enter Name" value={formData.name} onChange={(e) => handleInputData(e)}/>
                <label>Phone Number</label>
                <input type="number" name="phoneNo" placeholder="Enter Phonenumber"  value={formData.phoneNo} onChange={(e) => handleInputData(e)}/>
                <label>Location</label>
                <input type="text" name="location" placeholder="Enter Location" value={formData.location} onChange={(e) => handleInputData(e)} />
                
                <button type="submit" style={{marginLeft:"5px",background:"brown",color:"#fff",border:"none",padding:"5px"}}> Create Contacts </button>
            </form>
        </div>
    )
}


export default Form;