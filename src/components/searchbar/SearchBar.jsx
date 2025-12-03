import React, { useEffect, useState } from "react";
import './SearchBar.css';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");
  


  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    if (!searchTerm.trim()) return;
    onSearch(searchTerm);
  };

    const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div>
      <input
        className="searchBar"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        value={searchTerm}
        type="text"
        placeholder="Search for TV shows..."
      />

       <button className="searchButton" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}
export default SearchBar;
