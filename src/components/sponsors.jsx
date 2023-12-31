import './styles/sponsors.css';
import sponsorsData from './data/data-sponsors';
import { useState, useEffect } from 'react';

function Sponsors() {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prevPosition) => prevPosition - 1);
    }, 15); // Atur kecepatan scroll di sini (semakin kecil, semakin cepat)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='bg-primary py-4'>
      <h3 className='text-center text-white fw-bolder m-3'>DIDUKUNG OLEH:</h3>
      <div className="marquee-container d-flex align-items-center overflow-hidden">
        {sponsorsData.map((sponsor, index) => (
          <div
            key={sponsor.id}
            className={`sponsors-img bg-white rounded p-3 ${index !== 0 ? 'ms-3' : ''}`}
            style={{
              transform: `translateX(${position}px)`,
              transition: 'transform 0.1s ease',
            }}
          >
            <img
              className="d-block img-fluid img-log"
              src={sponsor.image}
              alt={sponsor.alt}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sponsors;