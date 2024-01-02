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
    <div className='berita pb-5'>
      <Container className='p-4 pb-5'>
        <div className='text-center'>
          <h3 className='text-center fw-bolder m-3 mb-1'>ARTIKEL TERKAIT</h3>
          <Nav fill variant="tabs" className='myNav rounded-pill bg-primary mb-4 d-inline-flex m-4' activeKey={activeTab} onSelect={handleTabChange}>
            <Nav.Item>
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
        <Row xs={1} sm={2} md={3} className='g-4 mb-5 pb-5'>
          {artikel.map((artikel) => (
            <Col key={artikel.id}>
              <Card className='border-0 position-relative rounded-4 card-artikel'>
                {activeTab !== 'artikel' && (
                  <span className={`position-absolute top-0 start-0 m-3 mt-4 text-white bg-black bg-opacity-50 rounded p-1 icon-fv ${activeTab !== 'artikel' ? '' : 'd-none'}`}>
                    {activeTab === 'foto' ? <ImageFill className="m-1" /> : <CameraVideoFill className="m-1" />}
                    {activeTab === 'foto' ? artikel.foto : artikel.video}
                  </span>
                )}
                <Row sm={1} md={1} lg={1}>
                  <Col className='p-3 card-imagee'>
                    <Card.Img variant='top' src={artikel.image} className='rounded-4 card-image' />
                  </Col>
                  <Col className='p-0'>
                    <Card.Body className='p-2 m-2'>
                      <Card.Title className='mt-3 fw-bold card-title-artikel'>
                        {artikel.title}
                      </Card.Title>
                      <Card.Text className='card-text-artikel'>
                        {artikel.datetime}
                      </Card.Text>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
          ))}
        </Row>
        <div className='mt-3 text-center'>
          <Button className='rounded-pill mb-5'>ini  button</Button>
        </div>
      </Container>
    </div>
  );
}

export default Berita;
