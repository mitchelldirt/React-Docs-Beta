// Below shows how you can set the state to be an object

// Don't mutate objects instead use the state setter 

// You can create a new object with the same properties and pass that in instead
/*
NEW OBJECT
const nextPosition = {}; 
nextPosition.x = e.clientX;
nextPosition.y = e.clientY;

SET STATE TO BE THE OBJECT
setPosition(nextPosition);
*/
import { useState } from 'react';
export default function MovingDot() {
    const [position, setPosition] = useState({
        x: 0,
        y: 0
    });
    return (
        <div
            onPointerMove={e => {
                setPosition({
                    x: e.clientX,
                    y: e.clientY
                });
            }}
            style={{
                position: 'relative',
                width: '100vw',
                height: '100vh',
            }}>
            <div style={{
                position: 'absolute',
                backgroundColor: 'red',
                borderRadius: '50%',
                transform: `translate(${position.x}px, ${position.y}px)`,
                left: -10,
                top: -10,
                width: 20,
                height: 20,
            }} />
        </div>
    );
}


export default function Form() {
    const [person, setPerson] = useState({
        firstName: 'Barbara',
        lastName: 'Hepworth',
        email: 'bhepworth@sculpture.com'
    });

    function handleChange(e) {
        setPerson({
            // Use spread operator to copy over the current person
            ...person,
            // Grab the name of the input and set that to the value of the input
            // Cuts down on needing multiple functions for this
            [e.target.name]: e.target.value
        });
    }

    return (
        <>
            <label>
                First name:
                <input
                    name="firstName"
                    value={person.firstName}
                    onChange={handleChange}
                />
            </label>
            <label>
                Last name:
                <input
                    name="lastName"
                    value={person.lastName}
                    onChange={handleChange}
                />
            </label>
            <label>
                Email:
                <input
                    name="email"
                    value={person.email}
                    onChange={handleChange}
                />
            </label>
            <p>
                {person.firstName}{' '}
                {person.lastName}{' '}
                ({person.email})
            </p>
        </>
    );
}

// I took this code which had 4 event handlers and
// shortened it up to 2 by naming the inputs and using a single event handler
import { useState } from 'react';

export default function Form() {
    const [person, setPerson] = useState({
        name: 'Niki de Saint Phalle',
        artwork: {
            title: 'Blue Nana',
            city: 'Hamburg',
            image: 'https://i.imgur.com/Sd1AgUOm.jpg',
        }
    });

    function handleNameChange(e) {
        setPerson({
            ...person,
            name: e.target.value
        });
    }

    function handleArtChange(e) {
        setPerson({
            ...person,
            artwork: {
                ...person.artwork,
                [e.target.name]: e.target.value
            }
        });
    }

    return (
        <>
            <label>
                Name:
                <input
                    value={person.name}
                    onChange={handleNameChange}
                />
            </label>
            <label>
                Title:
                <input
                    value={person.artwork.title}
                    onChange={handleArtChange}
                    name="title"
                />
            </label>
            <label>
                City:
                <input
                    value={person.artwork.city}
                    onChange={handleArtChange}
                    name="city"
                />
            </label>
            <label>
                Image:
                <input
                    value={person.artwork.image}
                    onChange={handleArtChange}
                    name="image"
                />
            </label>
            <p>
                <i>{person.artwork.title}</i>
                {' by '}
                {person.name}
                <br />
                (located in {person.artwork.city})
            </p>
            <img
                src={person.artwork.image}
                alt={person.artwork.title}
            />
        </>
    );
}

