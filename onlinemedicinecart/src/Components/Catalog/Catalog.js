import ProductList from './ProductList'

export default function Catalog(props)
{
    return(
        <>

        <ProductList products={props.products}/>
        </>

    )
}