import { Component} from 'react';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './Components/Home';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Cart from './Components/Cart';
import CartScreen from './Components/Screens/CartScreen';
import ProductDetails from './Components/Catalog/ProductDetails';
import AdminHomePage from './Components/adminHome';
import AdminSellerSignup from './Components/adminSignUpSeller';
import AddProduct from './Components/addProduct';
import SellerHomePage from './Components/sellerHome';
import UsersSellers from './Components/adminUsersSellers';
import BlockProduct from './Components/blockProduct';
import { Container } from 'react-bootstrap'
import SearchProducts from './Components/SearchProducts';
import ProfileScreen from './Components/Screens/ProfileScreen';
import ShippingScreen from './Components/Screens/ShippingScreen';
import PaymentScreen from './Components/Screens/PaymentScreen';
import PlaceOrderScreen from './Components/Screens/PlaceOrderScreen';
import OrderScreen from './Components/Screens/OrderScreen';
import BlockedProds from './Components/Blocks/blockedProds';
import SellerDeleteProduct from './Components/sellerDeleteProduct';
import DeletedProds from './Components/sellerDeleteProducts/deletedProds';
import SellerUpdateQuant from './Components/sellerUpdateQuant';
import QuantProductDetail from './Components/sellerUpdateQuantity/ProductDetails';

class Router extends Component {

    render () {
        return(
            <BrowserRouter>
            <Container>
            <Routes>
                <Route exact path="/" element={<Home/>}  />
                <Route path="/home" element={<Home/>}  />
                <Route path="/signup" element={<Signup/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/profile" element={<ProfileScreen/>} />
                <Route path="/product/:id" element={<ProductDetails/>} />
                <Route path="/adminHome" element={<AdminHomePage/>} />
                <Route path="/adminHome/adminSignUpSeller" element={<AdminSellerSignup/>} />
                <Route path="/adminHome/adminUsersSellers" element={<UsersSellers/>} />
                <Route path="/sellerHome" element={<SellerHomePage/>} />
                <Route path="/sellerHome/addProduct" element={<AddProduct/>} />
                <Route path="/sellerHome/sellerDeleteProduct" element={<SellerDeleteProduct/>} />
                <Route path="/sellerHome/sellerDeleteProduct/deletedProds/:name" element={<DeletedProds/>} />
                <Route path="/sellerHome/sellerUpdateQuant" element={<SellerUpdateQuant/>} />
                <Route path="/sellerHome/sellerUpdateQuant/product/:id" element={<QuantProductDetail/>} />
                <Route path="/adminHome/blockProduct" element={<BlockProduct/>} />
                <Route path="/product/search/:keyword" element={<SearchProducts/>}  />
                <Route path='/shipping' element={<ShippingScreen/>} />
                <Route path='/payment' element={<PaymentScreen/>} />
                <Route path='/placeorder' element={<PlaceOrderScreen/>} />
                <Route path='/order/:id' element={<OrderScreen/>} />

                console.log('Router here')
            </Routes>
            <Routes>
                    <Route path='/cart/:id' element={<CartScreen/>} />
                    <Route path="/cart" element={<CartScreen/>} />
                </Routes>
            </Container>
            </BrowserRouter>
        );
    }
}

export default Router;