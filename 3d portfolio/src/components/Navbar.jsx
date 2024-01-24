import { NavLink } from "react-router-dom"
import "./index.css";

const Navbar = () => {
  return (
    <header className="header">
        <NavLink  to="/" className="name">
            <p>AN</p>
        </NavLink>
        <nav className="nav">
            <NavLink to="/about"  className='link'>
            About
            </NavLink>

            <NavLink to="/contacts"   className='link'>
            Contact
            </NavLink>
        </nav>
    </header>
      
  )
}

export default Navbar
