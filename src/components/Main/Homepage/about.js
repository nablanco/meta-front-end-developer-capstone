import './about.css'

import teamImage from "../../../icons_assets/Mario and Adrian A.jpg"

const About = () => {
  return (
    <section className="about">
        <div className='about-information-container'>
          <h1 className='about-h1'>Little Lemon</h1>
          <h2 className='about-h2'>Chicago</h2>
          <p className='about-p'>Our restaurant focus' on classic meditteranean food that feels like it was made at home by Nonna. You will fall in love with the variety and depth of flavors. We think of our clients as family!</p>
        </div>
        <div className='about-image-container'>
          <img src={teamImage} alt='restaurant food' className='about-image'></img>
        </div>
    </section>
  )
}

export default About;