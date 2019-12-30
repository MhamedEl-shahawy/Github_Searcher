import React,{Component,Fragment,useState} from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Navbar from "./components/layout/Navbar.js";
import axios from "axios";
import Alert from "./components/layout/Alert.js";
import User from "./components/user/User";
import Users from "./components/user/Users";
import Search from "./components/user/Search";
import About from "./components/pages/About";
import GithubState from "./context/github/GithubState"




import './App.css';

const App = ()=>{
  const {users,setUsers}=useState([]);
  const {user,setUser}=useState({});
  const {repos,setRepos}=useState([]);
  const {loading,setLoading}=useState(false);
  const {alert,setAlert}=useState(null);



 
// get github user
const getUser = async (username) => {
    setLoading(true);
    const res = await axios.get(`https://api.github.com/users/${username}?client_id=d5d891460fa2eb86b5e7
        &client_secret=262df3ebed0cdbd350af482511b1bd5685316de6
       `);
       setUser(res.data);
    setLoading(false);
}
//get Users Repos
const getUserRepos = async (username) => {
     setLoading(true);
    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=10&sort=created:asc&client_id=d5d891460fa2eb86b5e7
        &client_secret=262df3ebed0cdbd350af482511b1bd5685316de6
       `);
    setRepos(res.data);
    setLoading(false);
}
// clear users 
const clearUsers = () =>{
      setUsers([]);
    setLoading(false);
};
// set Alert
const setalert = (msg,type)=>{
   setAlert({msg,type});
   setTimeout(()=> setAlert(null),5000);
}

  return (
    <GithubState>
    <Router>
    <div className="App">
       <Navbar  title="Github Finder" icons="fab fa-github"/>
       <Alert alert={alert} />
       <Switch>
         <Route exact path="/" render={ props => (
          <Fragment>
           <div className="container">
           <Search   clearUsers={clearUsers} setAlert={setalert} showClear={users.length > 0 ? true : false}/>
           <User loading={loading} users={users} /> 
           </div>

           </Fragment>
           )}/>
          <Route exact path="/about" component = {About} />
          <Route exact path="/user/:login" render={props =>(
              <Users {...props} getUser={getUser}  repos={repos} getUserRepos={getUserRepos}  user={user} loading={loading} />
            )} />
       </Switch>
    </div>
    </Router>
  </GithubState>
  );

  }


export default App;
