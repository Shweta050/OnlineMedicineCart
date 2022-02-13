import { Avatar, List, ListItem,ListItemText, ListItemAvatar, Grid } from "@material-ui/core";
import ProductCard from "./ProductCard";
import React from 'react';

export default function ProductList(props)
{
    let pro = props.products;
    console.log()
    // pro = pro.toString().split(" ");
    return(
        <Grid container spacing={4}>
                {console.log("pro has "+pro)}    
        {pro.map(item=>(
            <Grid item xs={4}>
                <ProductCard key = {item._id} product = {item}></ProductCard>
            </Grid>
        )

    )}
    </Grid>
    );
}