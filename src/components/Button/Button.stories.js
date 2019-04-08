import React from 'react';
import Button from './Button';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

const types = {
    danger: 'danger',
    success: 'success',
    default: 'default',
    outlined: 'outlined'
};

const clickAction = action('button clicked');

storiesOf('Button', module)
    .add('default', () => <Button type={types['default']} click={clickAction}>Default</Button> )
    .add('danger', () => <Button type={types['danger']} click={clickAction}>Danger</Button> )
    .add('success', () => <Button type={types['success']} click={clickAction}>Success</Button>)
    .add('outlined', () => <Button type={types['outlined']} click={clickAction}>Outlined</Button>)