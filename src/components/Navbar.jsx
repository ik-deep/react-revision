import React, { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'

const Navbar = () => {

  const {user,logout} = useContext(UserContext);
  const handleLogout = () =>{
        logout();
  }
  return (
    <div>
      <ul>
        <li>
            Home
        </li>
        <li>hey, {user.name}</li>
        <button onClick={handleLogout}>Logout</button>        
       
      </ul>
    </div>
  )
}

export default Navbar
