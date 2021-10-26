import Login from './Login.jsx'
import Register from './Register.jsx'

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg d-flex justify-content-between" >
      <a className="navbar-brand p-1 m-1" href="/" id='logo'>Educational Resources</a>
      <div className="right-side-buttons">
        <Login />
        <Register />
      </div>
    </nav>
  )
}