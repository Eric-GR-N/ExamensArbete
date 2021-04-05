import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-scroll';


export const NavBarContainer = styled.div`
height: 80px;
width: 100%;
position: fixed;
display: flex;
justify-content: center;
align-items: center;
${'' /* border: solid 2px black; */}
z-index: 100;

${'' /* @media only screen and (max-width: 830px) {
    height: 100vh;
}  */}
`

export const Logo = styled(Link)`
color: white;
font-size: 1.3rem;
position: absolute;
left: 2%;
z-index: 11;
cursor: pointer;

@media only screen and (max-width: 830px) {
    display: none;
} 
`

export const MenuContainer = styled.ul`
display: flex;
list-style: none;

@media only screen and (max-width: 830px) {
    display: none;
} 
`

export const MenuItem = styled.li`
`
export const MenuLink = styled(Link)`
align-items: center;
height: 100%;
color: white;
font-size: 1rem;
font-family: 'Montserrat', sans-serif;
text-decoration: none;
text-transform: uppercase;
cursor: pointer;
margin: 0 40px;
padding: 0 20px;
border-bottom: solid 2px white;
transition: 0.4s linear;

&:hover{
    padding: 0px;
    margin: 0 60px;
    transition: 0.4s linear;
}

&.active{
    padding: 0px;
    margin: 0 60px;
}
`
