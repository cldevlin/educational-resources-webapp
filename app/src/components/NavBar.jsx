// import React, { useState, useEffect } from "react";
import Login from './Login.jsx'
import Register from './Register.jsx'

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between">
      <a class="navbar-brand" href="#">Resources</a>
      <div>
        <Login />
        <Register />
      </div>
    </nav>
  )
}