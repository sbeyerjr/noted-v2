import React from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../config';
import Header from './Header';
import './MyPractice.css';
import requiresLogin from './RequiresLogin';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { fetchProtectedData } from '../actions/ProtectedData';
import { connect } from 'react-redux';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import PracticeForm from './PracticeForm';

class Practices extends React.Component {
  // State will apply to the practices object which is set to loading by default
  state = {
    practices: [],
    isLoading: true,
    errors: null,
    setShow: false
  };

  // Now we're going to make a request for data using axios
  getPractice() {
    axios
      // This is where the data is hosted
      .get(`${API_BASE_URL}/practice`, {
        headers: {
          Authorization: `Bearer ${localStorage.authToken}`
        }
      })
      // Once we get a response and store data, let's change the loading state
      .then(res => {
        this.setState({ practices: res.data });
      });
  }

  // Let's our app know we're ready to render the data
  componentDidMount() {
    this.getPractice();
    this.props.dispatch(fetchProtectedData());
  }

  handleClose = () => {
    this.getPractice();
    console.log('this worked');
    this.setState({
      setShow: false
    });
  };

  handleOpen = () =>
    this.setState({
      setShow: true
    });

  componentDidUpdate() {
    // Typical usage (don't forget to compare props):

    this.getPractice();
  }

  // Putting that data to use
  render() {
    let practiceAmount;
    let time;
    practiceAmount = this.state.practices.length;
    if (practiceAmount === 1) {
      time = 'time';
    } else {
      time = 'times';
    }

    const minutesTotal = this.state.practices.reduce(
      (totalMinutes, minute) => totalMinutes + minute.timePracticed,
      0
    );

    var num = minutesTotal;
    var hours = num / 60;
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);

    const totalTime = rhours + ' hours and ' + rminutes + ' minutes';

    return (
      <div>
        <Header />
        <Container fluid>
          <Row className='p-4'>
            <Col sm={7} className='p-3'>
              <h4>Welcome back, {this.props.name}</h4>
              <p>
                You have practiced {practiceAmount} {time} so far! Keep it up!
              </p>
              <Button
                onClick={this.handleOpen}
                style={{ backgroundColor: '#181159' }}
              >
                Add a new practice
              </Button>
            </Col>
            <Col sm={5} className='p-3 welcome'>
              <Row>
                <Col>
                  <h4>Practice makes perfect!</h4>
                  <p>So far, you have practiced:</p>
                </Col>
                <Col className='text-center headline minutes p-3 mr-4 ml-4'>
                  <span className='minutes-text'>
                    <b>{totalTime}</b>
                  </span>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className='p-4'>
            <Table responsive className='table-hover table-striped the-table'>
              <thead>
                <tr>
                  <th>#</th>
                  <th>DATE</th>
                  <th>MINUTES PRACTICED</th>
                  <th>SCALES PRACTICED</th>
                  <th>OTHER MUSIC PRACTICED</th>
                </tr>
              </thead>
              {this.state.practices.map((practice, index) => (
                <tbody>
                  <tr>
                    <td>{index + 1}</td>
                    <td>{practice.date}</td>
                    <td>{practice.timePracticed}</td>
                    <td>{practice.scales}</td>
                    <td>{practice.otherMusic}</td>
                  </tr>
                </tbody>
              ))}
            </Table>
          </Row>
          <Modal show={this.state.setShow} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Enter a practice</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <PracticeForm
                handleClose={this.handleClose}
                getPractice={this.getPractice}
              />
            </Modal.Body>
          </Modal>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { currentUser } = state.auth;
  return {
    name: `${currentUser.firstName}`
  };
};

export default requiresLogin()(connect(mapStateToProps)(Practices));
