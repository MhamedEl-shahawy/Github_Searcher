import React,{Fragment} from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Navbar from "./components/layout/Navbar.js";
import Alert from "./components/layout/Alert.js";
import Users from "./components/user/Users";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import GithubState from "./context/github/GithubState"
import alertState from "./context/alert/alertState"
import './App.css';

const App = ()=>{


  return (
    <GithubState>
     <alertState>
    <Router>
    <div className="App">
       <Navbar  title="Github Finder" icons="fab fa-github"/>
       <Alert />
       <Switch>
         <Route exact path="/" component={Home} />
          <Route exact path="/about" component = {About} />
          <Route exact path="/user/:login" component={Users}    />
          <Route  component={NotFound}    />

            )} />
       </Switch>
    </div>
    </Router>
    </alertState>
  </GithubState>
  );

  }


export default App;