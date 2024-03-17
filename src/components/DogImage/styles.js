import styled from "styled-components";


export const Container = styled.div`

    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    >img{
        width: 200px;
        height: 200px;
        position: relative;
        border: 1px solid black;
        border-radius: 40px;
    } 
    >img::before{
        content: "";
        width: 200px;
        height: 200px;
        background: ${({theme}) => theme.COLORS.BACKGROUND_700};
        display: block;
        border-radius: 40px;
        position: absolute;
    }
`;