import { Link, NavLink } from 'react-router-dom'
import Logo from '../images/vabuchiW.png'
import { links } from '../data'
import { FaBarsStaggered } from "react-icons/fa6";
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
                  <NavLink to={path} className={({isActive}) => isActive ? 'active-nav' : ''}>{ name}</NavLink>
                </li>
              )
            })
          }
        </ul>
        <button className='nav-toggle-btn'>
        <FaBarsStaggered />
          </button>
      </div>

    </nav>
  )
}

export default Navbar