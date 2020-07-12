import React from 'react';
import Header from './Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { GoDashboard } from 'react-icons/go';
import { BsMusicNoteList } from 'react-icons/bs';

export default function Home(props) {
  return (
    <div>
      <Header />
      <Container fluid style={{ backgroundColor: '#673AB7', color: 'white' }}>
        <Row>
          <Col sm={6} className='p-5'>
            <div className='headline'>
              <h2>
                {
                  "Can't remember what you practiced yesterday? \n Noted can help!"
                }
              </h2>
            </div>
            <h5 className='mt-5'>
              Noted is for piano students who want to set consistent practice
              goals and keep track of what they have practiced.
            </h5>
            <Button variant='outline-light' href='/register' className='mt-4'>
              Get Started
            </Button>
          </Col>
          <Col sm={6} className='piano'>
            <img src='img/piano.png' alt='piano' />
          </Col>
        </Row>
        <Row
          className='mt-5 pt-4 justify-content-md-center'
          style={{ color: 'black', backgroundColor: '#EEEEEE' }}
        >
          <Col md='auto'>
            <h4>What Can You Do with Noted?</h4>
          </Col>
        </Row>
        <Row
          className='pt-2 justify-content-md-center pb-3'
          style={{ color: 'black', backgroundColor: '#EEEEEE' }}
        >
          <Col md='auto'>
            <div className='card text-center pt-3' style={{ width: '18rem' }}>
              <GoDashboard style={{ fontSize: '53px' }} />
              <div className='card-body'>
                <p className='card-text'>
                  Each user receives their own, personalized dashboard to help
                  them see exactly how much they practiced.{' '}
                </p>
              </div>
            </div>
          </Col>
          <Col md='auto'>
            <div className='card text-left pt-3' style={{ width: '18rem' }}>
              <BsMusicNoteList style={{ fontSize: '53px' }} />
              <div className='card-body'>
                <p className='card-text'>
                  Keep track of everything you practiced from yesterday, last
                  week, last month, or even last year!
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
