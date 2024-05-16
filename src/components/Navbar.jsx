import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom'
import Logo from '../images/vabuchiW.png'
import { links } from '../data'
import { FaBarsStaggered } from "react-icons/fa6";
import { MdOutlineClose } from "react-icons/md";
import './navbar.css'


const Navbar = () => {
  const [isNavShow, setIsNavShow] = useState(false);

  return (
    <nav>
      <div className="container nav-container">
        <Link to='/' className='logo'>
          <img src={Logo} onClick={()=> setIsNavShow(false)} />
        </Link>
        <ul className= {`nav-links ${isNavShow ? 'show-nav' : 'hide-nav'}`}>
          {
            links.map(({ name, path }, index) => {
              return (
                <li key={index}>
                  <NavLink to={path} className={({ isActive }) => isActive ? 'active-nav' : null}
                  onClick={() => setIsNavShow(prev => !prev )}>{name}</NavLink>
                </li>
              )
            })
          }
        </ul>
        <button className='nav-toggle-btn' onClick={() => setIsNavShow(prev => !prev )}>
          {isNavShow ? <MdOutlineClose/> : <FaBarsStaggered/>}
          </button>
      </div>

    </nav>
  )
}

export default Navbar