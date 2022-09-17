import React from 'react';
import './SearchInput.scss';

const SearchInput = () => {
  return (
    <div className="search-wrap">
      <div className="search">
        <input type="search" className="searchTerm" placeholder="What are you looking for?" />
        <button type="submit" className="searchButton">
          <i className="fa fa-search"></i>
        </button>
      </div>
    </div>
  )
};

export default SearchInput;