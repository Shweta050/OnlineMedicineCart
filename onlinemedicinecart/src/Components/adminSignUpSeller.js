import Footer from './Footer'
import Navbar from './Navbar'
import axios from "axios";
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
// import './Styles/Signup.css';

const AdminSellerSignup = () => {

  const navigate = useNavigate();

    const [ seller, setSeller] = useState({
        name: "",
        email:"",
        password:"",
        phone: "",
        role: "seller"
    })

    const handleChange = e => {
        const { name, value } = e.target
        setSeller({
            ...seller,
            [name]: value
        })
    }

    const register = () => {
        const { name, email, password, phone, role } = seller
        if( name && email && password && phone && role){
            axios.post("http://localhost:5000/signup", seller)
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
            {console.log("User", seller)}
            <h1>Register Seller</h1>
            <input type="text" name="name" value={seller.name} placeholder="Your Name" onChange={ handleChange }></input>
            <input type="text" name="email" value={seller.email} placeholder="Your Email" onChange={ handleChange }></input>
            <input type="password" name="password" value={seller.password} placeholder="Your Password" onChange={ handleChange }></input>
            <input type="text" name="phone" value={seller.phone} placeholder="Your Phone Number" onChange={ handleChange }></input>
            {/* <input type="text" name="address" value={seller.address} placeholder="Enter your address" onChange={ handleChange}></input> */}
            
            <div className="button" onClick={register} >Register</div>
        </div>
        <Footer/>
        </>
    )
}

export default AdminSellerSignup;
