import React, { useState, useContext } from 'react';
import '../CSS/search.css';

import { ListContext } from '../App';

function Search({}) {
  const [text, setText] = useState('');

  const context = useContext(ListContext);
  let themeToggler = context.themeToggler;
  let term = context.term;

  const handleSubmit = (e) => {
    e.preventDefault();
    let setTerm = context.setTerm;
    setTerm(text);

    console.log('im HERE' + term);
  };

  return (
    <div className='main_input_container'>
      <h1 className='search_text'>
        <label htmlFor='search'>Search</label>
      </h1>
      {/* Form */}
      {/* <div className='search_container'> */}
      <form className='main_input' onSubmit={handleSubmit}>
        <select
          className='select_form'
          onChange={(e) => setText(e.target.value)}
          required
        >
          <option value=''>Select a country</option>
          <option value='Americas'>Americas</option>
          <option value='Africa'>Africa</option>
          <option value='Middle East'>Middle East</option>
          <option value='Europe'>Europe</option>
          <option value='Asia'>Asia</option>
          <option value='Australia'>Australia</option>
          <option value='Canada'>Canada</option>
        </select>
        <button type='submit' className='searchBtn'>
          Search
        </button>
        <button className='switchThemeBtn' onClick={() => themeToggler()}>
          Change Theme
        </button>
      </form>
      {/* End of Form */}
      {term ? (
        <div className='termDisplay'>
          <h1 className='termDisplayTerm'>{term}</h1>
        </div>
      ) : (
        <div className='termDisplay'>
          <h1 className='termDisplayTerm'>All</h1>
        </div>
      )}
      {/* </div> */}
    </div>
  );
}

export default Search;
