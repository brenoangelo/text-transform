import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${props => props.theme['purple-500']};
    border-radius: 0.25rem;
  }

  body {
    background-color: ${props => props.theme['gray-600']};
    color: ${props => props.theme['gray-100']};
    -webkit-font-smoothing: antialiased;
  }

  body, textarea, button, input{
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: 1rem;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .ExampleAdSlot {
    margin-top: 16px;
    height: 250px;
    width: 970px;
    display: block;
    border: solid; //Remove in Production
  }

  /* @media (min-width: 1280px) {
    .ExampleAdSlot {
      display: none !important;
    }
  }

  @media (max-width: 1000px) {
    .ExampleAdSlot {
      width: 728px;
      height: 90px;
    }
  }

  @media (max-width: 750px) {
    .ExampleAdSlot {
      width: 336px;
      height: 280px;
    }
  } */
`