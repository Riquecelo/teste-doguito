import React, { useState } from 'react';
import { IoPawSharp } from "react-icons/io5";
import { Container, Header, Section, Footer } from './styles'

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
      
      <Header>
        
        <h1><IoPawSharp /> Doguito</h1>
        <BreedSelector onSelect={handleBreedSelect}/>
      </Header>
      
      <Section>
        <div className='container-left'>
          <FormDog />
          <DogImage breed={selectedBreed}/>
        </div>
        <div className='container-img'></div>
      
      </Section>
    
      <Footer>
      <Link to="/teste-doguito/new">
        <button type="button" >
            visualizar
        </button>
      </Link>
      </Footer>
    </Container>
  )
}
