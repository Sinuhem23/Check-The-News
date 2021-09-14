import React, { Component, useState, useEffect } from 'react';
import '../CSS/news.css';

function News() {
  let [articles, setArticles] = useState([]);
  let [term, setTerm] = useState('world');

  const API = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${term}&api-key=${process.env.NEW_YORK_TIMES_API_KEY}`;

  useEffect(() => {
    console.log('useEffect runs: API fetch');
    fetch(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${term}&api-key=NGDHuyCPqg46TMbprxsAixEYubGjszdw`
    )
      .then((response) => response.json())
      .then((result) => setArticles(result.response.docs));
  }, []);
  console.log(articles);

  return (
    <div className='main_container'>
      <div className='inner_news_container'>
        <div className='newsPg'>
          <div>
            <h1>NY Times from Country* </h1>
            <ul>
              {articles.map((item) => (
                <li key={item.id}>
                  <div className='news_info_container'>
                    <p>{item.subsection_name}</p>
                    <h3 className='news_title'>{item.headline.main}</h3>
                    <p className='news_summary'>{item.snippet}</p>
                    <a href={item.web_url}>{item.web_url}</a>
                    <p className='author'>{item.byline.original}</p>
                    <p className='publish_date'>{item.pub_date}</p>
                  </div>
                </li>
              ))}
              {/* {articles.response.docs} */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
