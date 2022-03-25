import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: 'Inter', sans-serif;
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        overflow: hidden;
    }
`;
export default GlobalStyles;
