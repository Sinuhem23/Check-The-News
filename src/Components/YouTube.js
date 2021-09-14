import React, { Component, useState, useEffect } from 'react';
import '../CSS/youtube.css';
function YouTube() {
  let [data, setData] = useState([]);

  useEffect(() => {
    console.log('useEffect runs: API fetch');
    fetch('https://jsonplaceholder.typicode.com/posts/')
      .then((response) => response.json())
      .then((result) => setData(result));
  }, []);
  return (
    <div className='main_container'>
      <div className='inner_youtube_container'>
        <div className='youtubePg'>
          <div>
            <h1>YouTube</h1>
            {data.map((item) => (
              <p key={item.id}>{item.title}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default YouTube;
