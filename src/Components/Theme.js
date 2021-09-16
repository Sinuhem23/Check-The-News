import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  body: '#fff',
};
export const darkTheme = {
  body: 'rgb(51, 51, 51)',
  fontColor: '#fff',
};

export const GlobalStyles = createGlobalStyle`

body {
  background-color: ${(props) => props.theme.body};
}

`;
