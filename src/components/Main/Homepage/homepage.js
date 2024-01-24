import './homepage.css'

import CallToAction from './calltoaction';
import Specials from './specials';
import About from './about';

const Homepage = () => {
  return (
    <section className="homepage">
        <CallToAction />
        <Specials />
        <About />
    </section>
  )
}

export default Homepage;