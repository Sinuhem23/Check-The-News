import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { useState, useEffect, createContext } from 'react';
import Home from './Components/Home';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import YouTube from './Components/YouTube';
import News from './Components/News';
import Comments from './Components/Comments';
import useLocalStorage from './Hooks/useLocalStorage';

import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './Components/Theme';

export const ListContext = createContext();
function App() {
  // NEW YORK TIMES API SECTION ////////////
  const [articles, setArticles] = useState([]);
  const [youTube, setYouTube] = useState([]);
  const [term, setTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const [theme, setTheme] = useLocalStorage('light');

  // Styled Components
  const StyledApp = styled.div`
    color: ${(props) => props.theme.fontColor};
  `;
  const StyledNavAndFooter = styled.div`
    navfooter: ${(props) => props.theme.navFooter};
  `;
  const StyledNewsYoutube = styled.div`
    infocontainer: ${(props) => props.theme.infoContainer};
  `;

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  const NYT_API = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=world/${term}&api-key=${process.env.REACT_APP_NEW_YORK_TIMES_API_KEY}`;

  useEffect(() => {
    console.log('useEffect runs: API fetch');
    fetch(NYT_API)
      .then((response) => response.json())
      .then((result) => setArticles(result.response.docs || []));
    setIsLoading(false);
  }, [term, isLoading, NYT_API]);
  console.log(articles);
  // END OF NEW YORK TIMES API SECTION /////////

  // YOUTUBE API SECTION ////////////

  const YT_API = `https://www.googleapis.com/youtube/v3/search?&part=snippet&maxResults=10&q=${term}+politics&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;

  useEffect(() => {
    console.log('useEffect runs: API fetch');
    fetch(YT_API)
      .then((resp) => resp.json())
      .then((res) => setYouTube(res.items || []));
    setIsLoading(false);
  }, [term, isLoading, YT_API]);
  console.log(youTube);

  // END OF YOUTUBE API SECTION //////////

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp>
        <Router>
          <div className='App'>
            <ListContext.Provider
              value={{
                articles,
                youTube,
                isLoading,
                term,
                setTerm,
                themeToggler,
              }}
            >
              <StyledNavAndFooter>
                <Nav />
              </StyledNavAndFooter>

              <Switch>
                <Route exact path='/'>
                  <Home />
                </Route>

                <Route path='/home'>
                  <Home />
                </Route>
                <Route path='/news'>
                  <StyledNewsYoutube>
                    <News />
                  </StyledNewsYoutube>
                </Route>
                <Route path='/youtube'>
                  <StyledNewsYoutube>
                    <YouTube />
                  </StyledNewsYoutube>
                </Route>
                <Route path='/comments'>
                  <Comments />
                </Route>
              </Switch>
            </ListContext.Provider>

            <StyledNavAndFooter>
              <Footer />
            </StyledNavAndFooter>
          </div>
        </Router>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
