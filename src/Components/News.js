import React, { Component, useState, useEffect, useContext } from 'react';
import { ListContext } from '../App';

import '../CSS/news.css';

function News() {
  const context = useContext(ListContext);
  let articles = context.articles;
  let isLoading = context.isLoading;

  return (
    <div className='main_container'>
      <div className='inner_news_container'>
        <div className='newsPg'>
          <div className='newsUl'>
            <h1>New York Times </h1>

            {isLoading ? (
              <h1>Loading...</h1>
            ) : (
              <section>
                {' '}
                <ul>
                  {articles.map((item) => (
                    <li key={item._id}>
                      <div className='newsLi news_info_container'>
                        <p>{item.subsection_name}</p>
                        <p>{item.section_name}</p>
                        <h3 className='news_title'>{item.headline.main}</h3>
                        <p className='news_summary'>{item.snippet}</p>
                        <a target='_blank' href={item.web_url}>
                          Web Resource
                        </a>
                        <p className='author'>{item.byline.original}</p>
                        <p className='publish_date'>{item.pub_date}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
