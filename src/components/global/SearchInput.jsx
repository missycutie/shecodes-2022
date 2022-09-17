import React from 'react';
import SearchIcon from '../../assets/svg/SearchIcon';
import './SearchInput.scss';

const SearchInput = () => {
  return (
    <div className="search-wrap">
      <div className="search">
        <input type="search" className="searchTerm" placeholder="Search" />
        <button type="submit" className="searchButton">
          <SearchIcon />
        </button>
      </div>
    </div>
  )
};

export default SearchInput;