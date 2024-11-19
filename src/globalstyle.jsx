import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Poppins:wght@400&display=swap');

*{
margin: 0;
padding: 0;
box-sizing: border-box;
}

body{
width: 100%;

font-family: "Poppins", sans-serif;
font-weight: 400;
}

html,#root {
    width: 100%;
}
`;
