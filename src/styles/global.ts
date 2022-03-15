import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root{
        --background: #f8f2f5;
        --red: #E52e40;
        --blue: #5429cc;
        --blue-light: #6933FF;
        --text-title: #363F5F;
        --text-body: #969C83;
        --shape: #FFFFFF;
        --green: #33CC95;
    }

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html{
        @media (max-width: 1080px){
            font-size: 93.75%;
        }

        @media (max-width: 728px){
            font-size: 87.5%;
        }
    }

    body{
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, button, textarea, input{
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong{
        font-weight: 600;
    }

    button{
        cursor: pointer;
    }

    [disabled]{
        cursor: not-allowed;
        opacity: 0.6;
    }

`;
