import React from 'react';
import '../CSS/search.css';

function Search() {
  return (
    <div className='main_input_container'>
      <h1 className='search_text'>
        <label htmlFor='search'>Search</label>
      </h1>
      <select className='main_input' required>
        <option value=''>Select a country</option>
        <option value='UnitedStates'>United States</option>
        <option value='Canada'>Canada</option>
        <option value='India'>India</option>
        <option value='UnitedKingdom'>United Kingdom</option>
        <option value='Japan'>Japan</option>
        <option value='China'>China</option>
        <option value='Australia'>Australia</option>
      </select>
    </div>
  );
}

export default Search;
