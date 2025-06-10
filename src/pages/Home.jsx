import React from 'react'
import Header from '../components/common/Header';
import Hero from '../components/sections/Hero';
import Welcome from '../components/sections/Welcome';
import Collaborations from '../components/sections/Collaborations';
import Campaigns from '../components/sections/Campaigns';
import CallToAction from '../components/sections/CallToAction';
import Events from '../components/sections/Events';
import Mission from '../components/sections/Mission';
import News from '../components/sections/News';
import Partners from '../components/sections/Partners';
import { Newsletter, Footer } from '../components/common/Newsletter';
function Homepage() {
  return (
    <div>
          {/* <Header /> */}
      <main>
        <Hero />
        <Welcome />
        <Collaborations />
        <Campaigns />
        <CallToAction />
        <Events />

        <Mission />
        <News />
        <Partners />
        <Newsletter />
      </main>
      {/* <Footer /> */}
    </div>
  )
}

export default  Homepage;





