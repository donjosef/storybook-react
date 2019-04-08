import React from 'react';
import Switch from './Switch';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withState } from '@dump247/storybook-state'; /* simulate/mock the state. Pass different 'on' prop to Switch component based on current state thanks to withState addon.
This allows us to see the toggled and untoggled stories with their respective design AND, also, more importantly, allows us to set the state and see the components as if there is a re-render caused by a state changing */


storiesOf('Switch', module)
    .addDecorator(story => (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            width: '90%',
            margin: '50px auto'
        }}>{story()}</div>)
    )
    .add('toggled', withState({ on: true })(({ store }) => (
        <Switch on={store.state.on} toggle={() => store.set({on: !store.state.on})} />
    )))
    .add('untoggled', withState({ on: false })(({ store }) => (
        <Switch on={store.state.on} toggle={() => store.set({on: !store.state.on})} />
    )))