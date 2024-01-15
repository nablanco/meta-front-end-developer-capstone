import Navigation from "./navigation";
import logoImg from "../icons_assets/Logo.svg"

const Header = () => {
  return (
    <header id="header">
      <img src={logoImg} alt="Logo"></img>
      <Navigation />
    </header>
  )
}

export default Header;