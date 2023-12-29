import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import './styles/header.css'

function header() {
  return (
    <Navbar collapseOnSelect expand="sm" 
    className="position-fixed rounded-pill mt-4 px-4 border mx-auto">
      <div className='d-flex justify-content-center gap-4'>
        <Navbar.Brand href="/" className='pe-5'>
          <img src="src/assets/navbar-brand.png" 
          height="20"
          className="d-inline-block align-top"
          alt="Navbar Brand" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#tentang-acara">Tentang Acara</Nav.Link>
            <Nav.Link href='#galeri'>Galeri</Nav.Link>
            <Nav.Link href='#berita'>Berita</Nav.Link>
          </Nav>
          <Button variant="primary" className='rounded-pill'>Primary</Button>{' '}
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default header;