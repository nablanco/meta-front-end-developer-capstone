import './navigation.css';

import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul>
        <li><Link to="/" className='navigation-navlink'>Home</Link></li>
        <li><a href="#about" className='navigation-navlink'>About</a></li>
        <li><a href="#menu" className='navigation-navlink'>Menu</a></li>
        <li><Link to="/reservations" className='navigation-navlink'>Reservations</Link></li>
        <li><a href="#order-online" className='navigation-navlink'>Order Online</a></li>
        <li><a href="#login" className='navigation-navlink'>Login</a></li>
      </ul>
    </nav>
  )
}

export default Navigation;