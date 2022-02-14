import React from "react";
import SearchProducts from './SearchProducts';
import Product from './Products';
import {useState} from 'react';
import '../Styles/SearchBar.css';
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [key, setKey] = useState('');
  const [update, setupdate] = useState(false);
  const [alert, setAlert] = useState(false);
  const navigate = useNavigate()

  const toUpdate = (data) => {
    setKey(data);
    console.log("After change Key is "+key+" and data is "+data);
    console.log("Length of string is "+key.length+" typeof "+(typeof key));
    if(data.length > 0){
      console.log("Update set to true");
      setupdate(true);
      setAlert(false);
    }
    else{
      console.log("Update set to false");
      setAlert(true);
      setupdate(false);
      navigate('/Home',{ replace: false });
    }
  }
  return (
    <div>
      {/* <input type="text"  placeholder="Search for Medicines and Health Products" name="search" id='searchV' value={key} onChange={(e) => setKey(e.target.value)}/> */}
      <input type="text"  placeholder="Search for Medicines and Health Products" name="search" id='searchV' value={key} onChange={(e) => {toUpdate(e.target.value)}}/>
      {/* <button type="Search" id="searchBtn" onClick={
        () => {toUpdate()}
      }> search </button> */}
      {/* {update && <SearchProducts keyword={key} />}
      {alert && <div id="alert">Enter a string</div>} */}
      {update && <SearchProducts keyword={key} />}
      {/* {alert && <Product/>} */}
    </div>
  );
}

export default SearchBar;