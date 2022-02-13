import Footer from './Footer'
import Navbar from './Navbar'
import axios from "axios";
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
export default function AddProduct() {
    const navigate = useNavigate();

    const [ product, setProduct] = useState({
        name: "",
        price:"",
        quantity:"",
        brand: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setProduct({
            ...product,
            [name]: value
        })
    }

    const register = () => {
        const { name, price, quantity, brand } = product
        if( name && price && quantity && brand ){
            axios.post("http://localhost:5000/product/add", product)
            .then( res => {
                alert(res.data.message)
                navigate('/login')
            })
        } else {
            alert("invlid input")
        }
        
    }

    return (
      <>
      <Navbar/>
        <div className="register">
            {console.log("User", product)}
            <h1>Add Product</h1>
            <input type="text" name="name" value={product.name} placeholder="Product Name" onChange={ handleChange }></input>
            <input type="text" name="price" value={product.price} placeholder="Price" onChange={ handleChange }></input>
            <input type="text" name="quantity" value={product.quantity} placeholder="Quantity" onChange={ handleChange }></input>
            <input type="text" name="brand" value={product.brand} placeholder="brand" onChange={ handleChange }></input>
            {/* <input type="text" name="address" value={seller.address} placeholder="Enter your address" onChange={ handleChange}></input> */}
            
            <div className="button" onClick={register} >Register</div>
        </div>
        <Footer/>
        </>
    )
}