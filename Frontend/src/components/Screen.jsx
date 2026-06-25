

import {useState,useEffect} from 'react';


const Screen = () => {

    const [screenTime,setScreenTime] = useState({
        hour:null,
        min:null,
        secs:null,
        amPm:null,
        dayOfWeek:"",
        day:"",
        month:""
    });

    useEffect(() => {
        const systemDateTime = new Date();
        let hour = null;
        let min = null;
        let secs = null;
        let amPm = null;
        let dayOfWeek = "";
        let day = "";
        let month = "";
        setTimeout(() => {
             dayOfWeek = systemDateTime.toLocaleDateString('en-US',{'weekday':'short'});
             month = systemDateTime.toLocaleDateString('en-US',{'month':'short'});
             day = systemDateTime.getDate();
             hour = systemDateTime.getHours();
             min = String(systemDateTime.getMinutes()).padStart(2,'0');
             secs = systemDateTime.getSeconds();
             amPm = hour > 12 ? 'PM' : 'AM';
             const newObj = {...screenTime,dayOfWeek:dayOfWeek,month:month,day:day,hour:hour,min:min,secs:secs,amPm:amPm}
             setScreenTime(newObj)
        },1000);
        
    },[screenTime])

    return(
        <div className="screen">
                <div style={{marginTop:"40px",textAlign:"center",fontSize:"70px",fontWeight:"bold"}}> {screenTime.hour}:{screenTime.min} <span style={{fontSize:"30px"}}>{screenTime.amPm}</span> </div>
                <div style={{textAlign:"center",marginTop:"10px"}}>{screenTime.dayOfWeek}, {screenTime.month} {screenTime.day}</div>
        </div>
    )
}


export default Screen;