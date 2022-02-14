import ProductList from './Catalog/ProductList'
import React from 'react';
export default function SearchResult(props)
{
    return(
        <div>
        <ProductList products={props.products} />
        </div>
    )
}

/*
import React, {Component} from 'react';
import axios from 'axios';
import {useState} from 'react';
import './SearchBar.js';

function SearchResults(props){
    const word = props.keyword;
    // const [word,setWord] = useState(props.keyword);
    const wordLen = props.keyword.length;
    let [respName, setRespName] = useState();
        console.log(word+" ->  got this");
            axios.get(`http://localhost:5000/product/${word}`)
            .then((response) =>{
                console.log(response.data);
                setRespName(response.data[1].name);
            })
            .catch((err) => {
                console.error(err);
            });
            return(
                <div>
                    Hello {respName}
                    {word = ''}
                </div>
            );
}
export default SearchResults;
*/
