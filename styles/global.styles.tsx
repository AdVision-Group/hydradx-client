import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
    @font-face {
      font-family: 'FontOver';
      src: url('/fonts/font_over/Font-Over.otf');
      font-weight: 400;
      font-style: normal;
    }

    @font-face {
      font-family: 'HubotSans';
      src: url('/fonts/hubot-sans/WOFF-2/Hubot-Sans-MediumWide.woff2');
      font-weight: 500;
      font-style: normal;
    }

    @font-face {
      font-family: 'HubotSans';
      src: url('/fonts/hubot-sans/WOFF-2/Hubot-Sans-Medium.woff2');
      font-weight: 550;
      font-style: medium;
    }

    @font-face {
      font-family: 'HubotSans';
      src: url('/fonts/hubot-sans/WOFF-2/Hubot-Sans-BoldWide.woff2');
      font-weight: 900;
      font-style: bold;
    }

    @font-face {
      font-family: 'MonaSans';
      src: url('/fonts/mona-sans/WOFF-2/Mona-Sans-RegularWide.woff2');
      font-weight: 500;
      font-style: normal;
    }

    @font-face {
      font-family: 'MonaSans';
      src: url('/fonts/mona-sans/WOFF-2/Mona-Sans-MediumWide.woff2');
      font-weight: 600;
      font-style: medium;
    }

    @font-face {
      font-family: 'MonaSans';
      src: url('/fonts/mona-sans/WOFF-2/Mona-Sans-BoldWide.woff2');
      font-weight: 700;
      font-style: bold;
    }

    @font-face {
      font-family: 'BlenderProBook';
      src: url('/fonts/blender-pro/BlenderPro-Book.woff2');
      font-weight: 500;
      font-style: normal;
    }




  *, *:before, *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth !important;
  }
  body {
    line-height: 1.5;
    font-size: 1.6rem;
    line-height: 1.5;
    /* background-color: #1E1E1E; */
    background: linear-gradient(0deg, #040713, #040713), #070B1F;
    color: #EBEBEB;
  }


  h1, h2, h3, h4, h5, h6 {
  }
  
  
  a {
    cursor: crosshair;
    text-decoration: none;
  }

  ul, ol {
    list-style: none;
  }

  button {
    cursor: crosshair;
  }
  
  input, button {
    border: none;
    outline: none;
    font-family: inherit;
    &:focus {
      outline: none;
    }
  }

  input {
    font-size: 1.8rem;
  }
`
