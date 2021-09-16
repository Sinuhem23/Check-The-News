import React, { useContext } from 'react';
import '../CSS/youtube.css';
import { ListContext } from '../App';
import ytLogo from '../Images/youtubeSVG.png';

function YouTube() {
  const context = useContext(ListContext);
  let youTube = context.youTube;

  return (
    <div className='main_container'>
      <div className='youtubePg'>
        <div>
          <div className=''>
            <img className='ytImg' src={ytLogo}></img>
            <h1 className='infoTitle'>YouTube</h1>
          </div>

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
        </div>
      </div>
    </div>
  );
}

export default YouTube;
