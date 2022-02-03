import React,{useState} from 'react'
import axios from 'axios';
import {useNavigate} from "react-router-dom"
import Navbar from './Navbar';
import Footer from './Footer';
import { TextField, Link, Button } from '@material-ui/core';

const Login = ({setLoginUser}) => {
const navigate = useNavigate()
    const [user,setUser] = useState({
        name:"",
        password: ""
    })
    const handleChange = e =>{
    const {name,value} = e.target
    setUser({
    ...user,//spread operator 
    [name]:value
    })
    }

    const login =()=>{
        axios.post("http://localhost:5000/Login",user)
        .then(function(res){
      const role=res.data.user.role;
      if(role ==='user'){
       navigate('/userhome');
      }
      else if(role ==='seller'){
        navigate('/sellerhome');
      }
      else{
        navigate('/adminhome');
      }
    }).catch((err) => {
        alert("Invalid Email ID or password")
    });
	}
    return (
         <>
        <Navbar/>
      <div style={{ marginTop: '100px', marginLeft: '480px' }}>
        <div>
          <h2>Login</h2>
        </div>

        <div>
          <TextField
            id="standard-basic"
            type="text"
            autoComplete="off"
            name="email"
            value={user.email}
            onChange={handleChange}
            placeholder="Email ID"
            required
          />
          <br /><br />
          <TextField
            id="standard-basic"
            type="password"
            autoComplete="off"
            name="password"
            value={user.password}
            onChange={handleChange}
            placeholder="Password"
            required
          />
          <br /><br />
          <Button
            className="button_style"
            variant="contained"
            color="primary"
            size="small"
            // disabled={user.name == '' && user.password == ''}
            onClick={login}
          >
            Login
          </Button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link href="/signup">
            SignUp
          </Link>
        </div>
      </div>
      <Footer/>
      </>
    )
}
export default Login