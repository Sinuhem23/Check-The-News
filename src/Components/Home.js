import React, { Component, useState, useEffect } from 'react';
import YouTube from './YouTube';
import News from './News';
import Search from './Search';
import '../CSS/home.css';

const Home = () => {
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
};
export default Home;
