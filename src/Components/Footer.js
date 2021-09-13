import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/footer.css';

export default function Footer() {
  return (
    <div className='main_footer_container'>
      <ul>
        {/* New York Times API */}
        <li>
          <button>
            <a className='footerLinks' href='https://developer.nytimes.com/'>
              New York Times Api
            </a>
          </button>
        </li>

        {/* Youtube API */}
        <li>
          <button>
            <a
              className='footerLinks'
              href='https://apilist.fun/api/youtube-api'
            >
              Youtube Api
            </a>
          </button>
        </li>
      </ul>
    </div>
  );
}
