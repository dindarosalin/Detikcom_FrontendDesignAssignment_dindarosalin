import { useState } from 'react';
import './styles/berita.css';
import { artikel } from './data/data-artikel';
import { Container, Card, Row, Col, Nav, Button } from 'react-bootstrap';
import { ImageFill, CameraVideoFill } from 'react-bootstrap-icons';

const Berita = () => {
  const [activeTab, setActiveTab] = useState('artikel');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Container className='p-4'>
      <div className='text-center'>
        <h3 className='text-center fw-bolder m-3'>ARTIKEL TERKAIT</h3>
        <Nav fill variant="tabs" className='rounded-pill bg-primary mb-4 d-inline-flex m-4' activeKey={activeTab} onSelect={handleTabChange}>
          <Nav.Item >
            <Nav.Link eventKey="artikel" className='rounded-pill'>Artikel</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="foto" className='rounded-pill'>Foto</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="video" className='rounded-pill'>Video</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      <Row xs={1} sm={2} md={3} className='g-4'>
        {artikel.map((artikel) => (
          <Col key={artikel.id}>
            <Card className='border-0 rounded-5 position-relative'>
              {activeTab !== 'artikel' && (
                <span className={`position-absolute top-0 end-0 m-3 text-white bg-black bg-opacity-50 rounded p-1 ${activeTab !== 'artikel' ? '' : 'd-none'}`}>
                  {activeTab === 'foto' ? <ImageFill className="m-1" /> : <CameraVideoFill className="m-1" />}
                  {activeTab === 'foto' ? artikel.foto : artikel.video}
                </span>
              )}
              <Card.Img variant='top' src={artikel.image} className='rounded-5 card-image' />
              <Card.Body className='p-0'>
                <Card.Title className='mt-3 card-ttl fw-bold'>
                  {artikel.title}
                </Card.Title>
                <Card.Text>
                  {artikel.datetime}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <div className='mt-4 text-center'>
        <Button className='rounded-pill'>ini  button</Button>
      </div>
    </Container>
  );
}

export default Berita;
