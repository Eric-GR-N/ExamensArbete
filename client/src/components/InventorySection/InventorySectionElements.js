import React from 'react'
import {StyledInput, StyledNote, SubmitButton} from '../ToDoSection/ToDoElements';
import styled from 'styled-components'
import {Link} from 'react-scroll';
import { InnerContainerTop, InnerContainer, HeroContainer, Overlay} from '../HeroSection/HeroSectionElements';

export const InventorySectionContainer = styled(HeroContainer)`
`

export const InputWrapperInventory = styled(InnerContainerTop)`
${'' /* align-items: flex-end; */}
`

export const BottomContainer = styled(InnerContainer)`

`

export const InputContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 80%;
width: 80%;
position: absolute;
top: 80px;
flex-wrap: wrap;
align-content: flex-start;
`

export const InputBox = styled.div`
margin: 100px 100px 20px 100px;
justify-content: center;
display: flex;
width: 32%;
height: 40%;
position: relative;
`

export const GroceryHeader = styled.h1`
align-self: flex-start;
font-size: 2rem; 
color: white;
position: absolute;
`

export const GroceryInput = styled(StyledInput)`
align-self: center;
width: 90%;
position: absolute;
padding: 0;
margin: 0;
`

export const GroceryContainer = styled.div`
flex-direction: row;
align-content: flex-start;
${'' /* border: solid black 2px; */}
width: 20%;
height: 80%;
position: relative;
overflow: auto;
flex-wrap: wrap;
display: ${props => props.open ? 'none' : 'flex'}
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
export const Button = styled(SubmitButton)`
position: absolute;
height: 25%;
width: 40%;
padding: 0;
align-self: flex-end;
margin: 0;
`

export const ResultContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: white;
border-radius: 7px;
width: 25%;
height: 15%;
box-shadow: 5px 3px 10px -4px #9F9C9B;
opacity: 0.9;
`
export const ResultText = styled.p`
color: ${props => props.inStock ? 'green' : 'red'};
font-size: 1.5rem;
font-weight: bold;
`

export const GroceryListButton = styled(SubmitButton)`
right: 0;
position: absolute;
height: 40px;
width: 10%;
padding: 0;
border: white solid 2px;
cursor: pointer;
z-index: 101;
`
export const ButtonContainer = styled.div`
top: 0;
height: 80px;
width: 100%;
position: absolute;
display: flex;
justify-content: flex-end;
align-items: center;
`

export const OverLay = styled(Overlay)`
opacity: 0.5;
`
