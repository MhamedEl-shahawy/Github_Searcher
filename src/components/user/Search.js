import React,{useState,Fragment,useContext} from 'react';
import GithubContext from "../../context/github/githubContext"
import AlertContext from "../../context/alert/alertContext"




const Search = () =>{
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

 const [text,setText] = useState("");

  const onChange =(e)=>{
     setText(e.target.value);
  }
  const onSubmit = (e) => {
   e.preventDefault();
   if(text === ""){
    alertContext.setAlert("Please add something...",'light')
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
         githubContext.users.length > 0 && 
         (<button className="btn btn-block btn-light" onClick={githubContext.clearUsers}>Clear</button>)
       }
    </Fragment>
  );


}


export default Search;
