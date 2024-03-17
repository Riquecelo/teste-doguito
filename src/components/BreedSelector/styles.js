import styled from "styled-components";

export const Container = styled.div`

    max-width: 250px;
    width: 100%;
    height: 50px;
    border-radius: 5px;
    margin-right: 10%;

    >select{
        width: 100%;
        height: 100%;
        border-radius: 5px;
        padding-left: 10px;
        font-family: "Roboto Slab", serif;
        color: ${({theme}) => theme.COLORS.ORANGE};
            background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};

        >option{
            width: 100%;
            color: ${({theme}) => theme.COLORS.ORANGE};
            background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
        }
    }

`;