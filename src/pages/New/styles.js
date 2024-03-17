import styled from "styled-components";

export const Container = styled.div`

    width: 100%;
    height: 100vh;

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

    > a button{
        width: 60px;
        height: 60px;

        display: flex;
        align-items: center;
        justify-content: center;

        border: none;
        border-radius:50%;
        background: transparent;

        color : ${({theme}) => theme.COLORS.ORANGE}
    }
`;

export const Section = styled.section`

    width: 100%;
    height: 70%;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;

    >img{
        width: 300px;
        height: 300px;
        position: relative;
        border: 1px solid black;
        border-radius: 40px;
    }
    >img::before{
        content: "";
        width: 300px;
        height: 300px;
        background: ${({theme}) => theme.COLORS.BACKGROUND_700};
        display: block;
        border-radius: 40px;
        position: absolute;
    }

    .info{
        h2{
            color: ${({theme}) => theme.COLORS.GRAY_100};
            margin-bottom: 50px;
        }

        ul li{
            list-style: none;
            margin: 10px 0;
            color: ${({theme}) => theme.COLORS.GRAY_300};

            font-size: 20px;
            font-weight:bold;
        }
    }

`;