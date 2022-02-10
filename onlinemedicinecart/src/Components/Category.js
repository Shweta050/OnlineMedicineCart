import React, { useEffect,useState } from 'react';
import { debounce } from "@mui/material";

import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useDispatch, useSelector } from "react-redux";
import { setProductParams } from "./Catalog/CatalogSlice";

//https://jsonplaceholder.typicode.com/users
export default function Category(){

    // const {productParams} = useSelector(state => state.catalog);
    // const [categoryTerm, setCategory] = useState(productParams.category);
    const dispatch = useDispatch();

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

    // const debouncedSearch = debounce((event) => {
    //     dispatch(setProductParams({categoryTerm: event.target.value}))
    // }, 1000)
    
    return( 
        <><DropdownButton
            alignRight
            title={"--"+value+"--"}
            id="dropdown-menu-align-right"
            onSelect={handleSelect}
            onChange={(event) => {
                // setCategory(event.target.value);
            }}
        >
            {
                result.map(items=>
                    {
                        return(
                            <Dropdown.Item eventKey={items.name}>{items.value}</Dropdown.Item>
                        );
                })
            }
        </DropdownButton><h4> {  value  }</h4></>
    );
  
}


