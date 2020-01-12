import {SET_LOADING,SEARCH_USERS,GET_USERS,CLEAR_USERS,GET_REPOS,SET_ALERT,REMOVE_ALERT } from '../types.js';


export default (state,action)=>{
    switch(action.type){
        
    	 case SET_LOADING:
    	   return  {
             ...state,
             loading:true
    	   };
      case GET_USERS:
        return {
          ...state,
          user:action.payload,
          loading:false
        };
          case GET_REPOS:
        return {
          ...state,
          user:action.payload,
          loading:false
        };
      case CLEAR_USERS:
       return{
         ...state,
         users:[],
         loading:false
       };
    	default:
    	    return state;  
    }
}