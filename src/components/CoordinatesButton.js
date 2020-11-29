// Code CoordinatesButton Component Here
import React from 'react';


class CoordinatesButton extends React.Component {
// parent (index.js) passed down a FUNCTION prop --- onReceiveCoordinates={mouse => console.log}

    handleClick = (e) => {
        // On click of the button, create an array with two elements: the X and Y coordinates of the mouse. 
        // Find these using the event data aka e
        this.props.onReceiveCoordinates([e.clientX, e.clientY])
    }

    render(){
        return(
            <button onClick={this.handleClick}>Coordinates</button>
        )
    }
}
export default CoordinatesButton;