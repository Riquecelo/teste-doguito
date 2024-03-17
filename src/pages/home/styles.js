import styled from "styled-components";
import url from "../../assets/dog-black.jpg"

export const Container  = styled.div`
    width: 100%;
    height: 100vh;
    overflow-y: auto;

    display: flex;
    flex-direction: column;
    justify-content: space-around;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_BLACK};

`;

export const Header = styled.header`

    height: 100px;
    width: 100%;
    padding: 0 10%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};

    border-bottom-width:1px ;
    border-bottom-style: solid;
    border-bottom-color: ${({theme}) => theme.COLORS.BACKGROUND_700};

    > h1{
        color : ${({theme}) => theme.COLORS.ORANGE}
    }

`;

export const Section = styled.section`

    width: 100%;
    height: 100%;
    max-height: 70%;
    padding: 0 10%;
    display: flex;
    justify-content: space-between;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_BLACK};

    .container-left{
        height: 100%;
        width: 100%;
        max-width: 700px;

        padding-top: 10px;

        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_BLACK};
    }

    .container-img{
        height: 100%;
        width: 100%;
        max-width: 500px;
        
        background: url(${url}) no-repeat center center;
        background-size: contain;
    }
`;

export const Footer = styled.footer`
    height: 10%;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_BLACK};

    >a button{
        width: 200px;
        height: 40px;
        border: none;
        border-radius: 5px;

        display: flex;
        align-items: center;
        justify-content: center;

        text-transform: uppercase;
        font-weight: bold;

        color: ${({theme}) => theme.COLORS.BACKGROUND_900};
        background: ${({theme}) => theme.COLORS.ORANGE};
    }
`;