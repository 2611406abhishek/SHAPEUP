import React from 'react'
import './Navbar.css';
import Stack from '@mui/material/Stack';
import Logo from '../../assets/images/Logo.png';
import { NavLink } from 'react-router-dom';
 
const Navbar = () => {
  return (
    <Stack
       direction="row"
       justifyContent="space-around"
       sx={{gap:{sm:'122px',xs:'40px'},mt:{ sm:'32px',xs:'20px'},justifyContent:'none'}}
       px="20px"
      >
        <NavLink to="/">
              <img src={Logo} alt="logo" style={{width:'48px',height:'48px',margin:'0 20px'}}/>
        </NavLink>
        <Stack
        direction="row"
        gap="40px"
        fontSize="24px"
        alignItems="flex-end"
        >
          <NavLink to="/"  style={{textDecoration:'none',color:'#3A1212',borderBottom:'3px solid #FF2625'}}>Home</NavLink>
          <a href="#exercise" style={{textDecoration:'none',color:'#3A1212'}}>Exercises</a>
          
        </Stack>
    </Stack>
  )
}

export default Navbar