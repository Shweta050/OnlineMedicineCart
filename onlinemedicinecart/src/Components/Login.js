import React,{useState,useEffect} from 'react'
import axios from 'axios';
import {useNavigate,useLocation} from "react-router-dom"
import Navbar from './Navbar';
import Footer from './Footer';
import { TextField, Link, Button } from '@material-ui/core';
import{useDispatch,useSelector} from 'react-redux'
import Message from './Message';
import { loginaction } from '../actions/userActions';
import Loader from './Loader';

const Login = ({setLoginUser}) => {
const navigate = useNavigate()
const location = useLocation();

    const [user,setUser] = useState({
        name:"",
        password: ""
    })
    const handleChange = e =>{
      console.log('setuser')
    const {name,value} = e.target
    setUser({
    ...user,//spread operator 
    [name]:value
    })
    }
  //Using redux action instead of normal post
  const dispatch = useDispatch();

  const userLogin = useSelector(state=> state.userLogin)
  const {loading, error, userInfo} = userLogin
  const redirect = location.search ? location.search.split('=')[1]:'/'
  
  useEffect(()=>
  {
    if(userInfo)
    {
      console.log(redirect)
      navigate(`/${redirect}`)
    }
  },[navigate,userInfo,redirect])
  /////
    const login =()=>{
      console.log('login handle')
      dispatch(loginaction(user.email,user.password))
	}
    return (
         <>
        <Navbar/>
      <div style={{ marginTop: '100px', marginLeft: '480px' }}>
        <div>
          <h2>Login</h2>
        </div>
       {error && <Message variant='danger'>{error}</Message>}
       {loading && <Loader></Loader>}
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
            type = "submit"
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