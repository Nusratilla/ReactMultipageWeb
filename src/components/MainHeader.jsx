import { Link } from "react-router-dom"
import Logo from '../images/vabuchG.png'
import Image1 from "../images/vfg.png"
import '../pages/home/home.css'
const MainHeader = () => {
  return (
    <header className="main-header">
      <div className="container main-header-container">
        <div className="main-heare-left">
          <h4>World Of Jewelery</h4>
          <img src={Logo} />
          <p>
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quidem odio quasi sed, aspernatur laborum accusamus.
          </p>
          <Link to='/plans' className="btn lg">Get Started</Link>
        </div>
        <div className="main-heare-right">
          <div className="main-header-crcle"></div>
          <div className="main-header-image">
            <img src={Image1} alt="Main Image" />
          </div>
        </div>
      </div>

    </header>
  )
}

export default MainHeader