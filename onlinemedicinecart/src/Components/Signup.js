import Footer from './Footer'
import Navbar from './Navbar'
import axios from "axios";
import React, { useState, useEffect } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { Button, TextField, Link } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../actions/userActions';

const Signup = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const userRegister = useSelector(state=> state.userRegister)
  const {loading, error, userInfo} = userRegister
  const redirect = location.search ? location.search.split('=')[1]:'/'

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
    useEffect(()=>
    {
      if(userInfo)
      {
        navigate(redirect)
      }
    },[navigate,userInfo,redirect])
    /////
      const signup =()=>{
        console.log('signup handle')
        dispatch(register(user.name,user.email,user.phone,user.password))
      }
    // const register = () => {
    //     const { name, email, password, phone } = user
    //     if( name && email && password && phone){
    //         axios.post("http://localhost:5000/signup", user)
    //         .then( res => {
    //             alert("Successfully Signed Up!! Login now")
    //             navigate('/login')
    //         })
    //     } else {
    //         alert("Please fill all the fields")
    //     }
        
    // }

    return (
      <>
      <Navbar/>
        <div className="register" style={{ marginTop: '100px',marginLeft: '280px' }}>
            {console.log("User", user)}
            <h1 style={{ marginTop: '100px',marginLeft: '250px' }}>SignUp</h1>
            <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={ handleChange }></input><br/>
            <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={ handleChange }></input><br/>
            <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={ handleChange }></input><br/>
            <input type="text" name="phone" value={user.phone} placeholder="Your Phone Number" onChange={ handleChange }></input>
            <br/>
            <Button
            className="button_style"
            variant="contained"
            color="primary"
            size="small"
            onClick={signup}
          >SignUp</Button>
          <span> or </span>
            <Button
            className="button_style"
            variant="contained"
            color="primary"
            size="small"
            onClick={() => navigate('/login')}
          >Login</Button>
        </div>
        <Footer/>
        </>
    )
}

export default Signup
