import './calltoaction.css'

import restaurantFood from "../../../icons_assets/restauranfood.jpg"
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="calltoaction" id='reservations'>
      <div className='calltoaction-information-container'>
        <h1 className='calltoaction-h1'>Little Lemon</h1>
        <h2 className='calltoaction-h2'>Chicago</h2>
        <p className='calltoaction-p'>Welcome to Little Lemon Chicago where we make scrumpdidlyicious food!</p>
        <button className='calltoaction-button'>
          <Link to="/reservations" className='reservation-link'>
            Reserve a Table
          </Link>
        </button>
      </div>
      <div className='calltoaction-image-container'>
        <img src={restaurantFood} alt='restaurant food' className='calltoaction-image'></img>
      </div>
    </section>
  )
}

export default CallToAction;