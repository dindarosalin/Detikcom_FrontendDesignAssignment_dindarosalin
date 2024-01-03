import './main-page.css'
import Hero from '../components/hero'
import About from '../components/about'
import Sponsors from '../components/sponsors'
import Gallery from '../components/gallery'
import  Artikel  from '../components/artikel'

const MainPage = () => {
  return (
    <>
      <Hero id='hero'></Hero>
      <About id='about'></About>
      <Sponsors id='sponsors'></Sponsors>
      <Gallery id='galeri'></Gallery>
      <Artikel id='berita'></Artikel>
    </>
  )
}

export default MainPage