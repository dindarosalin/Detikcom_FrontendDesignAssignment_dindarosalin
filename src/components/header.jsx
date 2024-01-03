import './styles/header.css';
import { Container, Nav, Button, Navbar } from 'react-bootstrap';
import { useState } from 'react';
import * as Icon from 'react-bootstrap-icons';
import ScrollIntoView from 'react-scroll-into-view'

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  const handleTabChange = () => {
    setExpanded(false);
  };

  return (
    <Container className='mx-5'>
      <Navbar
        expand="md"
        collapseOnSelect
        expanded={expanded}
        className="justify-content-between rounded-5 mt-4 px-4 d-inline-flex align-items-center fixed-top headnav mx-5 py-3"
      >
        <Navbar.Brand href="/">
          <img src="assets/navbar-brand.png" alt="Navbar Brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          onClick={() => setExpanded(!expanded)}
          aria-controls="responsive-navbar-nav"
          className='border-0'
        >
          {expanded ? <Icon.X size={28} /> : <Icon.MenuButtonWide size={24} />}
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav" className=" justify-content-end text-center me-auto gap-3">
          <Nav className="gap-sm-2 gap-md-5" onSelect={handleTabChange}>
            <Nav.Item>
              <ScrollIntoView selector="#hero">
                <Nav.Link eventKey="home" className='rounded-pill'>Home</Nav.Link>
              </ScrollIntoView>
            </Nav.Item>
            <Nav.Item>
              <ScrollIntoView selector="#about">
                <Nav.Link eventKey="about" className='rounded-pill'>Tentang Acara</Nav.Link>
              </ScrollIntoView>
            </Nav.Item>
            <Nav.Item>
              <ScrollIntoView selector="#gallery">
                <Nav.Link eventKey="gallery" className='rounded-pill'>Galeri</Nav.Link>
              </ScrollIntoView>
            </Nav.Item>
            <Nav.Item>
              <ScrollIntoView selector="#berita">
                <Nav.Link eventKey="berita" className='rounded-pill'>Berita</Nav.Link>
              </ScrollIntoView>
            </Nav.Item>
            <Nav.Item className='d-grid d-sm-block d-md-none'>
            <Button className='rounded-pill'>
                <a href="https://event.detik.com/" target="_blank" rel="noopener noreferrer" className='text-decoration-none text-white'>Registrasi</a>
              </Button>
            </Nav.Item>
            <Nav.Item className='d-flex d-none d-md-block d-lg-block'>
              <Button className='rounded-pill'>
                <a href="https://event.detik.com/" target="_blank" rel="noopener noreferrer" className='text-decoration-none text-white'>Registrasi</a>
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default Header;
