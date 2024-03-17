import React, { useState } from 'react';
import { Container } from './styles'

import { BreedSelector } from "../../components/BreedSelector";
import { DogImage } from "../../components/DogImage";
import { FormDog } from '../../components/FormDog';
import { Link } from 'react-router-dom';

export function Home() {

  const [selectedBreed, setSelectedBreed] = useState('');

  const handleBreedSelect = (breed) => {
    setSelectedBreed(breed);
  };

  return (
    <Container>
      
      <h1>Doguito</h1>
      <BreedSelector onSelect={handleBreedSelect}/>
      <FormDog/>
      <DogImage breed={selectedBreed}/>
    
      <Link to="/teste-doguito/new">
      
      <button type="button" >
          visualizar
      </button>
      </Link>
      
    </Container>
  )
}
