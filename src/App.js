import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import React, { Component, useState, useEffect, createContext } from 'react';
import Home from './Components/Home';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import YouTube from './Components/YouTube';
import News from './Components/News';
import Search from './Components/Search';
export const ListContext = createContext();
function App() {
  const [articles, setArticles] = useState([]);
  const [term, setTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const API = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=world/${term}&api-key=${process.env.REACT_APP_NEW_YORK_TIMES_API_KEY}`;

  useEffect(() => {
    console.log('useEffect runs: API fetch');
    fetch(API)
      .then((response) => response.json())
      .then((result) => setArticles(result.response.docs));
    setIsLoading(false);
  }, [term]);
  console.log(articles);
  // yyyy-MM-dd
  // const date_input = articles.pub_date;

  return (
    <Router>
      <div className='App'>
        <ListContext.Provider value={{ articles, isLoading, term, setTerm }}>
          <Nav />

          <Switch>
            <Route exact path='/'></Route>

            <Route path='/home'>
              <Home />
            </Route>
            <Route path='/news'>
              <News />
            </Route>
            <Route path='/youtube'>
              <YouTube />
            </Route>
          </Switch>
        </ListContext.Provider>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
