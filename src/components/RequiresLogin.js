import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Header from './Header';
import { Ripple } from 'react-spinners-css';

export default () => Component => {
  function RequiresLogin(props) {
    const { authenticating, loggedIn, error, ...passThroughProps } = props;
    if (authenticating) {
      return (
        <div>
          <Header />
          <Container>
            <Row className='mt-3 justify-content-center align-middle'>
              <Ripple />
            </Row>
          </Container>
        </div>
      );
    } else if (!loggedIn || error) {
      return <Redirect to='/' />;
    }

    return <Component {...passThroughProps} />;
  }

  const displayName = Component.displayName || Component.name || 'Component';
  RequiresLogin.displayName = `RequiresLogin(${displayName})`;

  const mapStateToProps = (state, props) => ({
    authenticating: state.auth.loading,
    loggedIn: state.auth.currentUser !== null,
    error: state.auth.error
  });

  return connect(mapStateToProps)(RequiresLogin);
};
