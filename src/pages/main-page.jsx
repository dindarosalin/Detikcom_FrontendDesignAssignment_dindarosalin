import './main-page.css'
import Hero from '../components/hero'
import About from '../components/about'
import Sponsors from '../components/sponsors'
import Gallery from '../components/gallery'
import  Artikel  from '../components/artikel'

const MainPage = () => {
  return (
    <>
      <Hero></Hero>
      <About></About>
      <Sponsors></Sponsors>
      <Gallery></Gallery>
      <Artikel></Artikel>
    </>
  )
}

export default MainPage