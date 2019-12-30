import {SET_LOADING,SEARCH_USERS,GET_USERS,CLEAR_USERS,GET_REPOS,SET_ALERT,REMOVE_ALERT } from '../types.js';


export default (sate,action)=>{
    switch(action.type){
         case SET_USERS:
           return {
           	  ...state,
           	  users:action.payload,
           	  loading:false
           }
    	 case SET_LOADING:
    	   return  {
             ...state,
             loading:true
    	   }

    	default:
    	    return state;  
    }
}