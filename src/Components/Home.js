import React from 'react';
import YouTube from './YouTube';
import News from './News';
import Search from './Search';
import Votes from './Votes';
import '../CSS/home.css';

// export const ListContext = createContext();

const Home = () => {
  return (
    <div className='main_container'>
      <div className='search'>
        <Search />
      </div>
      <div className='vote'>
        <Votes />
      </div>
      <div className='inner_container'>
        <div className='news'>
          <News />
        </div>
        <div className='youtube'>
          <YouTube />
        </div>
      </div>
    </div>
  );
};
export default Home;
