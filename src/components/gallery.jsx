import './styles/gallery.css';
import { thumbnailbw, thumbnailcl } from './data/data-gallery';
import { useState } from 'react';
import { Carousel, Container, Image, Row, Col } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';

function Gallery() {
  const [index, setIndex] = useState(0);
  const [selectedThumb, setSelectedThumb] = useState(null);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
    setSelectedThumb(thumbnailcl[selectedIndex]);
  };

  const changeCarouselImage = (thumbId) => {
    const newIndex = thumbnailcl.findIndex((imageData) => imageData.id === thumbId);
    if (newIndex !== -1) {
      setIndex(newIndex);
      setSelectedThumb(thumbnailcl[newIndex]);
    }
  };

  return (
    <Container className='my-5 p-4 text-center'>
      <h3 className='text-center fw-bolder mb-3'>GALERI SUDIRMAN RUN 2022</h3>
      <Carousel 
        slide={false}
        indicators={false}
        activeIndex={index} 
        onSelect={handleSelect}
        nextIcon={<Icon.ArrowRightCircleFill size={20} />}
        prevIcon={<Icon.ArrowLeftCircleFill size={20} />}
        className='mb-4'
      >
        {thumbnailcl.map((imageData) => (
          <Carousel.Item key={imageData.id}>
            <img className="rounded-3 gall-img" src={imageData.image} alt={imageData.alt} />
          </Carousel.Item>
        ))}
      </Carousel>
      <Row className='justify-content-center'>
        {thumbnailbw.map((thumb) => (
          <Col key={thumb.id} className='mb-3'>
            <Image
              src={thumb.id === selectedThumb?.id ? selectedThumb.image : thumb.image}
              alt={thumb.alt}
              className='thumb-img rounded-3'
              onClick={() => changeCarouselImage(thumb.id)}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Gallery;
