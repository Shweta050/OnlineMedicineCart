import { Avatar, List, ListItem,ListItemText, ListItemAvatar, Grid } from "@material-ui/core";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import {Loader} from  '../Loader'
import {Message} from '../Message'

export default function ProductList(props)
{
    const productList = useSelector((state) => state.productList)
    const { loading,error,products } = productList

    return(
        <>
        {loading? <h1>Loading..</h1>: error? <h2>{error}</h2>:(
        <Grid container spacing={4}>
        {console.log(props.products)}    
        {props.products.map(item=>(
         <Grid item xs={4}>
                { 
                    <ProductCard key = {item._id} product={item} />                
                }
        </Grid>
)

)}
</Grid>
        )}


        </>

    );
}