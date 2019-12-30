import React ,{useReducer} from "react";
import axios from 'axios';
import githubContext from "./githubContext";
import githubReducer from "./githubReducer";
import {SET_LOADING,SEARCH_USERS,GET_USERS,CLEAR_USERS,GET_REPOS,SET_ALERT,REMOVE_ALERT } from '../types.js';

 const GithubState = props =>{
	 const initialState = {
	 	 users:[],
	 	 user:{},
	 	 repos:[],
	 	 loading:false,
	 }
  const [state,dispath] = useReducer(githubReducer,initialState); 
  // search users
     const searchUsers = async (text)=>{
    setLoading();
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=d5d891460fa2eb86b5e7
        &client_secret=262df3ebed0cdbd350af482511b1bd5685316de6
       `);
    dispath({
       type:SEARCH_USERS,
       payload:res.data.items
    });
    
}
  // get users
  
  // get repos
  
  // clear user
  
  // set laoding
   const setLoading = ()=> dispath({type:SET_LOADING});
  return <githubContext.Provider value={{
     users:state.users,
     user:state.user,
     repos:state.repos,
     loading:state.loading,
     searchUsers

  }}>
          
           {props.children}

         </githubContext.Provider>

}

export default GithubState;