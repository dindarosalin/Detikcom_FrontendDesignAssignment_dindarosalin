import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import './styles/header.css'

function header() {
  return (
    <Container>
      <Navbar collapseOnSelect expand="sm" 
      className="position-fixed rounded-pill mt-4 px-4 border mx-auto">
      <div className='d-flex align-items-center'>
        <Navbar.Brand href="/" className='pe-5'>
          <img src="src/assets/navbar-brand.png" 
          className="d-flex align-items-center"
          alt="Navbar Brand" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto gap-5">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#tentang-acara">Tentang Acara</Nav.Link>
            <Nav.Link href='#galeri'>Galeri</Nav.Link>
            <Nav.Link href='#berita'>Berita</Nav.Link>
            <Button variant="primary" className='rounded-pill'>Primary</Button>{' '}
          </Nav>
          </Navbar.Collapse>
      </div>
    </Navbar>
    </Container>
  );
}

export default header;