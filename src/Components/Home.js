import React, { Component } from 'react';
import YouTube from './YouTube';
import News from './News';
import Search from './Search';
import '../CSS/home.css';

export default class Home extends Component {
  render() {
    return (
      <div className='main_container'>
        <div className='search'>
          <Search />
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
  }
}
