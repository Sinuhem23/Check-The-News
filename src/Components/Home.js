import React, { Component } from 'react';
import YouTube from './YouTube';
import News from './News';
import Search from './Search';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <Search />
        </div>
        <div>
          <YouTube />
        </div>
        <div>
          <News />
        </div>
      </div>
    );
  }
}
