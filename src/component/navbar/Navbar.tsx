import { NavbarStyle } from "./NavbarStyle"
import  webLogo from "../../assets/icons/web-logo.svg"

const Navbar = () => {
  return (
    <NavbarStyle  className="flexRow flexSpaceBetween">
        {/*logo and company name */}
        <div >
        <div className="flexRow logoContainer">
            <img src={webLogo}alt="" />
            <p className="descriptionText">Africash</p>
        </div>
        </div>
                {/*nav link and button*/}

        <div className="flexRow navLinkContainer">
          <div className="navLinks">
          <ul>
                <li className="descriptionText">About</li>
                <li className="descriptionText">blog</li>
                <li className="descriptionText">contact</li>
                <li className="descriptionText">Features</li>
            </ul>
          </div>
          <div className="buttonContainer flexRow">
            <button className="descriptionText loginBtn">login</button>
            <button className="descriptionText signUpBtn ">sign up</button>
          </div>
        </div>
     </NavbarStyle>
  )
}

export default Navbar