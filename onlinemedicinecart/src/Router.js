import { Component} from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './Components/Home';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Cart from './Components/Cart';

class Router extends Component {

    render () {
        return(
            <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home/>}  />
                <Route path="/home" element={<Home/>}  />
                <Route path='/signup' component={Signup} />
                <Route path='/login' component={Login} />
                <Route path='/cart' component={Cart} />

            </Routes>
            </BrowserRouter>
        );
    }
}

export default Router;