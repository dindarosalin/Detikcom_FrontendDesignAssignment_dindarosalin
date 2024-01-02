import './styles/header.css';
import { Container, Nav, Button, Navbar } from 'react-bootstrap';
import { useState } from 'react';
import * as Icon from 'react-bootstrap-icons';

const Header = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [expanded, setExpanded] = useState(false);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setExpanded(false); // Menutup navbar saat tab dipilih
  };

  return (
    <Container className='mx-5'>
      <Navbar
        expand="sm"
        collapseOnSelect
        expanded={expanded}
        className="justify-content-between rounded-5 mt-4 px-4 d-flex align-items-center fixed-top headnav mx-5 py-3"
      >
        <Container>
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
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center text-center me-auto gap-3">
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
              <Nav.Item className='d-grid'>
                <Button className='rounded-pill'>Register</Button>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Header;
