import { createGlobalStyle } from 'styled-components';

// Global styles for the font import
const GlobalStyle = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap');

  body {
    font-family: 'Nunito', sans-serif;
  }
`;

export default GlobalStyle;
