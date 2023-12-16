import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Epilogue', sans-serif;

    :focus {
      outline: 0;
    }

    html {
      background-color: ${(props) => props.theme.white};
      color: ${(props) => props.theme['dark-gray']};
    }
  }
`
