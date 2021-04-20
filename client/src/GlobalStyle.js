import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`

* {
-webkit-box-sizing: border-box;
   -moz-box-sizing: border-box;
        box-sizing: border-box;
        padding: 0;
        margin: 0;
}

html{
        font-family: "Montserrat", sans-serif;
}

`;

export default GlobalStyle;