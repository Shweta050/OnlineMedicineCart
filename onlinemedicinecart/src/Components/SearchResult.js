import React from 'react';
import axios from 'axios';

import './SearchBar.js';

function SearchResults(props){
    let word = props.keyword;
    let wordLen = word.length;
    if(wordLen > 0){
        console.log("search results");

        axios.get(`http://localhost:5000/product/${word}`)
        .then((response) =>{
            console.log(response);
        })
        .catch((err) => {
            console.error(err);
        });
        return(
            <div>
                You searched for {props.keyword}
            </div>
        );
    }
    else{
        return(
            <>
            </>
        )
    }
}

export default SearchResults;