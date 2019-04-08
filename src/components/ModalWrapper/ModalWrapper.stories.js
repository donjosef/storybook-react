import React from 'react';
import ModalWrapper from './ModalWrapper';
import { storiesOf } from '@storybook/react';

storiesOf('ModalWrapper', module)
    .addDecorator(story => <div style={{ width: '90%', margin: 'auto' }}>{story()}</div>)
    .add('default', () => (
        <ModalWrapper />
    ));