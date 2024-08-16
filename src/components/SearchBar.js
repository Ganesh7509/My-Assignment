import React from 'react';
import "../../src/components/search.css"


const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <input
      type="text"
      placeholder="Search anything..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className='search-bar'
      onFocus={(e) => (e.target.style.borderColor = '#6200EE')}
      onBlur={(e) => (e.target.style.borderColor = '#ccc')}
    />
  );
};

export default SearchBar;
