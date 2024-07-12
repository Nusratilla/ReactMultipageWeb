import Logo from '../images/vabuchiW.png'
import { Link } from "react-router-dom"
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";


const Footer = () => {
  return (
    <footer>
      <div className="container footer-container">
        <article>
          <Link to='/' className='logo'>
            <img src={Logo} alt="Footer Logo" />
          </Link>
          <p className="footer-p">
            Lorem ipsum dolor sit, Id error explicabo quisquam corrupti harum? Molestias quidem odio esse soluta vitae.
          </p>
          <div className="footer-socials">
            <a href="https://www.linkedin.com/in/nusratilla-rikhsiev-3b7233237/" target='_blank'
              rel='noreferrer noopener'><FaInstagram /></a>
            <a href="https://www.linkedin.com/in/nusratilla-rikhsiev-3b7233237/" target='_blank'
              rel='noreferrer noopener'><FaTelegram /></a>
            <a href="https://www.linkedin.com/in/nusratilla-rikhsiev-3b7233237/" target='_blank'
              rel='noreferrer noopener'><FaLinkedin /></a>
            <a href="https://www.linkedin.com/in/nusratilla-rikhsiev-3b7233237/" target='_blank'
            rel='noreferrer noopener'><FaFacebook/></a>
          </div>
        </article>
        <article>
          <h4>Permalinks</h4>
          <Link to='/about'>About</Link>
          <Link to='/services'>Services</Link>
          <Link to='/gallery'>Gallery</Link>
          <Link to='/contact'>Contact</Link>
        </article>
        <article>
          <h4>Insight</h4>
          <Link to='/a'>Blog</Link>
          <Link to='/a'>Case Study</Link>
          <Link to='/a'>Events</Link>
          <Link to='/a'>FAQ</Link>
        </article>
        <article>
          <h4>Insight</h4>
          <Link to='/contact'>Contact Us</Link>
          <Link to='/a'>Support</Link>
          <Link to='+998994815515'>+998994815515</Link>
          <Link to='/nusratilla.88@gmail.com'>nusratilla.88@gmail.com</Link>
        </article>
      </div>
      <div className="footer-copyright">
        <small>2024 Vabuchi &copy; All Rights Reserved</small>
      </div>
    </footer>
  )
}

export default Footer