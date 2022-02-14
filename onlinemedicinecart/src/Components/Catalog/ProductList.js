import { Avatar, List, ListItem,ListItemText, ListItemAvatar, Grid } from "@material-ui/core";
import ProductCard from "./ProductCard";
import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import {Loader} from  '../Loader'
import {Message} from '../Message'

export default function ProductList(props)
{
    const productList = useSelector((state) => state.productList)
    const filteredProducts = useSelector((state) => state.filteredproductDetails)

    const { loading,error,products } = productList
    let pro = products;

    console.log(products,filteredProducts)
    if(filteredProducts.products.length)
     {
         console.log('filtered products are set',filteredProducts.products.length)
        pro = filteredProducts.products
     }
    console.log()
    

    // pro = pro.toString().split(" ");
    return(
        <>
         {loading? <h1>Loading..</h1>: error? <h2>{error}</h2>:(<Grid container spacing={4}>
                {console.log("pro has "+pro)}    
        {pro.map(item=>(
            <Grid item xs={4}>
                <ProductCard key = {item._id} product = {item}></ProductCard>
            </Grid>
        )

    )}
    </Grid>)}
        </>

    );
}