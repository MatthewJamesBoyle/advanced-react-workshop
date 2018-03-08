import React, { Component } from 'react';

export default class TimeTracker extends Component{
    state = {
        secondsMounted: 0,
    }
    componentDidMount() {
        this.startTimer();
    }

    startTimer = () => {
        this.interval = setInterval(() => {
            this.setState({
                secondsMounted: this.state.secondsMounted + 1
            })
        }, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const { secondsMounted } = this.state;
        return this.props.children({ secondsMounted }) 
    }
}