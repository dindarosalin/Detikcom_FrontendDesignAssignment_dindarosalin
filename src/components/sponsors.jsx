import './styles/sponsors.css';
import sponsorsData from './data/data-sponsors';
import { useState, useEffect } from 'react';

function Sponsors() {
  const [position, setPosition] = useState(0);
  const sponsorCount = sponsorsData.length;
  const totalSponsors = sponsorsData.concat(sponsorsData);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prevPosition) => {
        if (prevPosition <= -100 * (sponsorCount + 1)) {
          return 0;
        }
        return prevPosition - 1;
      });
    }, 15); // Kecepatan scroll
  
    return () => clearInterval(interval);
  }, [sponsorCount]);

  return (
    <div className='sponsors py-4'>
      <h3 className='text-center text-white fw-bolder m-3'>DIDUKUNG OLEH:</h3>
      <div className="marquee-container d-flex align-items-center overflow-hidden">
        {totalSponsors.map((sponsor, index) => (
          <div
            key={`${sponsor.id}-${index}`}
            className={`sponsors-img bg-white rounded p-3 ${index !== 0 ? 'ms-3' : ''}`}
            style={{
              transform: `translateX(${position}%)`,
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