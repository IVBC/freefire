import { createGlobalStyle } from 'styled-components';
import colors from './colors';

export default createGlobalStyle`
  *, *::after, *::before  {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;

    @media (max-width: 1080px) {
      font-size: 58%;
    }

    @media (max-width: 1080px) {
      font-size: 54%;
    }
  }

  body {
    width: 100%;
    height: 100vh;
    background: ${colors.primary};
    color: #FFF;
    font-family: Mukta, Helvetica, sans-serif;
    overflow-x: hidden;
  }

  body > div#__next  {
    height: 100%;
  }

  img, svg {
    display: block;
    width: 100%;
  }

  a {
    text-decoration: none;
    color: ${colors.white}
  }
`;
