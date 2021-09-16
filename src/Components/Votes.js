import React, { useState, useEffect } from 'react';
import Yes from '../Images/Yes.jpg';
import NotSure from '../Images/NotSure.jpg';
import No from '../Images/No.jpg';
import '../CSS/vote.css';
import useLocalStorage from '../Hooks/useLocalStorage';

function Votes() {
  const [yesCount, setyesCount] = useLocalStorage('yes', 0);
  const [notSureCount, setNotSureCount] = useLocalStorage('notsure', 0);
  const [noCount, setNoCount] = useLocalStorage('no', 0);
  // useEffect(() => {
  //   // storing input name
  //   localStorage.setItem('yesCount', JSON.stringify(yesCount));
  //   localStorage.setItem('notSureCount', JSON.stringify(notSureCount));
  //   localStorage.setItem('noCount', JSON.stringify(noCount));
  // }, [yesCount, notSureCount, noCount]);

  return (
    <div>
      <h3 className='voting_title'>Would you say the news are accurate?</h3>
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
    </div>
  );
}
export default Votes;
