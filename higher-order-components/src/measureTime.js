import React, { Component } from 'react';
import { setInterval } from 'core-js';

const withTimeMeasure = ReactComponent => {
    return class extends Component {
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
            return (
                <ReactComponent {...this.props} elapsedTime={secondsMounted} />
            );
        }
    }
}

export default withTimeMeasure;