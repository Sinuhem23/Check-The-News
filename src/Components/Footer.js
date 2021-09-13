import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/footer.css';

export default function Footer() {
  return (
    <div>
      <ul className='main_footer_container'>
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

        <li>
          <button>
            <a className='footerLinks' href='https://developer.nytimes.com/'>
              News
            </a>
          </button>
        </li>
      </ul>
    </div>
  );
}
