import React from 'react';
import { storiesOf } from '@storybook/react';
import Modal from './Modal';
import { withKnobs, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

const actions = {
    onCloseModal: action('onCloseModal'),
    onContinueModal: action('onContinueModal')
};

storiesOf('Modal', module)
    .addDecorator(withKnobs)
    .addDecorator(story => <div style={{ padding: '2rem' }}>{story()}</div>)
    .add('default', () => (
        <Modal 
            open 
            title={text('The title of Modal', 'Modal with knobs')}
            {...actions}>
            <p>Please see ModalWrapper for more examples and demo of the functionality.</p>
        </Modal>
    ));