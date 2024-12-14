// src/styles/common/GlobalStyle.js

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    font-family: Arial, sans-serif;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  a {
    color: ${({ theme }) => theme.link};
    text-decoration: none;
  }

  a:hover {
    color: ${({ theme }) => theme.linkHover};
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme.heading};
  }

  p, span, li {
    color: ${({ theme }) => theme.spanAndP} !important;
  }

  strong {
    color: ${({ theme }) => theme.strong} !important;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  * {
    border-color: ${({ theme }) => theme.borderColor} !important;
  }
`;

export default GlobalStyle;
