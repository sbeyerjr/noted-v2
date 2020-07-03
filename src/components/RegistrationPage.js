import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import RegistrationForm from './RegistrationForm';
import Header from './Header';
import './RegistrationPage.css';

export function RegistrationPage(props) {
  // If we are logged in (which happens automatically when registration
  // is successful) redirect to the user's dashboard
  if (props.loggedIn) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <div>
      <Header />
    <div className="wrapper">
      <div className="flex-container">
        <h2 className="intro-text">Create An Account</h2>
        <RegistrationForm />
        <div className="flex-item">
          <Link to="/login">
            <button className="fp-button">Login</button>
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

export default connect(mapStateToProps)(RegistrationPage);
