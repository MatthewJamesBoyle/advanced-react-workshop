import React, { Component } from 'react';

export default class Keylogger extends Component{
    state = {
        lastKeyPressed:"",
        keysPressed :""
    }


    onKeypressed = (e) => {
        this.setState({
            lastKeyPressed: e.key,
            keysPressed: this.state.keysPressed + e.key,
        })
    }

    render() {
        const { lastKeyPressed, keysPressed } = this.state;
        return (
            <div onKeyDown={e => this.onKeypressed(e)}
                ref={ref => ref && ref.focus()}
                tabIndex="0">
                {this.props.children({ lastKeyPressed, keysPressed })}
            </div>
        )
    }
}