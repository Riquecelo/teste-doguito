import React, { useState } from 'react';


import { BreedSelector } from "../../components/BreedSelector";
import { DogImage } from "../../components/DogImage";
import { FormDog } from '../../components/FormDog';

export function Home() {

  const [selectedBreed, setSelectedBreed] = useState('');

  const handleBreedSelect = (breed) => {
    setSelectedBreed(breed);
  };

  return (
    <>

      <h1>Doguito</h1>
      <BreedSelector onSelect={handleBreedSelect}/>
      <FormDog/>
      <DogImage breed={selectedBreed}/>
      
    </>
  )
}
