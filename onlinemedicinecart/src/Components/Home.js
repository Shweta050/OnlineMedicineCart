import React, { Component } from 'react';
import '../Styles/Home.css';

import Wallpaper from './Wallpaper';
import Footer from './Footer';
import Navbar from './Navbar';
import Category from './Category';

export default class Home extends Component {
    render(){
return(
    <><Navbar/><Wallpaper /><Category/><Footer /></>
);
}
}

