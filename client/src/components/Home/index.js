import { useState, useEffect } from 'react'
import { Header } from './header'
import { Features } from './features'
import { About } from './about'
import { Services } from './services'
import { Testimonials } from './testimonials'
import { Team } from './Team'
import { Contact } from './contact'
import JsonData from 'data/data.json'
import SmoothScroll from 'smooth-scroll'



export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
})

const App = () => {
  const [landingPageData, setLandingPageData] = useState({})
  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])

  return (
    <div>
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} />
    </div>
  )
}

export default App
