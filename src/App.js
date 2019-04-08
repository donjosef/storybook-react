import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './lib/redux';

import InboxScreen from './components/InboxScreen';
import SwitchContainer from './components/SwitchContainer/SwitchContainer';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <InboxScreen />
        <SwitchContainer />
      </Provider>
    );
  }
}

export default App;