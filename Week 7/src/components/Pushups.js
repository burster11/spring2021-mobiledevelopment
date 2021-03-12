import React, {useState} from 'react'

function Pushups () {
    const [sitUps, setpushUps] = useState (0);

    return (
        <div>
            <h2>Sit ups:{pushUps}</h2>
            <button onClick={()=> setpushUps(pushUps+1)}>+ 1 Pushup</button>
            <button onClick={()=> setpushUps(0)}>Reset Counter</button>
        </div>
    )
}
export default Pushups;
