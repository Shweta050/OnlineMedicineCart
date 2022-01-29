import React from 'react';
import logo from "../Assets/home1.jpg";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
import SearchBar from './SearchBar';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
  
        <NavMenu>
        <img src={require('../Assets/logo.jpg')} alt="logo" className='logo'/>
          <NavLink to='/home'>
            Home
          </NavLink>
          <SearchBar/>
          <NavLink to='/signup'>
            SignUp
          </NavLink >
          <NavLink to='/login'>
            Login
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/cart'>Cart</NavBtnLink>
        </NavBtn>
      </Nav>
      
      
    </>
  );
};
  
export default Navbar;