import React, { useContext } from 'react';
import '../CSS/youtube.css';
import { ListContext } from '../App';
import ytLogo from '../Images/youtubeSVG.png';

const moment = require('moment');

function YouTube() {
  const context = useContext(ListContext);
  let youTube = context.youTube;
  let isLoading = context.isLoading;

  return (
    <div className='main_container'>
      <div className='youtubeContainer'>
        <div>
          <div className='ytLogoContainer'>
            <img className='ytImg' alt='Logo' src={ytLogo}></img>
            <h1 className='infoTitle'>YouTube</h1>
          </div>

          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <ul>
              {youTube.map((vid, idx) => (
                <div className='iframe_container'>
                  <li key={idx}>
                    <div className='youtubeLi'>
                      <h3 className='ytTitle'>{vid.snippet.title}</h3>
                      <div className='youtubeInfo'>
                        <iframe
                          width='360'
                          height='215'
                          src={`https://www.youtube.com/embed/${vid.id.videoId}`}
                          title='YouTube video player'
                          frameborder='0'
                          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                          allowfullscreen
                        ></iframe>
                        <div>
                          <h4 className='channelTitle'>
                            {vid.snippet.channelTitle}
                          </h4>
                          <p className='ytDescription'>
                            {vid.snippet.description}
                          </p>
                          <p className='ytDate'>
                            {' '}
                            {moment(vid.snippet.publishedAt).format(
                              'dddd, MMMM Do YYYY'
                            )}
                          </p>

                          <a
                            className='youtubeLink'
                            target='_blank'
                            rel='noreferrer'
                            href={`https://www.youtube.com/watch?v=${vid.id.videoId}`}
                          >
                            Youtube Link
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                </div>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default YouTube;
