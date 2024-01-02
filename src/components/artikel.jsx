import { useState } from 'react';
import './styles/berita.css';
import { artikel } from './data/data-artikel';
import { Container, Row, Col, Nav, Button, Image } from 'react-bootstrap';
import { ImageFill, CameraVideoFill } from 'react-bootstrap-icons';

const Artikel = () => {
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
                <Row xs={1} sm={2} md={3} className='g-4 mb-5 pb-5'>
                    {artikel.map((artikel) => (
                        <Col key={artikel.id}>
                            <div className='border-0 position-relative rounded-4 card-artikel'>
                                {activeTab !== 'artikel' && (
                                    <span className={`position-absolute top-0 start-0 m-3 mt-4 text-white bg-black bg-opacity-50 rounded p-1 icon-fv ${activeTab !== 'artikel' ? '' : 'd-none'}`}>
                                        {activeTab === 'foto' ? <ImageFill className="m-1" /> : <CameraVideoFill className="m-1" />}
                                        {activeTab === 'foto' ? artikel.foto : artikel.video}
                                    </span>
                                )}
                                <Row md={1} lg={1} className='align-items-center d-flex'>
                                    <Col sm={12} md={4} className='card-imagee'>
                                        <div className='d-flex flex-row flex-md-column justify-content-center justify-content-md-start'>
                                            <Image variant='top' src={artikel.image} className='rounded-4 card-image d-block d-md-none' />
                                            <Image variant='top' src={artikel.image} className='rounded-4 card-image ratio ratio-1x1 d-none d-md-block' />
                                        </div>
                                    </Col>
                                    <Col sm={12} md={8} className='p-0'>
                                        <div className='p-2 m-2'>
                                            <h5 className='mt-3 fw-bold card-title-artikel'>
                                                {artikel.title}
                                            </h5>
                                            <p className='card-text-artikel'>
                                                {artikel.datetime}
                                            </p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    ))}
                </Row>
                <div className='mt-3 text-center '>
                    <Button className='rounded-pill mb-5 btn-berita'>LIHAT LEBIH BANYAK</Button>
                </div>
            </Container>
        </div>
    );
}

export default Artikel;
