import React, { Component } from 'react';
import '../Styles/Home.css';

import Wallpaper from './Wallpaper';
import Footer from './Footer';
import Navbar from './Navbar';

export default class Home extends Component {
    constructor() {
        super();
        this.state ={
            wallpaper: [],
            footer: [],
            navbar: [],
            error: {}

        }
}
render() {
    const { wallpaper, navbar, footer} = this.state;
    return (
        <React.Fragment>
            <Wallpaper wallpaperData={wallpaper} />
            <Footer footerData={footer}/>
            <Navbar navbarData={navbar}/>
            
        </React.Fragment>
    )
}
}