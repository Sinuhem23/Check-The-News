import React from 'react';
import YouTube from './YouTube';
import News from './News';
import Search from './Search';
import Votes from './Votes';
import '../CSS/home.css';
import { Link } from 'react-router-dom';

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
      {/* Leave a comment button */}
      <div className='leaveCommentLink'>
        <h3> Want to leave a comment?</h3>
        <Link className='cLink' to='/comments'>
          Yes
        </Link>
      </div>
    </div>
  );
};
export default Home;
