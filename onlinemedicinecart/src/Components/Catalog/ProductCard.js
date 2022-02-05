import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, ListItem, ListItemAvatar, ListItemText, Typography } from "@material-ui/core";

export default function ProductCard(product)
{
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
          <Button size="small">Add to Cart</Button>
          <Button size="small">View</Button>
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