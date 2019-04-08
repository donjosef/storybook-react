import React, { Component } from 'react';
import Switch from './Switch/Switch';

class SwitchContainer extends Component {
    state = {
        on: true
    }

    toggleHandler = () => {
        this.setState(prevState => ({
            on: !prevState.on
        }))
    }

    render() {
        return (
            <Switch on={this.state.on} toggle={this.toggleHandler} />
        )
    }
}

export default SwitchContainer;
