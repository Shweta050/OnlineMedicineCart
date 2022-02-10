import { Divider, Grid, Table, TableBody, TableCell, TableContainer, TableRow, TextField, Typography } from "@material-ui/core";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { listProductDetails } from "../../actions/productActions";

export default function ProductDetails()
{
    const dispatch = useDispatch();

    const productDetails = useSelector(state=>state.productDetails)
    const {loading,product} = productDetails
    const {id} = useParams();
    console.log(product)

    useEffect(()=>
    {
        // axios.get(`http://localhost:5000/product/${id}`)
        // .then(resp=>setProduct(resp.data))
        // .catch(err=>console.log(err))
        // .finally(()=>setLoading(false))
        dispatch(listProductDetails(id))

    },[dispatch,id])   

    return(
        // <Typography variant='h2'>
          
        //   {/* {product[0].name} */}
        //   {/* {console.log(product[0].name)} */}
        // </Typography>
        <>
        {loading ?  <h1>Loading..</h1>:(
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
        )}

        </>

    )
}