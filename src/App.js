import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from './Components/Home';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import YouTube from './Components/YouTube';
import News from './Components/News';

function App() {
  return (
    <Router>
      <div className='App'>
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

        <Footer />
      </div>
    </Router>
  );
}

export default App;
