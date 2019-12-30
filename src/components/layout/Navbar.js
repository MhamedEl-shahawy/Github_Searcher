import React,{Component}  from 'react';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";


export class Navbar extends Component{
	static defualtProps={
		 title:"Github Finder",
		 icons:"fab fa-github"
	};  
	static propTypes ={
		title: PropTypes.string.isRequired,
		icons: PropTypes.string.isRequired
	};
  render(){

  return (
    <div className="navbar bg-primary">
       <h1>
       <i className={this.props.icons}></i> {this.props.title}
       </h1>
       <ul>
         <li>
           <Link to="/">Home</Link> 
         </li> 
         <li>
           <Link to="/about">About</Link>
         </li>
       </ul>
    </div>
  );

  }
}

export default Navbar;
