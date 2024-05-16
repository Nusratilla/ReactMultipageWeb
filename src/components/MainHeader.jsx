import { Link } from "react-router-dom"
import Logo from '../images/vabuchiB.png'
const MainHeader = () => {
  return (
    <header className="main-header">
      <div className="container main-header-container">
        <div className="main-heare-left">
          <h4>#101JeweleryWorld</h4>
          <h1><img src={Logo} /> World Of Jewelery</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem odio quasi sed, aspernatur laborum accusamus.
          </p>
        </div>
        <div className="main-heare-right"></div>
      </div>

    </header>
  )
}

export default MainHeader