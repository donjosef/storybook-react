import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
    let btnClasses = ['button', props.type];

    return (
        <button className={btnClasses.join(' ')} onClick={props.click}>{props.children}</button>
    );
}

Button.propTypes = {
    type: PropTypes.string.isRequired,
    click: PropTypes.func.isRequired
};

export default Button;