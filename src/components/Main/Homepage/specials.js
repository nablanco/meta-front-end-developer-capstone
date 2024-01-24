import './specials.css'
import greekSaladImage from '../../../icons_assets/greek salad.jpg'
import bruschettaImage from '../../../icons_assets/bruchetta.svg'
import lemonDessertImage from '../../../icons_assets/lemon dessert.jpg'

import { HashLink } from 'react-router-hash-link'
const specialsData = [
  {
    name: 'Greek Salad',
    image: greekSaladImage,
    price: '$12.99',
    description: 'A traditional Greek salad consists of sliced cucumbers, tomatoes, green bell pepper, red onion, olives, and feta cheese.',
  },
  {
    name: 'Bruschetta',
    image: bruschettaImage,
    price: '$5.99',
    description: 'Toasted bread is topped with tomatoes, Parmesan cheese, and garlic. This toasty delight is so delicious, make sure to get enough!',
  },
  {
    name: 'Lemon Dessert',
    image: lemonDessertImage,
    price: '$5.00',
    description: 'Layers of tart and sweet lemon curd nestled with fluffy sponge cake. Careful, you will need room for two slices, its addictive!',
  },
];

const Specials = () => {
  return (
    <section className="specials" id="menu">
      <header className='specials-header'>
        <h1 className='specials-header-h1'>
          This weeks specials!
        </h1>
        <HashLink to='/#menu' className='specials-header-button'>Online Menu</HashLink>
      </header>
      <div className='specials-container'>
        {specialsData.map(special => {
          return (
            <figure key={special.name} className='specials-figure'>
              <div className='specials-image-container'>
                <img src={special.image} className='specials-image' alt={special.name} />              </div>
              <figcaption className='specials-description'>
                <header className='specials-description-header'>
                  <div className='specials-description-name'>{special.name}</div>
                  <div className='specials-description-price'>{special.price}</div>
                </header>
                <p className='specials-description-p'>{special.description}</p>
                <button className='specials-description-button'>Order delivery</button>
              </figcaption>
            </figure>
          )
        })}
      </div>
    </section>
  )
}

export default Specials;