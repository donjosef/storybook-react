import React, { Component } from 'react'
import Modal from '../Modal/Modal';
import Button from '../Button/Button';
import Backdrop from '../Backdrop/Backdrop';

class ModalWrapper extends Component {
    state = {
        isOpen: false
    }

    openModal = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    closeModal = () => {
        this.setState({
            isOpen: false
        })
    }

    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <Button type="success" click={this.openModal}>Open Modal</Button>
                <Backdrop open={this.state.isOpen} closeModal={this.closeModal}/>
                <Modal 
                    open={this.state.isOpen} 
                    closeModal={this.closeModal}
                    title={'Modal Title'}>
                    <p>This is the modal body which contains everything you want.</p>
                </Modal>
            </div>
        )
    }
}

export default ModalWrapper;
