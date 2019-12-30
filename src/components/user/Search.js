import React,{useState,Fragment,useContext} from 'react';
import PropTypes from "prop-types"
import githubContext from "../../context/github/githubContext"




const Search = ({showClear,clearUsers,setAlert}) =>{
  const githubContext = useContext(githubContext);
 const [text,setText] = useState("");

  const onChange =(e)=>{
     setText(e.target.value);
  }
  const onSubmit = (e) => {
   e.preventDefault();
   if(text === ""){
    setAlert("Please add something...",'light')
   }else{
   githubContext.searchUsers(text);
    setText("");
   }
  }
  
  return (
    <Fragment>
       <form className="form" onSubmit={onSubmit}>
         <input type="text" name="text" placeholder="search" value={text}   onChange={onChange}/>
         <input type="submit" value="search" className="btn btn-dark btn-block" />
       </form>
       {
         showClear && 
         <button className="btn btn-block btn-light" onClick={clearUsers}>Clear</button>
       }
    </Fragment>
  );

   
 PropTypes ={
   clearUsers:PropTypes.func.isRequired,
   showClear:PropTypes.func.isRequired,
}
}


export default Search;
