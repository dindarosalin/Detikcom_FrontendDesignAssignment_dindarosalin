import './main-page.css'
import Hero from '../components/hero'
import About from '../components/about'
import Sponsors from '../components/sponsors'
import Gallery from '../components/gallery'
import Berita from '../components/berita'

const MainPage = () => {
  return (
    <>
      <Hero></Hero>
      <About></About>
      <Sponsors></Sponsors>
      <Gallery></Gallery>
      <Berita></Berita>
    </>
  )
}

export default MainPage