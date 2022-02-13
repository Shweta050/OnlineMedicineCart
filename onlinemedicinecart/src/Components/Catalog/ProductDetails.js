import { Divider, Grid, Table, TableBody, TableCell, TableContainer, TableRow, TextField, Typography } from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import React from 'react';
export default function ProductDetails()
{
    const {id} = useParams();
    const [product,setProduct] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(()=>
    {
        axios.get(`http://localhost:5000/product/${id}`)
        .then(resp=>setProduct(resp.data))
        .catch(err=>console.log(err))
        .finally(()=>setLoading(false))
    },[id])   

    if (loading) return <h3>Loading...</h3>

    if(!product) return <h3>Product not found</h3>

    return(
        // <Typography variant='h2'>
          
        //   {/* {product[0].name} */}
        //   {/* {console.log(product[0].name)} */}
        // </Typography>
        <Grid container spacing={6}>
             <Grid item xs={6}>
                 <img src={product[0].pictureUrl} alt={product[0].name} style={{width: '100%'}} />
            </Grid>
            <Grid item xs={6}>
                <Typography variant='h3'>{product[0].name}</Typography>
                <Divider sx={{mb: 2}} />
                <Typography variant='h4' color='secondary'>{(product[0].price).toFixed(2)} Rupees</Typography>
                <TableContainer>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>{product[0].name}</TableCell>
                            </TableRow>    
                            <TableRow>
                                <TableCell>Review</TableCell>
                                <TableCell>{product[0].reviews}</TableCell>
                            </TableRow>  
                            <TableRow>
                                <TableCell>Category</TableCell>
                                <TableCell>{product[0].categoryid}</TableCell>
                            </TableRow>  
                            <TableRow>
                                <TableCell>Brand</TableCell>
                                <TableCell>{product[0].brandid}</TableCell>
                            </TableRow>  
                            <TableRow>
                                <TableCell>Quantity in stock</TableCell>
                                <TableCell>{product[0].quantity}</TableCell>
                            </TableRow>  
                        </TableBody>
                    </Table>
                </TableContainer>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        {/* <TextField 
                            variant='outlined'
                            type='number'
                            label='Quantity in Cart'
                            fullWidth
                            value={quantity}
                            onChange={handleInputChange}
                        /> */}
                    </Grid>

                </Grid>
            </Grid>
        </Grid>
    )
}