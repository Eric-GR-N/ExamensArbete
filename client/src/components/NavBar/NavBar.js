import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { NavBarContainer, Nav, Logo, MenuContainer, MenuItem, MenuLink, IoTMenu,  IoTList, IoTItem, IoTLink } from './NavBarElements';
import {Animated} from "react-animated-css";

const NavBar = () => {
    const [showIoT, setShowIoT] = useState(false);

    const handleIoTMenu = ()=>{
            if(showIoT){
                setShowIoT(false)
            }else {
                setShowIoT(true);
            }
    }

    
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
                    <IoTMenu>IoT</IoTMenu>
                    <IoTList>
                        <IoTItem>
                            <IoTLink>Flower</IoTLink>
                        </IoTItem>
                        <IoTItem>
                            <IoTLink>Temperature</IoTLink>
                        </IoTItem>
                        <IoTItem>
                            <IoTLink>Leakage</IoTLink>
                        </IoTItem>
                    </IoTList>
                </MenuItem>
            </MenuContainer>
            
        </NavBarContainer>
    )
}

export default NavBar
