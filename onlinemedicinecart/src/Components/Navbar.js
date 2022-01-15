import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
  
        <NavMenu>
          <NavLink to='/home' activeStyle>
            Home
          </NavLink>
          <NavLink to='/aboutus' activeStyle>
            AboutUs
          </NavLink>
          <NavLink to='/medicines' activeStyle>
            Medicines
          </NavLink>
          <NavLink to='/delivery' activeStyle>
            Delivery
          </NavLink>
          <NavLink to='/ourservice' activeStyle>
            Our Service
          </NavLink>
          <NavLink to='/contact' activeStyle>
            Contact
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