import React from "react";
import '../Styles/SearchBar.css'

function SearchBar() {
  return (
    <div>
        <input type="text"  placeholder="Search for Medicines and Health Products" name="search"></input>
    </div>
  );
}

export default SearchBar;