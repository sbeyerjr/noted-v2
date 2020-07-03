import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import Home from './Home';
import store from '../store';

describe('<Dashboard />', () => {
  it('Renders without crashing', () => {
    shallow(
        <Provider store={store}>
        <Home />
        </Provider>);
  });
});