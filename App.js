import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import AppNavigator from './navigator/AppNavigator';

const INITIAL_STATE = {
  action: '',
  name: ''
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'OPEN_MENU':
      return { action: 'openMenu' };
    case 'CLOSE_MENU':
      return { action: 'closeMenu' };
    case 'UPDATE_NAME':
      return { name: action.name };
    default:
      return state;
  }
};

const store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    <AppNavigator />
  </Provider>
);

export default App;
