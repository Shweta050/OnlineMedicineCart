import React, { Component,useEffect,useState } from 'react';
import ReactDOM from 'react-dom';
import {Route, withRouter} from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
//
//https://jsonplaceholder.typicode.com/users
export default function Category(){

    const [value,setValue]=useState('');
    const [result,getData]= useState([]);
    useEffect(()=>
    {
        fetch('http://localhost:5000/category',
        {
            method:'GET',
            headers:{
                'content-type':'application/json',

            }
        }).then(resp=>resp.json())
        .then(resp=>getData(resp))
    },[])
    const handleSelect=(e)=>{
      console.log(e);
      setValue(e)
    }
    
    return( 
        <><DropdownButton
            alignRight
            title={"--"+value+"--"}
            id="dropdown-menu-align-right"
            onSelect={handleSelect}
        >
            {
                result.map(items=>
                    {
                        return(
                            <Dropdown.Item eventKey={items.name}>{items.name}</Dropdown.Item>
                        );
                })
            }
        </DropdownButton><h4> {  value  }</h4></>
    );
  
}


