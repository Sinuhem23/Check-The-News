import React, { useContext } from 'react';
import '../CSS/youtube.css';
import { ListContext } from '../App';

function YouTube() {
  const context = useContext(ListContext);
  let youTube = context.youTube;

  return (
    <div className='main_container'>
      <div className='youtubePg'>
        <div>
          <h1>YouTube</h1>
          <ul>
            {youTube.map((vid, idx) => (
              <div className='iframe_container'>
                <li key={idx}>
                  <div className='youtubeLi'>
                    <h3>{vid.snippet.title}</h3>
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
                        <h5>{vid.snippet.channelTitle}</h5>
                        <p>{vid.snippet.description}</p>
                        <a
                          target='_blank'
                          href={vid.snippet.thumbnails.default.url}
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
        </div>
      </div>
    </div>
  );
}

export default YouTube;
