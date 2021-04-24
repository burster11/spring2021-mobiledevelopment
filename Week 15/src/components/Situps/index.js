import React from 'react';

function Situps (props) {

    return (
        <div>
            <h2>Situps: {props.state.situps}</h2>
            <button onClick={() => props.dispatch({"type": "increment2"})}>Add 10</button>
            <button onClick={() => props.dispatch({"type": "decrement2"})}>Subtract 10</button>
        </div>
    )
}

 export default Situps;