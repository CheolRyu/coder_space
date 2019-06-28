import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import HomeScreen from './screens/Homescreens';

const INITIAL_STATE = {
  action: 'openMenu'
};

const reducer = (state = INITIAL_STATE) => {
  return state;
};

const store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    <HomeScreen />
  </Provider>
);

export default App;
