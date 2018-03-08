import React,  { Component } from 'react';
import MouseTracker from './MouseTracker';
import TimeTracker from './TimeTracker';
import FetchData from './DataFetch';
import KeyLogger from './Keylogger';

class App extends Component {
  render() {
    return (
      <div>
        <KeyLogger>
          {({ lastKeyPressed, keysPressed }) => <div>
     <MouseTracker>
          {({ x, y }) =>
          <div>
            <TimeTracker>
              {({ secondsMounted }) => <div>Mounted for: {secondsMounted} </div>}
            </TimeTracker>

            <FetchData url={'https://swapi.co/api/people/1'}>
              {({ loading, data }) => <div> {JSON.stringify(data)}</div>}
            </FetchData>  
              {x} , {y}
            </div>
          }
        </MouseTracker>
         Last key Pressed:{lastKeyPressed}<br /> All keys Pressed:{keysPressed}</div>}
        </KeyLogger>
      </div>
    );
  }
}

export default App;
