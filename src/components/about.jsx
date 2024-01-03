import './styles/about.css'
import { Container, Row, Col, Button, Card, Image } from 'react-bootstrap'

const about = () => {
  return (
    <Container id='about' className='text-center mt-5 py-5'>
      <Row expand='md' className='mb-4 card-about'>
        <Col>
          <Card className='rounded-5 border mb-3 card-satu'>
            <div className='embed-responsive embed-responsive-4by3 m-4 mb-0 cardd rounded-5'>
              <Card.Img variant="top" src="assets\map 1.png"
                className='embed-responsive-item imagee' />
            </div>
            <Card.Body className='text-start text-white m-2 mt-0'>
              <Card.Title>
                <h3 className='fst-italic fw-bolder'>10K FUN RUN</h3>
              </Card.Title>
              <Card.Text>
                Dimulai pukul 6 pagi, nikmati pemandangan kota di pagi hari dimulai dari Bundaran HI hingga Patung Pemuda Membangun di Senayan lalu kembali lagi ke Bundaran HI!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className=''>
          <Row className='mb-4 mx-2'>
            <Card className='text-start rounded-5 border text-white card-dua'>
              <Card.Body>
                <Card.Title>
                  <h3 className='fst-italic fw-bolder'>GRATIS DAN BERHADIAH</h3>
                </Card.Title>
                <Card.Text>
                  Pendaftaran gratis! Ajak keluarga anda dan menangkan hadiah total puluhan juta rupiah doorprize menarik!
                </Card.Text>
              </Card.Body>
            </Card>
          </Row>
          <Row className='mb-4 mx-2'>
            <Card className='text-start rounded-5 border text-white card-tiga'>
              <Card.Body>
                <Card.Title>
                  <h3 className='fst-italic fw-bolder'>50+ TENANT BAZAR</h3>
                </Card.Title>
                <Card.Text>
                  Dapatkan promo menarik pada booth-booth tenant bazzar Sudirman Run 2023 mulai dari F&B hingga fashion
                </Card.Text>
              </Card.Body>
            </Card>
          </Row>
          <Row className='rounded-5 border mx-1 card-empat align-items-center p-3'>
            <Col lg={4} className='order-lg-1 cardd p-0 rounded-4'>
              <Image src='assets\map 1 (1).png' className='img-fluid d-none d-lg-block imagee' alt='Gambar Artis Desktop'></Image>
              <Image src='assets\map 1 mobile.png' className='img-fluid d-lg-none my-2 imagee' alt='Gambar Artis Mobile'></Image>
            </Col>
            <Col lg={8} className='order-lg-2'>
              <Card.Body className='text-start text-white'>
                <Card.Title>
                  <h3 className='fst-italic fw-bolder'>SPECIAL PERFORMANCE</h3>
                </Card.Title>
                <Card.Text>
                  Saksikan penampilan dari RAN, Ayu Ting Ting, Diskoria, serta hiburan lainnya!
                </Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Col>
      </Row>
      <Button className='rounded-pill btn-about'>
        <a href="https://event.detik.com/" target="_blank" rel="noopener noreferrer" className='text-white text-decoration-none fw-medium'>DAFTAR SEKARANG</a>
      </Button>
    </Container>
  )
}

export default about