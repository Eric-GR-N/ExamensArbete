import React, {useState, useEffect } from 'react'
import styled from 'styled-components'
import { NavBarContainer, Logo, MenuContainer, MenuItem, MenuLink, HomeLogo } from './NavBarElements';
import Axios from 'axios';

//
const NavBar = () => {
    //Function to clean up database
    const cleanUpDB = () =>{
        Axios.delete(`http://localhost:4000/deletedone/`).then((response)=>{
            
        })
    }
    
    return (
        <NavBarContainer>
            <Logo
            to="home"
            smooth={true}
            duration={500}
            spy={true}
            exact={true}>
           <HomeLogo/>
            </Logo>
            <MenuContainer>
                <MenuItem>
                    <MenuLink to="todo"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact={true}
                    >Att Göra</MenuLink>
                </MenuItem>
                <MenuItem>
                    <MenuLink 
                    to="inventory"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact={true}
                    >Skafferi</MenuLink>
                </MenuItem>
                <MenuItem>
                <MenuLink onClick={cleanUpDB}>Städa Databas</MenuLink>
                </MenuItem>
            </MenuContainer>
        </NavBarContainer>
    )
}

export default NavBar
