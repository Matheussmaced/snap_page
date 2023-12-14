import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    :focus {
      outline: 0;
    }

    html {
      background-color: ${(props) => props.theme.white};
      color: ${(props) => props.theme['dark-gray']};
    }
  }
`
