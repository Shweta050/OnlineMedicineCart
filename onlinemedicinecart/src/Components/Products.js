import { useEffect, useState } from "react";
import Catalog from "./Catalog/Catalog";
import Typography from '@material-ui/core/Typography'
import Header from "./Layout/header";
import { Container, CssBaseline } from "@material-ui/core";
import {  useSelector } from "react-redux";
import productSelectors from "./Catalog/CatalogSlice"

function Products(props)
{
    const [products,setProducts] = useState([ 
])
    useEffect(()=>
    {
        console.log(props)
        fetch(`http://localhost:5000/product`)
        .then(resp=>resp.json())
        .then(data=>setProducts(data))
    },[])   
return(
    <>
        <CssBaseline></CssBaseline>
        {/* <Header></Header> */}
        <Container >
            <Catalog products={products}></Catalog>
        </Container>
    </>
);

}

export default Products;