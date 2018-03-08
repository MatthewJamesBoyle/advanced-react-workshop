import React, { Component } from 'react';

export default class MouseTracker extends Component {
    state = {
        x: 0,
        y: 0
    };
    onMouseMove = e => {
        this.setState({ x: e.screenX, y: e.screenY });
    }

    render() {
        const { x, y } = this.state;
        return (
            <div onMouseMove={e => this.onMouseMove(e)}  >
                {this.props.children({ x, y })}
            </div>
            )
        }
    
    }
