import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  body: '#fff',

  infoContainer: 'aliceblue',
  navFooter: '#e7f9ff',
};
export const darkTheme = {
  body: 'rgb(51, 51, 51)',
  fontColor: '#fff',
  navFooter: 'rgb(53, 76, 102)',
  infoContainer: 'rgb(205, 227, 246)',
  infoContainerHover: 'aliceblue',
};

export const GlobalStyles = createGlobalStyle`

body {
  background-color: ${(props) => props.theme.body};
}
.main_nav_container{
  background-color: ${(props) => props.theme.navFooter};

}
.main_footer_container{
  background-color: ${(props) => props.theme.navFooter};

}
.news_container{
  background-color: ${(props) => props.theme.infoContainer};

}
.news_container:hover{
  background-color: ${(props) => props.theme.infoContainerHover};

}
.youtubeContainer{
  background-color: ${(props) => props.theme.infoContainer};

}
.youtubeContainer:hover{
  background-color: ${(props) => props.theme.infoContainerHover};

}

`;
