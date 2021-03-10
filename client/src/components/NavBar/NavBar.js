import React, {useState} from 'react'
import styled from 'styled-components'
import { NavBarContainer, Logo, MenuContainer, MenuItem, MenuLink } from './NavBarElements';

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
                    <MenuLink to="recipes">Recipes</MenuLink>
                </MenuItem>
                <MenuItem>
                    <MenuLink to="inventory">Inventory</MenuLink>
                </MenuItem>
                <MenuItem>
                    <MenuLink to="flowercheck">Flower Health</MenuLink>
                </MenuItem>
            </MenuContainer>
            
        </NavBarContainer>
    )
}

export default NavBar
