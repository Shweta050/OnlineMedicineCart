import { Avatar, List, ListItem,ListItemText, ListItemAvatar, Grid } from "@material-ui/core";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";

export default function ProductList(props)
{

    return(
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
    );
}