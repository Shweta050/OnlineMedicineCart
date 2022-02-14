import React from "react";
// import SearchResults from './SearchResult.js';
import Products from './Products.js';
import {useState} from 'react';
import '../Styles/SearchBar.css';

function SearchBar() {
  const [key, setKey] = useState('');
  const [update, setupdate] = useState(false);
  const [alert, setAlert] = useState(false);
  const toUpdate = () => {
    console.log("Length of string is "+key.length);
    if(key.length > 0){
      setupdate(true);
      setAlert(false);
    }
    else{
      setAlert(true);
      setupdate(false);
    }
  }
  return (
    <div>
      <input type="text"  placeholder="Search for Medicines and Health Products" name="search" id='searchV' value={key} onChange={(e) => setKey(e.target.value)}/>
      <button type="Search" id="searchBtn" onClick={
        () => {toUpdate()}
      }> search </button>
      {update && <Products keyword={key} />}
      {alert && <div id="alert">Enter a string</div>}
    </div>
  );
}

export default SearchBar;