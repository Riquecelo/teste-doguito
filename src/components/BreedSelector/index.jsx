import React, { useState, useEffect } from 'react';

export const BreedSelector = ({ onSelect }) => {
    const [breeds, setBreeds] = useState([]);

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/list/all')
        .then(response => response.json())
        .then(data => {
            setBreeds(Object.keys(data.message));
        });
    }, []);

    return (
        <select onChange={(e) => onSelect(e.target.value)}>
            <option value="">Select a breed</option>
            {breeds.map(breed => (
                <option key={breed} value={breed}>{breed}</option>
            ))}
        </select>
    );
};


