import axios from 'axios';
import React from 'react';
import {useState, useEffect} from 'react';
import Header from "./Layout/header";
import { Container, CssBaseline } from "@material-ui/core";
import { Avatar, List, ListItem,ListItemText, ListItemAvatar, Grid } from "@material-ui/core";
import UserDetails from "./userDetails";
import { useLocation } from 'react-router-dom'
export default function UsersSellers(props){
    const location = useLocation();
    const { role } = location.state;
    const [UsersSellers,setUsersSellers] = useState([]);

    useEffect(()=>
    {
        fetch(`http://localhost:5000/user/roles/${role}`)
        .then(resp=>resp.json())
        .then(data=>setUsersSellers(data))
    },[])   
    return(
        <>
        <CssBaseline></CssBaseline>
        <Header></Header>
        <UserDetails user={UsersSellers} />
        </>

        )
}