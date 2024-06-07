import { useContext, useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Form from './components/Form'
import List from './components/List'
import { UserContext } from './contexts/UserContext'
import Login from './components/Login'
import ClassComponent from './components/ClassComponent'
// import MemoComponent from './components/MemoComponent'
import UseMemoComponent from './components/UseMemoComponent'
import UseReducer from './components/UseReducer'
import Redux from './components/Redux'



function App() {
  const {user} = useContext(UserContext);


  // if(!user){
  //   return <Login/>
  // }
  return (
    <>
     {/* <Navbar/>
     <Form/>
     <List/> */}

     {/* <ClassComponent/> */}
  {/* <MemoComponent/> */}
  {/* <UseMemoComponent/> */}
  {/* <UseReducer/> */}
  <Redux/>
    </>
  )
}

export default App
