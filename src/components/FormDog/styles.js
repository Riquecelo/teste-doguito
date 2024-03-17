import styled from "styled-components";

export const Container = styled.div`

    width: 100%;
    height: auto;

    >form{
        display: flex;
        flex-direction: column;

        >label{
            max-width: 450px;
            width: 100%;
            height: 30px;
            margin-bottom: 10px;

            display: flex;
            justify-content: space-between;

            color: ${({theme}) => theme.COLORS.GRAY_100};
            font-weight: bold;

            >input{
                margin-left: 10px;
                padding-left: 5px;
                border: none;
                border-radius: 5px;
                color: ${({theme}) => theme.COLORS.WHITE};
                background: ${({theme}) => theme.COLORS.BACKGROUND_700};
            }
        }

        >button{
            width: 100%;
            height: 40px;
            border: none;
            border-radius: 5px;

            display: flex;
            align-items: center;
            justify-content:center ;

            font-weight: bold;
            text-transform: uppercase;
            color: ${({theme}) => theme.COLORS.BACKGROUND_900};
            background: ${({theme}) => theme.COLORS.ORANGE};
        }
    }
`;