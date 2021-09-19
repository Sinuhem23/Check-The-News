import React from 'react';
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
              href='https://developers.google.com/youtube/?ref=apilist.fun'
            >
              Youtube Api
            </a>
          </button>
        </li>
      </ul>
    </div>
  );
}
