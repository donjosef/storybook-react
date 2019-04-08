import React from 'react';
import Button from '../Button/Button';
import './Modal.css';

function Modal(props) {
    let modalClass = [];

    if (props.open) {
        modalClass.push('modal', 'modal--open');
    } else {
        modalClass.push('modal');
    }

    return (
        <div className={modalClass.join(" ")}>
            <header className="modal__header">
                <h2>{props.title}</h2>
            </header>
            <section className="modal__body">
                {props.children}
            </section>
            <footer className="modal__footer">
                <Button type="danger" click={props.closeModal || props.onCloseModal}>Close</Button>
                <Button type="success" click={props.closeModal || props.onContinueModal}>Continue</Button>
            </footer>
        </div>
    )
}


export default Modal;