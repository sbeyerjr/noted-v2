import React from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../config';
import Header from './Header';
import './MyPractice.css';
import requiresLogin from './RequiresLogin';

class Practices extends React.Component {
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
        <Header />
        <div className="wrapper">
          <div className="flex-container">
            <div className="table-container" role="table" aria-label="Destinations">
              <div className="flex-table header" role="rowgroup">
                <div className="flex-row first" role="columnheader">
                  DATE
                </div>
                <div className="flex-row" role="columnheader">
                  MINUTES PRACTICED
                </div>
                <div className="flex-row" role="columnheader">
                  SCALES PRACTICED
                </div>
                <div className="flex-row" role="columnheader">
                  OTHER MUSIC PRACTICED
                </div>
              </div>
              <div>
                {this.state.practices.map(practice => (
                  <div className="flex-table row" role="rowgroup">
                    <div className="flex-row first" role="cell">
                      <li key={practice.id}> {practice.date}</li>
                    </div>
                    <div className="flex-row" role="cell">
                      <li key={practice.id}> {practice.timePracticed}</li>
                    </div>
                    <div className="flex-row" role="cell">
                      <li key={practice.id}>{practice.scales}</li>
                    </div>
                    <div className="flex-row" role="cell">
                      <li key={practice.id}> {practice.otherMusic}</li>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default requiresLogin()(Practices);