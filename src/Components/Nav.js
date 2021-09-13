import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/nav.css';

export default function Nav() {
  return (
    <div>
      <ul className='main_nav_container'>
        {/* Home Section */}
        <li>
          <button>
            <Link className='navLinks' to='/Home'>
              Home
            </Link>
          </button>
        </li>
        {/* End of Home Section */}
        {/* News Section */}
        <li>
          <button>
            <Link className='navLinks' to='/News'>
              News
            </Link>
          </button>
        </li>
        {/* End of News Section */}

        {/* YouTube Section */}
        <li>
          <button>
            <Link className='navLinks' to='/YouTube'>
              YouTube
            </Link>
          </button>
        </li>
        {/* Ending of YouTube Section */}
      </ul>
    </div>
  );
}
