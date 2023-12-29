import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

function header() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <div className='d-flex head'>
        <Navbar.Brand href="#home">
          <img src="src/assets/navbar-brand.png" 
          height="20"
          className="d-inline-block align-top"
          alt="Navbar Brand" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Button variant="primary">Primary</Button>{' '}
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default header;