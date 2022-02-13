import { Component} from 'react';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './Components/Home';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Cart from './Components/Cart';
import ProductDetails from './Components/Catalog/ProductDetails';
import AdminHomePage from './Components/adminHome';
import AdminSellerSignup from './Components/adminSignUpSeller';
import AddProduct from './Components/addProduct';
import SellerHomePage from './Components/sellerHome';
import UsersSellers from './Components/adminUsersSellers';
import BlockProduct from './Components/blockProduct';
class Router extends Component {

    render () {
        return(
            <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home/>}  />
                <Route path="/home" element={<Home/>}  />
                <Route path="/signup" element={<Signup/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/cart" element={<Cart/>} />
                <Route path="/product/:id" element={<ProductDetails/>} />
                <Route path="/adminHome" element={<AdminHomePage/>} />
                <Route path="/adminHome/adminSignUpSeller" element={<AdminSellerSignup/>} />
                <Route path="/adminHome/adminUsersSellers" element={<UsersSellers/>} />
                <Route path="/sellerHome" element={<SellerHomePage/>} />
                <Route path="/sellerHome/addProduct" element={<AddProduct/>} />
                <Route path="/adminHome/blockProduct" element={<BlockProduct/>} />
{console.log("Router here")}
            </Routes>
            </BrowserRouter>
        );
    }
}

export default Router;