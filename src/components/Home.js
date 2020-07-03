import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export default function Home(props) {
  return (
    <div>
      <Header />
      <Container
        fluid
        style={{ height: '300px', backgroundColor: '#2B2484', color: 'white' }}
      >
        <Row>
          <Col sm={6} className='p-5'>
            <h2>
              Can't remember what you practiced yesterday? Noted can help!
            </h2>
            <h5 className='mt-5'>
              Noted is for piano students who want to set consistent practice
              goals and keep track of what they have practiced.
            </h5>
            <Button variant='outline-light' href='/register' className='mt-4'>
              Get Started
            </Button>
          </Col>
          <Col sm={6}>
            <img src='img/piano.svg' style={{ maxWidth: '80%' }} />
          </Col>
        </Row>
        <Row
          className='mt-5 pt-4 justify-content-md-center'
          style={{ color: 'black' }}
        >
          <Col md='auto'>
            <h4>What Can You Do with Noted?</h4>
          </Col>
        </Row>
        <Row
          className='mt-2 justify-content-md-center'
          style={{ color: 'black' }}
        >
          <Col md='auto'>
            <h5>Personalized Dashboard</h5>
          </Col>
          <Col md='auto'>
            <h5>Keep track of what you practiced.</h5>
          </Col>
        </Row>
      </Container>
      <div className='wave-container'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
          <path
            fill='#2b2484'
            fill-opacity='1'
            d='M0,128L80,160C160,192,320,256,480,266.7C640,277,800,235,960,208C1120,181,1280,171,1360,165.3L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z'
          ></path>
        </svg>
      </div>
    </div>
  );
}
