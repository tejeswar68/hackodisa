import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Routes
  } from "react-router-dom";
 import Login from "./Customer/Login"
const Nav = () => {
  return (
    <div>
    <center>
    <h1 className='mt-5'>RAPIDO</h1>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="/">Rapido</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="/">Customer Register</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/clogin">Customer Login</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/dreg">Driver Register</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/dlogin">Driver Login</a>
      </li>
    </ul>
  </div>
</nav>
    </center>
    </div>
  )
}

export default Nav
/*    <Router>
        <Routes>
            <Route path='/clogin' element={<Login></Login>}></Route>
        </Routes>
    </Router>*/ 