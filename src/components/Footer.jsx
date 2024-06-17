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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id error explicabo quisquam corrupti harum? Molestias quidem odio esse soluta vitae.
          </p>
        </article>
      </div>
    </footer>
  )
}

export default Footer