import { Divider, Grid, Table, TableBody, TableCell, TableContainer, TableRow, TextField, Typography } from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React from 'react';
export default function ProductDetails()
{
    const [quant,setQuant] = useState(0);
    const navigate = useNavigate();
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
    const test = () => {
        axios.post(`http://localhost:5000/product/update/${product.name}/${quant}`)
        .then( res => {
            console.log("Quant updated");
            navigate('/login')
        })
}
    return(
        // <Typography variant='h2'>
          
        //   {/* {product[0].name} */}
        //   {/* {console.log(product[0].name)} */}
        // </Typography>
        <Grid container spacing={6}>
             <Grid item xs={6}>
                 <img src={product.image} alt={product.name} style={{width: '100%'}} />
            </Grid>
            <Grid item xs={6}>
                <Typography variant='h3'>{product.name}</Typography>
                <Divider sx={{mb: 2}} />
                <Typography variant='h4' color='secondary'>{(product.price).toFixed(2)} Rupees</Typography>
                <TableContainer>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>{product.name}</TableCell>
                            </TableRow>    
                            <TableRow>
                                <TableCell>Review</TableCell>
                                <TableCell>{product.reviews}</TableCell>
                            </TableRow>  
                            <TableRow>
                                <TableCell>Category</TableCell>
                                <TableCell>{product.category}</TableCell>
                            </TableRow>  
                            <TableRow>
                                <TableCell>Brand</TableCell>
                                <TableCell>{product.brand}</TableCell>
                            </TableRow>  
                            <TableRow>
                                <TableCell>Quantity in stock</TableCell>
                                <TableCell>{product.countInStock}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Input quantity</TableCell>
                                <TableCell>
                                <input type="text" id="fieldQuant" name="quantity" placeholder="Quantity" onChange={(e)=>setQuant(e.target.value)}></input>
                                </TableCell>
                            </TableRow>  
                            <TableRow>
                                <TableCell>Input quantity</TableCell>
                                <TableCell>
                                <button onClick={test}>Submit</button>
                                </TableCell>
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