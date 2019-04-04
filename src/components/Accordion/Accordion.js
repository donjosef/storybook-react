import React from 'react';

const Accordion = props => {
    return (
        <ul className="accordion">
            {props.children}
        </ul>
    );
}

export default Accordion;