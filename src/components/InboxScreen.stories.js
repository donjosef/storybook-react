import React from 'react';
import { storiesOf } from '@storybook/react';
import { PureInboxScreen } from './InboxScreen';
import { action } from '@storybook/addon-actions';
import { Provider } from 'react-redux';
import { defaultTasks } from './TaskList.stories';

// A super-simple mock of a redux store
const store = {
    getState: () => {
        return {
            tasks: defaultTasks,
        };
    },
    subscribe: () => 0,
    dispatch: action('dispatch'),
};

storiesOf('InboxScreen', module)
    .addDecorator(story => <Provider store={store}>{story()}</Provider>)
    .add('default', () => <PureInboxScreen />) //il problema subentra in questa implementazione, perchè quando non c'è errore, PureInboxScreen rende TaskList. TaskList essendo connesso allo store di redux, non riceve nessun state/props. Una soluzione a questa è usare un decorator, che storybook ci fornisce, per simulare
    .add('error', () => <PureInboxScreen error="Something" />);