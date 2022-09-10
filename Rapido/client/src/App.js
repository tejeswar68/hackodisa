import React from 'react'
import Nav from './Nav'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
  Navigate
} from "react-router-dom";
import Login from "./Customer/Login"
import Register from './Customer/Register';
import Logind from './Driver/Logind';
import Registerd from './Driver/Registerd';
import Chome from "./Customer/Chome"
import Profile from './Customer/Profile';
import Pending from './Customer/Pending';
import Dhome from './Driver/Dhome';
import Dprofile from './Driver/Dprofile';
import Dcompleted from './Driver/Dcompleted';
import Ccomple from './Customer/Ccomple';
const App = () => {
  return (
    <Router>
      <Routes>
       
        <Route path='/clogin' element={<Login></Login>}></Route>
        <Route path='/' element={<Register></Register>}></Route>
        <Route path='/dlogin' element={<Logind></Logind>}></Route>
        <Route path='/dreg' element={<Registerd></Registerd>}></Route>
        <Route path='/profile' element={<Protected><Profile></Profile></Protected>}></Route>
        <Route path='/chome' element={<Protected><Chome></Chome></Protected>}></Route>
        <Route path='/today' element={<Protected><Dhome></Dhome></Protected>}></Route>
        <Route path='/dprofile' element={<Protected><Dprofile></Dprofile></Protected>}></Route>
        <Route path='/pending' element={<Protected><Pending></Pending></Protected>}></Route>
        <Route path='/myrides' element={<Protected><Dcompleted></Dcompleted></Protected>}></Route>
        <Route path='/completed' element={<Protected><Ccomple></Ccomple></Protected>}></Route>
      </Routes>
    </Router>
  )
}

export default App;




export function Protected({children}){
  if(localStorage.getItem("pos-user"))
  return children
  else
  return <Navigate to="/clogin"></Navigate>
}