import { useState } from "react";

export function FormDog(){

    const [color, setColor] = useState('');
    const [size, setSize] = useState('');
    const [nickname, setNickname] = useState('');
    const [age, setAge] = useState('');

    return(
        <>
            <div>
                <form>
                <label>
                    Color:
                    <input type="text" value={color} onChange={(e) => setColor(e.target.value)} />
                </label>
                <label>
                    Size:
                    <input type="text" value={size} onChange={(e) => setSize(e.target.value)} />
                </label>
                <label>
                    Nickname:
                    <input type="text" value={nickname} onChange={(e) => setNickname(e.target.value)} />
                </label>
                <label>
                    Age:
                    <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
                </label>
                </form>
            </div>
        </>
    )
}