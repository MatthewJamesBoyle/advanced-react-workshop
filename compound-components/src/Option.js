import React, { Component } from 'react';

export default class Option extends Component {
    render() {
        const { active, onSelect, children } = this.props;
        return (
            <div
                onClick={onSelect}
                style={{
                    backgroundColor : active ? 'red' : 'green'
                }}
                onClick={onSelect}
            >
                {children}
            </div>
        );
    }
}