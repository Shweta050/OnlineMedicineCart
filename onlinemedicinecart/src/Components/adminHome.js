import React from 'react';
import '../Styles/adminHomePage.css';
import { Link } from "react-router-dom";

export default function AdminHomePage(){
    return(
        <>
        <div>
            <h2>Card</h2>
            <div id="row">
            <div id="column">
            <div id="card">
            <Link to={`./adminSignUpSeller`} activeClassName="active">
            <img src={require('../Assets/logo.jpg')} alt="Avatar" />
            <div id="container">
                <h4><b>Register Seller</b>
                </h4>  
            </div>
            </Link>
            </div>
            </div>

            <div id="column">
            <div id="card">
            <Link to={`./adminUsersSellers`} state={ {role: "seller"} } activeClassName="active">
            <img src={require('../Assets/logo.jpg')} alt="Avatar" />
            <div id="container">
                <h4><b>View all Sellers</b></h4>  
            </div>
            </Link>
            </div>
            </div>
            </div>

            <div id="row">
            <div id="column">
            <div id="card">
            <Link to={`./adminUsersSellers`} state={ {role: "user"} } activeClassName="active">
            <img src={require('../Assets/logo.jpg')} alt="Avatar" />
            <div id="container">
                <h4><b>View all Users</b></h4>  
            </div>
            </Link>
            </div>
            </div>

            <div id="column">
            <div id="card">
            <Link to={`./blockProduct`} activeClassName="active">
            <img src={require('../Assets/logo.jpg')} alt="Avatar" />
            <div id="container">
                <h4><b>Block Product</b></h4> 
            </div>
            </Link>
            </div>
            </div>
            </div>

        </div>
        </>
    )
}