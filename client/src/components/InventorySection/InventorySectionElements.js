import React from 'react'
import {StyledInput, StyledNote} from '../ToDoSection/ToDoElements';
import styled from 'styled-components'
import {Link} from 'react-scroll';
import { InnerContainerTop, InnerContainer, HeroContainer} from '../HeroSection/HeroSectionElements';

export const InventorySectionContainer = styled(HeroContainer)`
`

export const InputWrapperInventory = styled(InnerContainerTop)`
flex-direction: column;
`

export const BottomContainer = styled(InnerContainer)`

`

export const GroceryHeader = styled.h1`
font-size: 2rem; 
color: white;
${'' /* text-shadow: 0.5px 0.5px white; */}
margin-top: 30px;
`

export const GroceryInput = styled(StyledInput)`

`

export const GroceryContainer = styled.div`
display: flex;
flex-direction: row;
align-content: flex-start;
${'' /* border: solid black 2px; */}
width: 20%;
height: 80%;
position: relative;
overflow: auto;
flex-wrap: wrap;
`

export const GroceryNote = styled(StyledNote)`
width: 100%;
height: 12%;
margin: 4px;
`

export const StyledParagraph = styled.p`
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
width: 100%;
height: 100%;
`