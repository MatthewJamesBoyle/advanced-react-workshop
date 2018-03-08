import React, {Component} from 'react';

const withMouse = Com => {
    return class ModifedComponent extends Component {
       
        state = {
            x: 0,
            y: 0,
        };

        onMouseMove = e =>  {
            this.setState({ x: e.screenX, y: e.screenY });
        }
   
        render() {
            const { x, y } = this.state;
            return (
                <div onMouseMove={e => this.onMouseMove(e)}>
                    With mouse movement
                 <Com {...this.props} mouseX={x} mouseY={y} />
                </div>
            );    
        }
    };
}

export default withMouse;