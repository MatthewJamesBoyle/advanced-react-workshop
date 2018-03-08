import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import withMouse from './withMouse';
import withMeasureTime from './measureTime';
import withData from './fetchData';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          {this.props.mouseX},
          {this.props.mouseY}
        </p>
        <p>
          Time mounted: {this.props.elapsedTime}
          {console.log(this.props.data)}
          {JSON.stringify(this.props.data)}
        </p>
      </div>
    );
  }
}

export default withData('https://swapi.co/api/people/1')(withMeasureTime(withMouse(App)));
