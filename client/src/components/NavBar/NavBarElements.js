import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";
import {Link as LinkS } from 'react-scroll';


export const NavBarContainer = styled.div`
height: 60px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
background-color: black;
`

export const Logo = styled.p`
color: white;
font-size: 1.3rem;
position: absolute;
left: 2%;
`

export const MenuContainer = styled.ul`
display: flex;
list-style: none;
`

export const MenuItem = styled.li`

`
export const MenuLink = styled(Link)`
align-items: center;
height: 100%;
color: white;
display: flex;
font-size: 1rem;
font-family: 'Montserrat', sans-serif;
text-decoration: none;
text-transform: uppercase;
cursor: pointer;
margin: 0 40px;
`
