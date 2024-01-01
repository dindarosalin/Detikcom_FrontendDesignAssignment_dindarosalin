import './styles/header.css'
import { Container, Nav, Button, Navbar } from 'react-bootstrap';
import { useState } from 'react';
import * as Icon from 'react-bootstrap-icons';

const Header = () => {
  const [activeTab, setActiveTab] = useState('home');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Container className='mx-5'>
    <Navbar expand="sm" variant="light" collapseOnSelect className="justify-content-between rounded-5 mt-4 px-4 d-flex align-items-center fixed-top headnav mx-5 py-3">
      <Container>
        <Navbar.Brand href="/">
          <img src="assets/navbar-brand.png" alt="Navbar Brand" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"> 
        <Icon.MenuButtonWide />
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center">
          <Nav className="me-auto gap-3" activeKey={activeTab} onSelect={handleTabChange}>
            <Nav.Item>
              <Nav.Link eventKey="home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="about">Tentang Acara</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="gallery">Galeri</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="berita">Berita</Nav.Link>
            </Nav.Item>
          </Nav>
          <Button className='rounded-pill'>Register</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Container>

  );
}

export default Header;
