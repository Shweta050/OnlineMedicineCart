import { useEffect, useState } from "react";
import Catalog from "./Catalog/Catalog";
import Typography from '@material-ui/core/Typography'
import Header from "./Layout/header";
import { Container, CssBaseline } from "@material-ui/core";
import {  useDispatch,useSelector } from "react-redux";
import productSelectors from "./Catalog/CatalogSlice"
import { listProducts } from "../actions/productActions";
import Message from "./Message";
import Loader from "./Loader";

function Products(props)
{
    const dispatch = useDispatch()

    const productList = useSelector((state) => state.productList)
    const { loading,error,products } = productList

    useEffect(()=>
    {
        // console.log(props)
        // fetch(`http://localhost:5000/product`)
        // .then(resp=>resp.json())
        // .then(data=>setProducts(data))
        dispatch(listProducts())
    },[dispatch])   
return(
    <>
        <CssBaseline></CssBaseline>
        <h1>Latest Products</h1> 
        {loading? <Loader/>: error? <Message>{error}</Message>:
                <Container >
                <Catalog products={products}></Catalog>
            </Container>    
        }

    </>
);

}

export default Products;