import React, { useState, useContext } from 'react';
import '../CSS/search.css';
import { ListContext } from '../App';

function Search({}) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    let setTerm = context.setTerm;
    setTerm(text);
  };
  const context = useContext(ListContext);
  console.log(context);

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
          <option value='americas'>Americas</option>
          <option value='africa'>Africa</option>
          <option value='middleeast'>Middle East</option>
          <option value='europe'>Europe</option>
          <option value='asia'>Asia</option>
          <option value='australia'>Australia</option>
          <option value='canada'>Canada</option>
        </select>
        <button className='searchBtn'>Search</button>
      </form>
      {/* End of Form */}
    </div>
  );
}

export default Search;
