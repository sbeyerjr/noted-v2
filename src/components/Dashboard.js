import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './RequiresLogin';
import { fetchProtectedData } from '../actions/ProtectedData';
import PracticeForm from './PracticeForm';
import Header from './Header';
import './Dashboard.css';


export class Dashboard extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchProtectedData());
  }

  render() {
    return (
      <div className="dashboard">
        <Header />
        <div className="wrapper">
          <div className="flex-container">
            <h2 className="flex-item">
              Hey, {this.props.name}! 
            </h2>
            <p className="welcome-text">What did you practice today?</p>
            <PracticeForm />
          </div>
        </div>
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

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
