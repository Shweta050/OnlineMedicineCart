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
import { useDispatch, useSelector } from 'react-redux';
import { NavDropdown } from 'react-bootstrap';
import { logout } from '../actions/userActions';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

  const userLogin = useSelector(state=>state.userLogin)
  const {userInfo} = userLogin;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logoutHandler = ()=>
  {
    dispatch(logout());
  }
  const profileclickHandler = ()=>
  {
    navigate('/profile')
  }

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
          {userInfo ? (
            <NavDropdown title={userInfo.name} id='username'>
              <NavLink to='/profile'>
                <NavDropdown.Item onClick={profileclickHandler}>
                  Profile
                </NavDropdown.Item>
                <NavDropdown.Item onClick={logoutHandler}>
                  Logout
                </NavDropdown.Item>
              </NavLink>
            </NavDropdown>
          ):

          <><NavLink to='/signup'>
              SignUp
            </NavLink><NavLink to='/login'>
                Login
              </NavLink></>
          }

        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/cart'>Cart</NavBtnLink>
        </NavBtn>
      </Nav>
      
      
    </>
  );
};
  
export default Navbar;