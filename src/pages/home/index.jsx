import React, { useState } from 'react';

import { BreedSelector } from "../../components/BreedSelector";
import { DogImage } from "../../components/DogImage";

export function Home() {

  const [selectedBreed, setSelectedBreed] = useState('');

  const handleBreedSelect = (breed) => {
    setSelectedBreed(breed);
  };
  return (
    <>
      
      <h1>Doguito</h1>
      <BreedSelector onSelect={handleBreedSelect}/>
      <DogImage breed={selectedBreed}/>
    </>
  )
}
