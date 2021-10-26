// import React, { useState, useEffect } from "react";
import Login from './Login.jsx'
import Register from './Register.jsx'
// import 'bootstrap/dist/css/bootstrap.css';

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between">
      <a className="navbar-brand p-2 m-2" href="/">Resources</a>
      <div>
        <Login />
        <Register />
      </div>
    </nav>
  )
}