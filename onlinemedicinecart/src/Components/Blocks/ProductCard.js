import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, ListItem, ListItemAvatar, ListItemText, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import {Route, withRouter} from 'react-router-dom';
import React from 'react';
export default function ProductCard(product)
{
  const register = (name) => {
    console.log("product "+name);
    // const { name, email, password, phone } = user
    // if( name && email && password && phone){
    //     axios.post("http://localhost:5000/signup", user)
    //     .then( res => {
    //         alert(res.data.message)
    //         navigate('/login')
    //     })
    // } else {
    //     alert("invlid input")
    // }
}
    return(
        <Card >
        <CardHeader
            avatar ={
                <Avatar sx={{bgcolor:'secondary.main'}}>
                    {product.product.name.charAt(0).toUpperCase()}
                </Avatar>
            }
            title ={product.product.name}
            titleTypographyProps={{
                sx: {fontWeight: 'bold', color: 'primary.main'}
            }}
        />
        <CardMedia
          component="img"
          sx ={{height:140, backgroundSize:'contain', bgcolor:'primary.light'}}
          image={product.product.pictureUrl}
          title ={product.product.name}
          alt="no image available"
        />
        <CardContent>
          <Typography gutterBottom color="secondary"variant="h5" >
            {product.product.price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.product.brand}
          </Typography>
        </CardContent>
        <CardActions>
        {/* <div className="button" onClick={register(product.product.name)} >Block Product</div> */}
          {/* <Button component={Link} to={`/product/${product.product.name}`} size="small">Block product</Button> */}
          <Button onClick={register(product.product.name)} size="small">Block product</Button>
        </CardActions>
      </Card> 
    // <ListItem key={product.product._id}>
    //     <ListItemAvatar>
    //         <Avatar src={product.product.pictureUrl}/>
    //     </ListItemAvatar>
    //     <ListItemText>
    //         {product.product.name} -- {product.product.price} 
    //     </ListItemText>
    // </ListItem>
       )
}