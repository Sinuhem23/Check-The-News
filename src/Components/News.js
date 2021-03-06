import React, { useContext } from 'react';
import { ListContext } from '../App';
import nytLogo from '../Images/NYTimes_svg.png';
import '../CSS/news.css';
const moment = require('moment');

function News() {
  const context = useContext(ListContext);
  let articles = context.articles;
  let isLoading = context.isLoading;
  let term = context.term;

  return (
    <div className='main_container'>
      <div className='news_container'>
        <div className='nytLogoContainer'>
          <h1 className='infoMainTitle'>
            <img className='nytImg' src={nytLogo} alt='ny'></img> New York Times{' '}
          </h1>
        </div>

        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <section>
            <ul>
              {articles.map((item) => (
                <li key={item._id}>
                  <div className='newsLi '>
                    <div className='location'>
                      <p className='section_name'>
                        {!item.subsection_name ? (
                          <p>{term.charAt(0).toUpperCase() + term.slice(1)}</p>
                        ) : (
                          item.subsection_name
                        )}
                      </p>
                      <p className='section_name'>{item.section_name}</p>
                    </div>
                    <h3 className='news_title'>{item.headline.main}</h3>
                    <p className='news_summary'>{item.snippet}</p>
                    <p className='author'>{item.byline.original}</p>
                    <p className='publish_date'>
                      {moment(item.pub_date).format('dddd, MMMM Do YYYY')}
                    </p>

                    <a
                      className='webLink'
                      rel='noreferrer'
                      target='_blank'
                      href={item.web_url}
                    >
                      Web Resource
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
}

export default News;
