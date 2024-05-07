import { Link, NavLink } from 'react-router-dom'
import Logo from '../images/vabuchiW.png'
import {links} from '../data'
import './navbar.css'


const Navbar = () => {
  return (
    <nav>
      <div className="container nav-container">
        <Link to='/' className='logo'>
          <img src={Logo} alt="" />
        </Link>
        <ul className="nav-links">
          {
            links.map(({ name, path }, index) => {
              return (
                <li>
                  <NavLink to={path}>{ name}</NavLink>
                </li>
              )
            })
          }
        </ul>

      </div>

    </nav>
  )
}

export default Navbar