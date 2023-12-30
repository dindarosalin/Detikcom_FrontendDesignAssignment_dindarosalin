import './styles/hero.css'
import { Button, Image, Container } from 'react-bootstrap'

const Hero = () => {
  return (
    <div className="hero-img ">
      <Container className='d-lg-flex align-items-start justify-content-start mb-5'>
        <div className="mb-5 d-flex flex-column">
          <Image src="src/assets/logo-event 2.png" className='logo-img' />
          <div className='mb-5'>
            <Button className='rounded-pill mb-5'>ini Button</Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Hero
