import { AppBar, Toolbar, Typography } from "@material-ui/core";
import Category from '.././Category';

export default function Header()
{
    return(
        <AppBar position ='static' sx={{mb:4}}>
            <Toolbar>
                <Typography variant='h6'> 
                </Typography>
                < Category />
            </Toolbar>
        </AppBar>
    )
}