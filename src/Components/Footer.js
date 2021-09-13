import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div>
      <div>
        <button>
          <Link to='/Home'>Home</Link>
        </button>
      </div>
      <div>
        <button>
          <Link to='./News'>News</Link>
        </button>
      </div>
      <h1>Footer</h1>
      <div>
        <button>
          <Link to='./YouTube'>YouTube</Link>
        </button>
      </div>
    </div>
  );
}
