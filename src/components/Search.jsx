import React, { useState } from 'react';
import { Input, Button } from 'antd';

const Search = ({ filterFoods }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    filterFoods(searchTerm);
  };

  return (
    <div>
      <Input
        placeholder='Search for food...'
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <Button type='primary' onClick={handleSearch}>
        Search
      </Button>
    </div>
  );
};

export default Search;
