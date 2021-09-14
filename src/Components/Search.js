import React, { Component, useState, useEffect } from 'react';
import '../CSS/search.css';

function Search() {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='main_input_container'>
      <h1 className='search_text'>
        <label htmlFor='search'>Search</label>
      </h1>
      {/* Form */}
      <form className='main_input' onSubmit={handleSubmit}>
        <select
          className='select_form'
          onChange={(e) => setText(e.target.value)}
          required
        >
          <option value=''>Select a country</option>
          <option value='Americas'>Americas</option>
          <option value='Africa'>Africa</option>
          <option value='MiddleEast'>Middle East</option>
          <option value='Europe'>Europe</option>
          <option value='Asia'>Asia</option>
          <option value='Australia'>Australia</option>
          <option value='Canada'>Canada</option>
        </select>
      </form>
      {/* End of Form */}
    </div>
  );
}

export default Search;
