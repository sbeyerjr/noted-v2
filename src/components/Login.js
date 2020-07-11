import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import LoginForm from './LoginForm';
import Header from './Header';
import './Login.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export function LandingPage(props) {
  // If we are logged in redirect straight to the user's dashboard
  if (props.loggedIn) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <div>
      <Header />
      <Container fluid>
        <Row>
          <Col className='p-5 text-left' style={{ backgroundColor: '#ffffff' }}>
            <h4
              className='text-center'
              style={{ color: '#000000', marginBottom: '30px' }}
            >
              Login
            </h4>
            <div
              className='card reg-card'
              style={{ width: '25rem', padding: '20px' }}
            >
              <LoginForm />
              <div className='demo-box headline'>
                {'Demo User: \n Username: testuser \n Password: music123456'}
              </div>
              <div>
                <Row>
                  <Col>
                    <Button className='mt-4 btn btn-dark btn-block' href='/'>
                      Home
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      className='mt-4 btn btn-dark btn-block'
                      href='/register'
                    >
                      Register
                    </Button>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className='p-0'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
              <path
                fill='#673AB7'
                fill-opacity='1'
                d='M0,96L34.3,101.3C68.6,107,137,117,206,106.7C274.3,96,343,64,411,69.3C480,75,549,117,617,128C685.7,139,754,117,823,112C891.4,107,960,117,1029,128C1097.1,139,1166,149,1234,160C1302.9,171,1371,181,1406,186.7L1440,192L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z'
              ></path>
            </svg>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
