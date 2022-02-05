import { Component} from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';


import Home from './Components/Home';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Cart from './Components/Cart';
import UserHomepage from './Components/UserHomepage';
import SellerHomepage from './Components/SellerHomepage';
import AdminHomepage from './Components/AdminHomepage';
import ProductDetails from './Components/Catalog/ProductDetails';

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
                <Route path="/userhome" element={<UserHomepage/>}/>
                <Route path="/sellerhome" element={<SellerHomepage/>}/>
                <Route path="/adminhome" element={<AdminHomepage/>}/>
                <Route path="/product/:id" element={<ProductDetails/>} />

            </Routes>
            </BrowserRouter>
        );
    }
}

export default Router;