import ProductList from './ProductList'
import React from 'react';
export default function Catalog(props)
{
    return(
        <div>
        <ProductList products={props.products} />
        </div>
    )
}