import styled from "styled-components";
import url from "../../assets/dog-black.jpg"

export const Container  = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;

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

`;

export const Section = styled.section`

    width: 100%;
    height: 70%;
    padding: 0 10%;
    display: flex;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_BLACK};

    .container-left{
        height: 100%;
        max-width: 500px;
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_BLACK};
    }

    .container-img{
        height: 100%;
        width: 500px;
        
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
`;