import { createGlobalStyle } from 'styled-components';
const color1 = '#acecf7'
const color2 = '#D6F6DD'
const color3 = '#F9A620'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    background-color:#FFF8F0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;

export default GlobalStyle;