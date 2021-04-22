import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-scroll';
import {AiFillHome} from 'react-icons/ai';



export const NavBarContainer = styled.div`
height: 80px;
width: 100%;
position: fixed;
display: flex;
justify-content: center;
align-items: center;
z-index: 100;
${'' /* @media only screen and (max-width: 830px) {
    height: 100vh;
}  */}
`

export const HomeLogo = styled(AiFillHome)`
width: 25px;
height: 25px;
`

export const Logo = styled(Link)`
color: white;
font-size: 1rem;
position: absolute;
left: 2%;
z-index: 11;
cursor: pointer;

@media only screen and (max-width: 830px) {
    display: none;
} 
`

export const MenuContainer = styled.ul`
margin-right: 30px;
display: flex;
justify-content: center;
list-style: none;
width: 700px;

@media only screen and (max-width: 830px) {
    display: none;
} 
`

export const MenuItem = styled.li`
position: relative;
`
export const MenuLink = styled(Link)`
align-items: center;
height: 100%;
color: white;
font-size: 0.9rem;
font-family: 'Montserrat', sans-serif;
text-decoration: none;
text-transform: uppercase;
cursor: pointer;
margin: 0 40px;
padding: 0 20px;
border-bottom: solid 1.5px white;
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
export const IoTList = styled.ul`
opacity: 0;
top: 30px;
width: 100%;
position: absolute;
display: flex;
flex-direction: column;
justify-content: center;
list-style: none;
`
export const IoTItem = styled.li`
width: 100%;
height: 100%;
text-align: center;
padding: 15px;
`

export const IoTLink = styled.p`
color: white;
font-size: 0.9rem;
`

export const IoTMenu = styled(MenuLink)`

`

