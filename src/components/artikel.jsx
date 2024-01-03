import { useState } from 'react';
import './styles/artikel.css';
import { artikel } from './data/data-artikel';
import { Container, Card, Nav, Button, Row } from 'react-bootstrap';
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
                    <Nav fill variant="tabs" className='nav-berita rounded-pill mb-4 d-inline-flex m-4' activeKey={activeTab} onSelect={handleTabChange}>
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
                <Row xs={1} sm={2} md={3} className=''>
                    {artikel.map((artikel) => (
                        <Card key={artikel.id} className='card-berita border-0'>
                            {activeTab !== 'artikel' && (
                                <section>
                                    <span className={`position-absolute top-0 end-0 m-2 me-3 text-white bg-black bg-opacity-50 rounded p-1 icon-fv d-none d-md-block ${activeTab !== 'artikel' ? '' : 'd-none'}`}>
                                        {activeTab === 'foto' ? <ImageFill className="m-1" /> : <CameraVideoFill className="m-1" />}
                                        {activeTab === 'foto' ? artikel.foto : artikel.video}
                                    </span><span className={`position-absolute top-0 start-0 m-3 text-white bg-black bg-opacity-50 rounded p-1 icon-fv d-sm-block d-md-none d-lg-none ${activeTab !== 'artikel' ? '' : 'd-none'}`}>
                                        {activeTab === 'foto' ? <ImageFill className="m-1" /> : <CameraVideoFill className="m-1" />}
                                        {activeTab === 'foto' ? artikel.foto : artikel.video}
                                    </span>
                                </section>
                            )}
                            <Card.Img variant="top" src={artikel.image} className='m-auto' />
                            <Card.Body>
                                <Card.Title className='card-tittle-artikel'>{artikel.title}</Card.Title>
                                <Card.Text className='card-text-artikel'>
                                    {artikel.datetime}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    ))}
                </Row>
                <div className='mt-3 text-center '>
                    <Button className='rounded-pill mb-5 btn-berita'>LIHAT LEBIH BANYAK</Button>
                </div>
            </Container>
        </div>
    );
}

export default Berita;