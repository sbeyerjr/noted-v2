import React from 'react';
import { connect } from 'react-redux';
import { clearAuth } from '../actions/Auth';
import { clearAuthToken } from '../local-storage';
import { fetchProtectedData } from '../actions/ProtectedData';
import './Header.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

export class HeaderBar extends React.Component {
  state = { visible: false };

  componentDidMount() {
    this.props.dispatch(fetchProtectedData());
  }

  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  render() {
    // Only render the log out button if we are logged in
    let logOutButton;
    let myDashboard;
    let logInButton;
    let signUpButton;
    if (this.props.loggedIn) {
      logOutButton = <Nav.Link onClick={() => this.logOut()}>Logout</Nav.Link>;
      myDashboard = (
        <Nav.Link href='/dashboard' label='My Dashboard'>
          My Dashboard
        </Nav.Link>
      );
    } else {
      logInButton = (
        <Button
          variant='light'
          size='sm'
          href='/login'
          label='Login'
          className='pl-4 pr-4'
        >
          Login
        </Button>
      );
      signUpButton = (
        <Button
          size='sm'
          variant='outline-light'
          href='/register'
          label='Sign up for free'
          style={{ marginRight: '10px' }}
        >
          Sign up for free
        </Button>
      );
    }
    return (
      <div>
        <Navbar
          collapseOnSelect
          expand='lg'
          variant='dark'
          style={{ backgroundColor: '#673AB7' }}
        >
          <Navbar.Brand href='/'>
            <img
              src='img/notedwhitelogo.png'
              className='img-small'
              alt='logo'
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='ml-auto'>
              {signUpButton}
              {logInButton}
              {myDashboard}
              {logOutButton}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null,
  loggedOut: state.auth.currentUser == null
});

export default connect(mapStateToProps)(HeaderBar);
