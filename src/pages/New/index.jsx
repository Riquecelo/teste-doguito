import { Container, Header, Section } from "./styles";
import { IoArrowUndo } from "react-icons/io5";
import { IoPawSharp } from "react-icons/io5";

import { Link } from 'react-router-dom';

export function New(){
    const url = localStorage.getItem('imgUrl')
    const cor = localStorage.getItem('color')
    const size = localStorage.getItem('size')
    const nickname = localStorage.getItem('nickname')
    const age = localStorage.getItem('age')

    
    return(
        <Container>
            <Header>
                <Link to="/teste-doguito/">
                    <button>
                        <IoArrowUndo size={40} />
                    </button>
                </Link>
                <h1><IoPawSharp /> Doguito</h1>
            </Header>

            <Section>
                <img src={url} alt="" />

                <div className="info">
                    <h2>Informações do seu doguito.</h2>
                    <ul>
                        <li>Nome: {nickname}</li>
                        <li>Cor: {cor}</li>
                        <li>Tamanho: {size}</li>
                        <li>Idade: {age}</li>
                    </ul>
                </div>
            </Section>
        </Container>
    )
}