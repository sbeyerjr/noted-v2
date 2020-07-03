import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import LoginForm from './LoginForm';
import Header from './Header';
import './Login.css';

export function LandingPage(props) {
  // If we are logged in redirect straight to the user's dashboard
  if (props.loggedIn) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div>
      <Header />
      <div className="wrapper">
        <div className="flex-container">
          <h2 className="intro-text">Login</h2>
          <LoginForm />
          <div className="demo-info">
          <h3>Demo User:</h3>
          <p>Username: testuser</p>
          <p>Password: music123456</p>
          </div>
          <div className="flex-item">
            <Link to="/register">
              <button className="fp-button">Register</button>
            </Link>
            <Link to="/">
              <button className="fp-button">Back Home</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
