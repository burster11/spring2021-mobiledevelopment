import React from 'react';

function Miles (props) {

    return (
        <div>
            <h2>Miles: {props.state.miles}</h2>
            <button onClick={() => props.dispatch({"type": "increment1"})}>Add 1</button>
            <button onClick={() => props.dispatch({"type": "decrement1"})}>Subtract 1</button>
        </div>
    )
}

 export default Miles;