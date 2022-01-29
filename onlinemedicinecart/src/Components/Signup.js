import Footer from './Footer'
import Navbar from './Navbar'
import axios from "axios";
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

const Signup = () => {

  const navigate = useNavigate();

    const [ user, setUser] = useState({
        name: "",
        email:"",
        password:"",
        phone: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const { name, email, password, phone } = user
        if( name && email && password && phone){
            axios.post("http://localhost:5000/signup", user)
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
            {console.log("User", user)}
            <h1>SignUp</h1>
            <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={ handleChange }></input>
            <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={ handleChange }></input>
            <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={ handleChange }></input>
            <input type="password" name="phone" value={user.phone} placeholder="Your Phone Number" onChange={ handleChange }></input>
            <div className="button" onClick={register} >Sign Up</div>
            <div>or</div>
            <div className="button" onClick={() => navigate('/login')}>Login</div>
        </div>
        <Footer/>
        </>
    )
}

export default Signup
