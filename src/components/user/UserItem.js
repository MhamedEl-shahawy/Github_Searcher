import React  from 'react';
import {Link} from "react-router-dom";

export const UserItem =(props) => {
   const {login,avatar_url,html_url}= props.user;
  return (
    <div className="card text-center">
      <img src={avatar_url} className="round-img" alt="img" style={{width:'60px'}}/>
      <h3>{login}</h3>
      <div>
        <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1" >More</Link>
      </div>
    </div>
  );

  }


export default UserItem;
