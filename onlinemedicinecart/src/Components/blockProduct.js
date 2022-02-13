import { useEffect, useState } from "react";
import Catalog from "./Blocks/catalog";
import Typography from '@material-ui/core/Typography'
import Header from "./Layout/header";
import { Container, CssBaseline } from "@material-ui/core";
import axios from 'axios';
import React from 'react';
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, ListItem, ListItemAvatar, ListItemText} from "@material-ui/core";
import { Link } from "react-router-dom";
import {Route, withRouter} from 'react-router-dom';

export default function BlockProduct(props)
{
    const word = props.keyword;
    const [products,setProducts] = useState([]);

    useEffect(()=>
    {
        fetch(`http://localhost:5000/product`)
        .then(resp=>resp.json())
        .then(data=>setProducts(data))
    },[])   
return(
    <>
        {/* <CssBaseline></CssBaseline>
        <Header></Header> */}
        <Container >
            <Catalog products={products}></Catalog>
        </Container>
    </>
);

}