import { Checkbox,FormControl, FormControlLabel, FormGroup, FormLabel, Grid, Paper, Radio, RadioGroup, TablePagination, Typography } from '@material-ui/core'
import Pagination from '@mui/material/Pagination';
import Category from '../Category';
import ProductList from './ProductList'
import ProductSearch from './ProductSearch';

const sortOptions = [
    { value: 'name', label: 'Alphabetical' },
    { value: 'priceDesc', label: 'Price - High to low' },
    { value: 'price', label: 'Price - Low to high' },
]

export default function Catalog(props)
{
    return(
        <>
        <Grid container spacing={4}>
            <Grid item xs={3}>
                {/* <Paper sx={{ mb: 2, p: 2 }}>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                        <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
                    </FormGroup>
                </Paper>
                <Paper sx={{ mb: 2, p: 2 }}>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                        <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
                    </FormGroup>
                </Paper> */}
                < Category />
                <ProductSearch></ProductSearch>
                <Paper sx={{ mb: 2, p: 2 }}>
                    <FormControl>
                    <RadioGroup>
                        {sortOptions.map(({value,label})=>(
                            <FormControlLabel value={value} control={<Radio />} label={label} />
                        ))}
                    </RadioGroup>
                    </FormControl>
                </Paper>
            </Grid>
            <Grid item xs={9}>
                <ProductList products={props.products}/>
            </Grid>
            <Grid item xs={3}>
            </Grid>
            <Grid item xs={9}>
                <Typography>
                    Displaying item 1-6 of items 20
                </Typography>
                <Pagination count={10} page={2}>                
                </Pagination>
            </Grid>
        </Grid>
        </>

    )
}