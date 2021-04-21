import React from 'react'
import styled, { css } from 'styled-components'
import img from '../../resources/freddy-castro_Wood3.jpg';
import {colors} from '../../colors';
import { InnerContainerTop, InnerContainer } from '../HeroSection/HeroSectionElements';

export const ToDoOverLay = styled.div`
width: 100%;
height: 100%;
position: absolute;
background-color: rgba(0,0,0,0.3);
`;

export const ToDoContainer = styled.div`
align-items: center;
height: 760px;
width: 100%;
display: flex;
flex-direction: column;
position: relative;
@media only screen and (max-width: 830px) {
    height: 100vh;
} 
`
export const InputWrapper = styled(InnerContainerTop)`
flex-direction: column;
`

export const ToDoNotesWrapper = styled.div`
display: flex;
justify-content: center;
align-content: flex-start;
width: 70%;
height: 90%;
position: relative;
flex-wrap: wrap;
overflow: auto;
`

export const StyledHeader = styled.h1`
font-size: 2rem; 
color: white;
${'' /* text-shadow: 0.5px 0.5px white; */}
margin-top: 30px;
`

export const StyledInput = styled.input`
margin-top: 20px;
background: transparent;
text-align: center;
border: none;
font-size: 1.5rem;
border-bottom: solid 3px white;
outline: none;
width: 400px;
color: white;
display: inline;
`

export const SubmitButton = styled.button`
margin: 30px;
padding: 10px 40px;
border-radius: 5px;
background-color: black;
border: none;
color: white;
outline: none;
cursor: pointer;
`
export const StyledHoverText = styled.p`
display: none;
font-size: 0.7rem;
color: white;
`

export const StyledSpan = styled.span`
display: flex;
position: absolute;
width: 100%;
height: 18%;
font-size: 0.5rem;
background-color: ${colors.black};
align-self: flex-end;
align-items: center;
justify-content: center;
`

export const StyledParaGraph = styled.p`
max-width: 90%;
word-wrap: break-word;
cursor: pointer;

&:hover{
    opacity: 0.4;
}
`


export const StyledSelect = styled.select`
width: 250px;
height: 30px;
border: none;
text-align-last: center;
border-radius: 5px;
`
export const StyledOption = styled.option`

`
export const StyledLabel = styled.label`
margin: 15px;
color: white;
font-weight: bold;
font-size: 1.2rem;
`
export const StyledNote = styled.div`
width: 250px;
border: solid rgba(0,0,0,0.2) 1px;
height: 50px;
border-radius: 5px;
background: white;
box-shadow: 5px 3px 10px -4px #9F9C9B;
position: relative;
margin: 15px;
display: flex;
align-items: center;
justify-content: center;
text-align: center;
overflow: hidden;
`
