import React, { useState } from 'react';

function Search({ filterFoods }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = e => {
    setSearchTerm(e.target.value);
    filterFoods(e.target.value);
  };

  return (
    <input
      type='text'
      placeholder='Search...'
      value={searchTerm}
      onChange={handleChange}
    />
  );
}

export default Search;
