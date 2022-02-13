import { useEffect, useState } from "react";
import Catalog from "./Catalog/Catalog";
import Typography from '@material-ui/core/Typography'
import Header from "./Layout/header";
import { Container, CssBaseline } from "@material-ui/core";
import axios from 'axios';
import React from 'react';
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, ListItem, ListItemAvatar, ListItemText} from "@material-ui/core";
import { Link } from "react-router-dom";
import {Route, withRouter} from 'react-router-dom';
import {  useDispatch,useSelector } from "react-redux";
import productSelectors from "./Catalog/CatalogSlice"
import { listProducts } from "../actions/productActions";
import Message from "./Message";
import Loader from "./Loader";

function Products(props)
{
    const word = props.keyword;
   // const [products,setProducts] = useState([]);

    const dispatch = useDispatch()

    const productList = useSelector((state) => state.productList)
    const { loading,error,products } = productList

    useEffect(()=>
    {
        // fetch(`http://localhost:5000/product`)
        // .then(resp=>resp.json())
        // .then(data=>setProducts(data))
        dispatch(listProducts())
    },[dispatch,word])   
return(
    <>
        <Button component={Link} to={`./adminHome`} size="small">AdminView</Button>
        <Button component={Link} to={`./sellerHome`} size="small">SellerView</Button>
        <CssBaseline></CssBaseline>
        <Header></Header>
        {loading? <Loader/>: error? <Message>{error}</Message>:
                <Container >
                <Catalog products={products}></Catalog>
            </Container>    
        }
    </>
);

}

export default Products;