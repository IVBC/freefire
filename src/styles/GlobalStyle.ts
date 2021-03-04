import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *, *::after, *::before  {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: 100%;
    height: 100vh;
    background: #121214;
    color: #FFF;
    font-family: Mukta, Helvetica, sans-serif;
  }

  body > div#__next  {
    height: 100%;
  }
`;
