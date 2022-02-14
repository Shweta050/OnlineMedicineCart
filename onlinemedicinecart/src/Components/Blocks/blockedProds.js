import React from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
export default function BlockedProds(props){
    const {name} = useParams();
    // axios.post(`http://localhost:5000/product/update/${name}`)
    // .then(alert("Product blocked"))
    // .catch(err=>console.log(err))
    const [loading,setLoading] = useState(true);
    const navigate = useNavigate();
    useEffect(()=>
    {
        axios.post(`http://localhost:5000/product/update/${name}`)
        .then(res => { 
        console.log("DONE");
        navigate('../adminHome')
        }
        )
        .catch(err=>console.log(err))
        .finally(()=>setLoading(false))
    },[name])   
    return(
        <>
        </>
    )
}