import React, { useState, useEffect } from 'react';


const Clock = () => {

    const [clock, setClock] = useState(new Date());

    useEffect(() => {
        // Update the document title using the browser API
        console.log(`You clicked ${clock} times`);
    });
    
    // setInterval(() => setClock(new Date()), 1000);

    return (
        <div>
            Clock
            <div>
                { clock.toLocaleTimeString() }
            </div>
        </div>
    );

}


export default Clock;