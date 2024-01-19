import './header.css'

import Navigation from './navigation'
import logoImg from "../../icons_assets/Logo.svg"

const Header = () => {
  return (
    <header className="header">
      <img src={logoImg} alt="Logo" className="logoImage"></img>
      <Navigation />
    </header>
  )
}

export default Header;