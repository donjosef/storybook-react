import React from 'react';
import './Switch.css';
import Proptypes from 'prop-types';

function Switch(props) {
    let barModifier = 'switch__bar_on';
    let ballModifier = 'switch__ball_on';
    if(!props.on) {
        barModifier = 'switch__bar_off';
        ballModifier = 'switch__ball_off';
    }

    return (
        <div className="switch" onClick={props.toggle}>
            <span className="switch__text-left">off</span>
            <div className={`switch__bar ${barModifier}`}>
                <div className={`switch__ball ${ballModifier}`}></div>
            </div>
            <span className="switch__text-right">on</span>
        </div>
    );
}

Switch.propTypes = {
    on: Proptypes.bool.isRequired,
    toggle: Proptypes.func.isRequired
};

Switch.defaultProps = {
    on: true
};

export default Switch;


