import React, { Component, useState, useEffect } from 'react';

function News() {
  let [data, setData] = useState([]);

  useEffect(() => {
    console.log('useEffect runs: API fetch');
    fetch('https://jsonplaceholder.typicode.com/posts/')
      .then((response) => response.json())
      .then((result) => setData(result));
  }, []);
  return (
    <div className='main_container'>
      <div className='inner_news_container'>
        <div className='news'>
          <div>
            <h1>NY Times from Country* </h1>
            {data.map((item) => (
              <p key={item.id}>{item.title}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
