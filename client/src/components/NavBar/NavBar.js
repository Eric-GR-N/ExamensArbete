import React, {useState, useEffect } from 'react'
import styled from 'styled-components'
import { NavBarContainer, Nav, Logo, MenuContainer, MenuItem, MenuLink, IoTMenu,  IoTList, IoTItem, IoTLink, AiFillHome, HomeLogo } from './NavBarElements';

const NavBar = () => {
    
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
                    >To Do</MenuLink>
                </MenuItem>
                <MenuItem>
                    <MenuLink 
                    to="inventory"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact={true}
                    >Inventory</MenuLink>
                </MenuItem>
                <MenuItem>
                <MenuLink>IoT</MenuLink>
                </MenuItem>
            </MenuContainer>
        </NavBarContainer>
    )
}

export default NavBar
