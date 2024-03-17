import React, { useState, useEffect } from 'react';
import { Container } from './styles'

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
        <Container>
        <select onChange={(e) => onSelect(e.target.value)}>
            <option value="" disabled selected>Selecione a raça do seu doguito</option>
            {breeds.map(breed => (
                <option key={breed} value={breed}>{breed}</option>
            ))}
        </select>
        </Container>
    );
};


