import { useState } from 'react';

export default function Counter() {
    const [number, setNumber] = useState(0);

    // Example of updater function to update state multiple times within an event
    return (
        <>
            <h1>{number}</h1>
            <button onClick={() => {
                setNumber(n => n + 1);
                setNumber(n => n + 1);
                setNumber(n => n + 1);
            }}>+3</button>
        </>
    )
}

// This is how the react queue works! :)
export function getFinalState(baseState, queue) {
    let finalState = baseState;

    for (let update of queue) {
        if (typeof update === 'function') {
            // Apply the updater function.
            finalState = update(finalState);
        } else {
            // Replace the next state.
            finalState = update;
        }
    }

    return finalState;
}