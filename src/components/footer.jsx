// footer.jsx
import './styles/footer.css';
import { Row, Col, Container, Image, ListGroup, } from 'react-bootstrap';

const Footer = () => {
  return (
    <div className='bg-footer'>
    <Container>
        <Row>
          <Image
            src='/assets/Mask group.png'
            alt='logo event'
            className='m-3 img-footer mt-4'
          />
        </Row>
        <Row>
          <Col lg={8} md={7} sm={12} className='m-3'>
            <p className='text-white'>
              Event olahraga lari sejauh 10 kilometer yang diselenggarakan oleh Detikhealth secara gratis untuk masyarakat Indonesia. Ajak keluarga dan kerabat anda untuk ikut keseruan Sudirman Run 2023 lalu menangkan hadiah utama serta doorprize dengan total puluhan juta rupiah
            </p>
          </Col>
          <Col lg={3} md={4} sm={12} className='pt-3'>
            <p className='text-center text-white mb-1'>connect with us</p>
            <ListGroup horizontal className='border-0 d-flex justify-content-center align-items-center list-group-item-primary list-group-horizontal'>
              <ListGroup.Item className='p-0 me-2'>
                <Image src='/logo/icons8-facebook.svg' alt='logo social media' />
              </ListGroup.Item>
              <ListGroup.Item className='p-0 me-2'>
                <Image src='/logo/icons8-twitterx.svg' alt='logo social media' />
              </ListGroup.Item >
              <ListGroup.Item className='p-0 me-2'>
                <Image src='/logo/instagram.png' alt='logo social media' />
              </ListGroup.Item>
              <ListGroup.Item className='p-0 me-2'>
                <Image src='/logo/linkedin.png' alt='logo social media' />
              </ListGroup.Item>
              <ListGroup.Item className='p-0 me-2'>
                <Image src='/logo/youtube.png' alt='logo social media' />
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
        <Row className='border mx-3'></Row>
        <Row>
          <p className='text-white m-3'>Copyright @ 2023 detikcom. All right reserved</p>
        </Row>
    </Container>
    </div>
  );
};

export default Footer;
