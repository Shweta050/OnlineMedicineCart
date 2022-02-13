import { useEffect, useState } from "react";
// import Catalog from "./Catalog/Catalog";
import SearchResult from "./SearchResult";
import Typography from '@material-ui/core/Typography'
import Header from "./Layout/header";
import SearchBar from "./SearchBar";
import { Container, CssBaseline } from "@material-ui/core";
import React from 'react';
import axios from 'axios';
function SearchProducts(props)
{
    const word = props.keyword;
    const [searchProducts,setSearchProducts] = useState([]);

    useEffect(()=>
    {
        console.log("Calling axios with keyword "+word);
        fetch(`http://localhost:5000/product/search/${word}`)
        .then(resp=>resp.json())
        .then(data=>setSearchProducts(data))
    },[word])   
return(
    <>
        <CssBaseline></CssBaseline>
        <Header></Header>
        <Container >
            <SearchResult products={searchProducts}></SearchResult>
        </Container>
    </>
);

}

export default SearchProducts;