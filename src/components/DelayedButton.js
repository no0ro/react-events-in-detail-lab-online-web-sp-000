import React from 'react';

class DelayedButton extends React.Component {
    handleThisClick = (e) => {
        e.persist();
        const time = this.props.delay 

        setTimeout(() => {
            this.props.onDelayedClick(e)
        }, time )
    }

    render(){
        return(
            <button onClick={this.handleThisClick} ></button>
        )
    }
}
export default DelayedButton;
// By the time the setTimeout fires, the event object will have already been returned to the pool. So how can we fix that? -- e.persist();
