import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
    let btnClasses = ['button', props.type];

    return (
        <button className={btnClasses.join(' ')} onClick={(e) => props.click(e.ctrlKey)}>{props.type}</button>
    );
}

Button.propTypes = {
    type: PropTypes.string.isRequired,
    click: PropTypes.func.isRequired
};

export default Button;