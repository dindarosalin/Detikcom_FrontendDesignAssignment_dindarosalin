import './styles/about.css'
import { Container, Row, Col, Button, Card, Image } from 'react-bootstrap'

const about = () => {
  return (
    <Container className='text-center mt-5 py-5'>
      <Row expand='md' className='mb-4 '>
        <Col>
          <Card className='rounded-5 border bg-primary mb-3'>
            <div className='embed-responsive embed-responsive-4by3 m-4 mb-0'>
              <Card.Img variant="top" src="src\assets\map 1.png"
                className='embed-responsive-item' />
            </div>
            <Card.Body className='text-start text-white m-2 mt-0'>
              <Card.Title>
                <h1 className='fst-italic fw-bolder'>10K FUN RUN</h1>
              </Card.Title>
              <Card.Text>
                Dimulai pukul 6 pagi, nikmati pemandangan kota di pagi hari dimulai dari Bundaran HI hingga Patung Pemuda Membangun di Senayan lalu kembali lagi ke Bundaran HI!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className=''>
          <Row className='mb-4 mx-1'>
            <Card className='text-start rounded-5 border bg-primary text-white'>
              <Card.Body>
                <Card.Title>
                  <h2 className='fst-italic fw-bolder'>GRATIS DAN BERHADIAH</h2>
                </Card.Title>
                <Card.Text>
                  Pendaftaran gratis! Ajak keluarga anda dan menangkan hadiah total puluhan juta rupiah doorprize menarik!
                </Card.Text>
              </Card.Body>
            </Card>
          </Row>
          <Row className='mb-4 mx-1'>
            <Card className='text-start rounded-5 border bg-primary text-white'>
              <Card.Body>
                <Card.Title>
                  <h2 className='fst-italic fw-bolder'>50+ TENANT BAZAR</h2>
                </Card.Title>
                <Card.Text>
                  Dapatkan promo menarik pada booth-booth tenant bazzar Sudirman Run 2023 mulai dari F&B hingga fashion
                </Card.Text>
              </Card.Body>
            </Card>
          </Row>
          <Row className='rounded-5 border p-3 bg-primary mx-1'>
            <Col lg={4} className='order-lg-1 pt-2'>
              <Image src='src\assets\map 1 (1).png' className='img-fluid d-none d-lg-block mb-3' alt='Gambar Artis Desktop'></Image>
              <Image src='src\assets\map 1 mobile.png' className='img-fluid d-lg-none mb-3' alt='Gambar Artis Mobile'></Image>
            </Col>
            <Col lg={8} className='order-lg-2'>
              <Card.Body className='text-start text-white'>
                <Card.Title>
                  <h2 className='fst-italic fw-bolder'>GRATIS DAN BERHADIAH</h2>
                </Card.Title>
                <Card.Text>
                  Saksikan penampilan dari RAN, Ayu Ting Ting, Diskoria, serta hiburan lainnya!
                </Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Col>
      </Row>
      <Button className='rounded-pill'>ini  button</Button>
    </Container>
  )
}

export default about