import React from 'react';
import { useState } from 'react';
import { sculptureList } from './data.js';

export default function SculptureGallery() {
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);

    let min = 0;
    let max = sculptureList.length - 1;

    function handleNextClick() {
        if (index === max) {
            setIndex(0);
            return;
        }
        setIndex(index + 1);
    }

    function handlePreviousClick() {
        if (index === min) {
            setIndex(max);
            return;
        }
        setIndex(index - 1);
    }

    function handleDetailsClick() {
        setShowMore(!showMore);
    }

    let sculpture = sculptureList[index];
    return (
        <>
            <button onClick={handleNextClick}>
                Next
            </button>
                 <button onClick={handlePreviousClick}>
               Previous 
            </button>

            
            <h2>
                <i>{sculpture.name} </i>
                by {sculpture.artist}
            </h2>
            <h3>
                ({index + 1} of {sculptureList.length})
            </h3>
            <img
                src={sculpture.url}
                alt={sculpture.alt}
            />
            <br />
            <button onClick={handleDetailsClick}>{showMore ? 'Hide' : 'Show'} details</button>
            {showMore && <p>{sculpture.description}</p>}
        </>
    );
}
