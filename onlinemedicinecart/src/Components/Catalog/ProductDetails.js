import { Button, Divider, Grid, List, Table, TableBody, TableCell, TableContainer, TableRow, TextField, Typography } from "@material-ui/core";
import {useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { listProductDetails } from "../../actions/productActions";
import history from '../../history'

export default function ProductDetails()
{
    console.log(history)
    const dispatch = useDispatch();

    const [qty, setQty] = useState(1)

    const productDetails = useSelector(state=>state.productDetails)
    const {loading,product} = productDetails
    const {id} = useParams();
    
    useEffect(()=>
    {
        // axios.get(`http://localhost:5000/product/${id}`)
        // .then(resp=>setProduct(resp.data))
        // .catch(err=>console.log(err))
        // .finally(()=>setLoading(false))
        dispatch(listProductDetails(id))

    },[dispatch,id])   

    const addToCartHandler = () => {
        console.log('herein add to cart')
        history.push(`/cart/${id}?qty=${qty}`)
      }

    return(
        // <Typography variant='h2'>
          
        //   {/* {product[0].name} */}
        //   {/* {console.log(product[0].name)} */}
        // </Typography>
        <>
        {loading === undefined || loading?  <h1>Loading..</h1>:(
                    <Grid container spacing={6}>
                    <Grid item xs={6}>
                        <img src={product[0].image} alt={product[0].name} style={{width: '100%'}} />
                   </Grid>
                   <Grid item xs={6}>
                       <Typography variant='h3'>{product[0].name}</Typography>
                       <Divider sx={{mb: 2}} />
                       <Typography variant='h4' color='secondary'>{(product[0].price)} Rupees</Typography>
                       <TableContainer>
                           <Table>
                               <TableBody>
                                   <TableRow>
                                       <TableCell>Name</TableCell>
                                       <TableCell>{product[0].name}</TableCell>
                                   </TableRow>    
                                   <TableRow>
                                       <TableCell>Description</TableCell>
                                       <TableCell>{product[0].description}</TableCell>
                                   </TableRow>  
                                   <TableRow>
                                       <TableCell>Category</TableCell>
                                       <TableCell>{product[0].category}</TableCell>
                                   </TableRow>  
                                   <TableRow>
                                       <TableCell>Brand</TableCell>
                                       <TableCell>{product[0].brand}</TableCell>
                                   </TableRow>  
                                   <TableRow>
                                       <TableCell>Quantity in stock</TableCell>
                                       <TableCell>{product[0].countInStock}</TableCell>
                                   </TableRow>  
                               </TableBody>
                           </Table>
                       </TableContainer>
                       {/* <Grid container spacing={2}>
                           <Grid item xs={6}>
                               <TextField 
                                   variant='outlined'
                                   type='number'
                                   label='Quantity in Cart'
                                   fullWidth
                                   value={quantity}
                                   onChange={handleInputChange}
                               />
                           </Grid> */}      
                       {/* </Grid> */}
                       <List>
                       <TextField 
                                   variant='outlined'
                                   type='number'
                                   label='Quantity in Cart'
                                   fullWidth
                                   value={product[0].countInStock}
                               />   
                        <Button
                        onClick={addToCartHandler}
                        className='btn-block'
                        type='button'
                        disabled={product.countInStock === 0}
                        >
                        Add To Cart
                        </Button>
                    </List>
                   </Grid>

               </Grid>
        )}

        </>

    )
}