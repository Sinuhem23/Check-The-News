import React, { useState } from 'react';
import Yes from '../Images/Yes.jpg';
import NotSure from '../Images/NotSure.jpg';
import No from '../Images/No.jpg';
import '../CSS/vote.css';

function Votes() {
  const [yesCount, setyesCount] = useState(0);
  const [notSureCount, setNotSureCount] = useState(0);
  const [noCount, setNoCount] = useState(0);
  return (
    <div className='voteContainer'>
      <div>
        <h4 className='yes'>Yes</h4>

        <button className='voteBTN' onClick={() => setyesCount(yesCount + 1)}>
          <img className='countImg' src={Yes}></img>
        </button>
        {/* Show Yes Count */}
        <h4>{yesCount}</h4>
      </div>
      <div>
        <h4 className='notSure'>Not Sure</h4>

        <button
          className='voteBTN'
          onClick={() => setNotSureCount(notSureCount + 1)}
        >
          <img className='countImg' src={NotSure}></img>
        </button>

        {/* Show Not Sure Count */}
        <h4>{notSureCount}</h4>
      </div>
      <div>
        <h4 className='no'>No</h4>

        <button className='voteBTN' onClick={() => setNoCount(noCount + 1)}>
          <img className='countImg' src={No}></img>
        </button>

        {/* Show No Count */}
        <h4>{noCount}</h4>
      </div>
    </div>
  );
}
export default Votes;
