import Login from './Login.jsx'
import Register from './Register.jsx'

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light d-flex justify-content-between" style={{ backgroundColor: '#a8dadc', fontFamily: 'rubik', fontSize: '1.5em' }}>
      <a className="navbar-brand p-1 m-1" href="/" style={{ fontFamily: 'rubik', fontSize: '1.2em' }}>Educational Resources</a>
      <div>
        <Login />
        <Register />
      </div>
    </nav>
  )
}