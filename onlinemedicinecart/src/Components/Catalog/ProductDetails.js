import { Box, Button, Divider, FormControl, Grid, GridList, List, MenuItem, Table, TableBody, TableCell, TableContainer, TableRow, TextField, Typography } from "@material-ui/core";
import {useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import React from 'react';
import { useDispatch,useSelector } from "react-redux";
import { listProductDetails } from "../../actions/productActions";
import history from '../../history'
import { withRouter } from 'react-router-dom';
import { FormControlLabel } from "@mui/material";
import { useNavigate } from 'react-router-dom';

export default function ProductDetails()
{
    //const {id} = useParams();
  //  const [product,setProduct] = useState([]);
    //const [loading,setLoading] = useState(true);
/////
let navigate = useNavigate();
let [error, setError] = useState(null);

console.log(history)
const dispatch = useDispatch();

const [qty, setQty] = useState(1)

const handleChange = (event) => {
    setQty(event.target.value);
};
const productDetails = useSelector(state=>state.productDetails)
const {loading,product} = productDetails
const {id} = useParams();
console.log(product,id)

/////
    useEffect(()=>
    {
        // axios.get(`http://localhost:5000/product/${id}`)
        // .then(resp=>setProduct(resp.data))
        // .catch(err=>console.log(err))
        // .finally(()=>setLoading(false))
        dispatch(listProductDetails(id))
    },[dispatch,id])   

    if (loading) return <h3>Loading...</h3>

    if(!product) return <h3>Product not found</h3>

    const addToCartHandler = () => {
        console.log('herein add to cart')
       navigate(`/cart/${id}?qty=${qty}`)
      }

    return(
        // <Typography variant='h2'>
          
        //   {/* {product[0].name} */}
        //   {/* {console.log(product[0].name)} */}
        // </Typography>
        <>

        {loading === undefined || loading ? (
          <h1>Loading..</h1>
        ) : (
                <Grid container spacing={6}>
                <Grid item xs={6}>
                <img
                    src={product.image}
                    alt={product.name}
                    style={{ width: "100%" }}
                />            
                </Grid>
            <Grid item xs={6}>
            <Typography variant="h3">{product.name}</Typography>
              <Divider sx={{ mb: 2 }} />
              <Typography variant="h4" color="secondary">
                {product.price} Rupees
              </Typography>
              <TableContainer>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell>{product.name}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Description</TableCell>
                      <TableCell>{product.description}</TableCell>
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
                  </TableBody>
                </Table>
              </TableContainer>
              <Box
                component="form"
                sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
                noValidate
                autoComplete="off"
              >
                <div>
                  <TextField
                    id="outlined-select-currency"
                    select
                    label="Select"
                    value={qty}
                    onChange={handleChange}
                    helperText="Please select your quantity"
                  >
                    {/* {currencies.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))} */}
                     {[...Array(product.countInStock).keys()].map(
                              (x) => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              )
                            )}
                  </TextField>
                </div>
              </Box>
              <List>
                <Button
                    className="btn-block"
                    type="button"
                    variant="contained"
                    onClick={addToCartHandler}
                    disabled={product.countInStock === 0}
                    >
                    Add To Cart
                    </Button>
              </List>
            </Grid>
            </Grid>
        )}
      </>
    );


}