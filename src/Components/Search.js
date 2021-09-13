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
        <option value='Americas'>Americas</option>
        <option value='Africa'>Africa</option>
        <option value='MiddleEast'>Middle East</option>
        <option value='Europe'>Europe</option>
        <option value='Asia'>Asia</option>
        <option value='Australia'>Australia</option>
        <option value='Canada'>Canada</option>
      </select>
    </div>
  );
}

export default Search;
