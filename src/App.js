import React, { Component } from 'react';
import Accordion from './components/Accordion/Accordion';
import AccordionItem from './components/Accordion/AccordionItem/AccordionItem';
import { Provider } from 'react-redux';
import store from './lib/redux';

import InboxScreen from './components/InboxScreen';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <InboxScreen />
        <Accordion>
          <AccordionItem/>
          <AccordionItem/>
        </Accordion>
      </Provider>
    );
  }
}

export default App;