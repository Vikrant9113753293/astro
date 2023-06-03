import './Navbar.css'
import {Link, useHistory} from 'react-router-dom'
import {useMemo} from 'react'


const Navbar = ({click}) => {


  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <h2>Astro Yogi</h2>
      </div>

      <ul className="navbar__links">
        <li>
            <i className="fas fa-shopping-cart"></i>
            <span>
              Consult 
            </span>
        </li>

        <li>
          Call
        </li>

        
          <li>
            Login
          </li>
      </ul>

      <div className="hamburger__menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  )
}

export default Navbar