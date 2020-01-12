import React ,{useReducer} from "react";
import alertContext from "./alertContext";
import alertReducer from "./alertReducer";
import {SET_ALERT,REMOVE_ALERT } from '../types.js';

 const AlertState = props =>{
	 const initialState =null;
  const [state,dispath] = useReducer(alertReducer,initialState); 
   


// set Alert
const setAlert = (msg,type)=>{
       dispath({
       type:SET_ALERT,
       payload:{msg,type}
    });
   setTimeout(()=> dispath({type:REMOVE_ALERT}),5000);
}

  return <alertContext.Provider value={{
     alert:state,
     setAlert
  }}>
          
           {props.children}

         </alertContext.Provider>

}

export default AlertState;