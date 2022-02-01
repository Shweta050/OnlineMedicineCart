import React, { Component } from 'react';
import { Button, TextField, Link } from '@material-ui/core';
import Navbar from './Navbar';
import Footer from './Footer';
import '../Styles/Login.css'
const axios = require('axios');


export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  login = () => {

    axios.post('http://localhost:5000/login', {
      email: this.state.email,
      password: this.state.password,
    }).then((res) => {
      alert("Successful login!!");
      console.log(res.name);
    }).catch((err) => {
        alert("Invalid Email ID or password")
    });
  }

  render() {
    return (
        <>
        <Navbar/>
      <div style={{ marginTop: '100px' }}>
        <div>
          <h2>Login</h2>
        </div>

        <div>
          <TextField
            id="standard-basic"
            type="text"
            autoComplete="off"
            name="email"
            value={this.state.email}
            onChange={this.onChange}
            placeholder="Email ID"
            required
          />
          <br /><br />
          <TextField
            id="standard-basic"
            type="password"
            autoComplete="off"
            name="password"
            value={this.state.password}
            onChange={this.onChange}
            placeholder="Password"
            required
          />
          <br /><br />
          <Button
            className="button_style"
            variant="contained"
            color="primary"
            size="small"
            disabled={this.state.name == '' && this.state.password == ''}
            onClick={this.login}
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
    );
  }
}