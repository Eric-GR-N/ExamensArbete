import React from 'react'
import styled from 'styled-components'
import { NavBarContainer, Logo, MenuContainer, MenuItem, MenuLink } from './NavBarElements';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <NavBarContainer>
            <Logo>Logo</Logo>
            <MenuContainer>
                <MenuItem>
                    <MenuLink to='/todo'>To Do</MenuLink>
                </MenuItem>
                <MenuItem>
                    <MenuLink to="/recipes">Recipes</MenuLink>
                </MenuItem>
                <MenuItem>
                    <MenuLink to="/inventory">Inventory</MenuLink>
                </MenuItem>
                <MenuItem>
                    <MenuLink to="/flowercheck">FlowerCheck</MenuLink>
                </MenuItem>
            </MenuContainer>
            
        </NavBarContainer>
    )
}

export default NavBar
