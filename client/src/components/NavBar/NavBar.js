import React, {useState} from 'react'
import styled from 'styled-components'
import { NavBarContainer, Nav, Logo, MenuContainer, MenuItem, MenuLink } from './NavBarElements';

const NavBar = () => {


    return (
        <NavBarContainer>
            <Logo
            to="home"
            smooth={true}
            duration={500}
            spy={true}
            exact={true}>
            Home Page
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
                    <MenuLink to="">IoT</MenuLink>
                </MenuItem>
            </MenuContainer>
            
        </NavBarContainer>
    )
}

export default NavBar
