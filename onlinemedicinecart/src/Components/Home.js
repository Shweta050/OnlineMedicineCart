import React, { Component ,useState} from 'react';
import '../Styles/Home.css';

import Footer from './Footer';
import Navbar from './Navbar';
import Select from 'react-select'
import axios from 'axios'
import Products from './Products';


export default function Home() {

return(
    <><Navbar /><Footer /> <Products/> </>
)
}

