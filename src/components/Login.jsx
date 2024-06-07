import React, { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'

const Login = () => {

    const {login}=useContext(UserContext);

const handleLogin = () =>{
      login();
}

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login
