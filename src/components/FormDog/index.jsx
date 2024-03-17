import { useState } from "react";
import { Container } from "./styles";

export function FormDog(){

    const [color, setColor] = useState('');
    const [size, setSize] = useState('');
    const [nickname, setNickname] = useState('');
    const [age, setAge] = useState('');

    const handleSubmit= (e) =>{
        e.preventDefault() 
        localStorage.setItem('color',color)
        localStorage.setItem('size',size)
        localStorage.setItem('nickname', nickname)
        localStorage.setItem('age',age)
    }

    return(
        <Container>
            
                <form onSubmit={handleSubmit}>
                    <label>
                        Cor:
                        <input type="text" value={color} onChange={(e) => setColor(e.target.value)} />
                    </label>
                    <label>
                        Tamanho:
                        <input type="text" value={size} onChange={(e) => setSize(e.target.value)} />
                    </label>
                    <label>
                        Nome:
                        <input type="text" value={nickname} onChange={(e) => setNickname(e.target.value)} />
                    </label>
                    <label>
                        Idade:
                        <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
                    </label>
                    <button type="submit">
                        Salvar
                    </button>
                </form>
            
        </Container>
    )
}