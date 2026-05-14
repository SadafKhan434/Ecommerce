import React from 'react';
import { Container, Button } from 'react-bootstrap';

const toursData = [
  { date: 'JUL 16', city: 'DETROIT, MI', venue: 'DTE ENERGY MUSIC THEATRE' },
  { date: 'JUL 19', city: 'TORONTO, ON', venue: 'BUDWEISER STAGE' },
  { date: 'JUL 22', city: 'BRISTOW, VA', venue: 'JIGGY LUBE LIVE' },
  { date: 'JUL 29', city: 'PHOENIX, AZ', venue: 'AK-CHIN PAVILION' },
  { date: 'AUG 2', city: 'LAS VEGAS, NV', venue: 'T-MOBILE ARENA' },
  { date: 'AUG 7', city: 'CONCORD, CA', venue: 'CONCORD PAVILION' }
];

const Home = () => {
  return (
    <section className="py-4">
      <Container style={{ maxWidth: '800px' }}>
        <h2 className="text-center my-4 fw-bold font-monospace" style={{ letterSpacing: '0.05em' }}>
          TOURS
        </h2>
        <div className="mb-5">
          {toursData.map((tour, index) => (
            <div 
              key={index} 
              className="d-flex align-items-center justify-content-between p-3 my-2 border-bottom"
              style={{ fontSize: '0.95rem' }}
            >
              
              <span className="fw-semibold text-dark text-start" style={{ width: '100px' }}>
                {tour.date}
              </span>
              
            
              <span className="text-muted text-start text-truncate px-2" style={{ width: '140px' }}>
                {tour.city}
              </span>
              
            
              <span className="text-muted  text-start text-truncate flex-grow-1 px-2">
                {tour.venue}
              </span>
              
            
              <Button variant="primary"
                variant="info" 
                size="sm" 
                className=" fw-bold px-4 "
                style={{ borderRadius: '4px', fontSize: '0.85rem' }}
              >
                BUY TICKETS
              </Button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Home;
