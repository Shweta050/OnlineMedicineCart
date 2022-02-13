import React from 'react';
import '../Styles/adminHomePage.css';
import { Link } from "react-router-dom";

export default function SellerHomePage(){
    return(
        <>
        <div>
            <h2>Card</h2>
            <div id="row">
            <div id="column">
            <div id="card">
            <Link to={`./addProduct`} activeClassName="active">
            <img src={require('../Assets/logo.jpg')} alt="Avatar" />
            <div id="container">
                <h4><b>Add products</b>
                </h4>  
            </div>
            </Link>
            </div>
            </div>

            <div id="column">
            <div id="card">
            <img src={require('../Assets/logo.jpg')} alt="Avatar" />
            <div id="container">
                <h4><b>View all Sellers</b></h4>  
            </div>
            </div>
            </div>
            </div>

            <div id="row">
            <div id="column">
            <div id="card">
            <img src={require('../Assets/logo.jpg')} alt="Avatar" />
            <div id="container">
                <h4><b>View all Users</b></h4>  
            </div>
            </div>
            </div>

            <div id="column">
            <div id="card">
            <img src={require('../Assets/logo.jpg')} alt="Avatar" />
            <div id="container">
                <h4><b>Block Product</b></h4> 
            </div>
            </div>
            </div>
            </div>

        </div>
        </>
    )
}