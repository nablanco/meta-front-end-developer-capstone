import './homepage.css'

import CallToAction from './calltoaction';
import Specials from './specials';
import Testimonials from './testimonials';
import About from './about';

const Homepage = () => {
  return (
    <section className="homepage">
        <CallToAction />
        <Specials />
        <Testimonials />
        <About />
    </section>
  )
}

export default Homepage;