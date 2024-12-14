import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
margin: 0;
padding: 0;
box-sizing: border-box;
}

html{
    width: 100%;
    height: 100%;
}


body{
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    width: 100%;
    height: 100%;
}

#root {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100%;
    }    
`;
