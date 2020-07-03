import React from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../config';
import './MyPractice.css';
import requiresLogin from './RequiresLogin';

class PracticeTime extends React.Component {
  // State will apply to the practices object which is set to loading by default
  state = {
    practices: [],
    isLoading: true,
    errors: null
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
  }
  // Putting that data to use
  render() {
    return (
      <div>
        {this.state.practices.map(practice => (
          <li key={practice.id}> {practice.timePracticed}</li>
        ))}
      </div>
    );
  }
}
export default requiresLogin()(PracticeTime);
