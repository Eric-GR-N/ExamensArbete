import React from 'react'
import styled from 'styled-components'
import img from '../../resources/freddy-castro_Wood3.jpg';

export const ToDoOverLay = styled.div`
width: 100%;
height: 100%;
position: absolute;
background-color: rgba(0,0,0,0);
`;

export const ToDoContainer = styled.div`
align-items: center;
background-image: url(${img});
background-repeat: no-repeat;
background-size: cover;
height: 800px;
width: 100%;
display: flex;
flex-direction: column;
position: relative;
@media only screen and (max-width: 830px) {
    height: 100vh;
} 
`
export const InputWrapper = styled.div`
flex-shrink: 0;
${'' /* border: solid blue 3px; */}
flex-basis: 150px;
width: 100%;
position: relative;
display: flex;
margin-top: 80px;
justify-content: center;
flex-direction: column;
align-items: center;
`

export const StyledHeader = styled.h1`
color: white;
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
export const ToDoNotesWrapper = styled.div`
${'' /* border: solid yellow 3px; */}
flex-basis: 480px;
width: 50%;
display: flex;
justify-content: center;
position: relative;
align-content: flex-start;
flex-wrap: wrap;
overflow: auto;
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
height: 15%;
font-size: 0.5rem;
background-color: pink;
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
color: black;
font-weight: bold;
font-size: 1.2rem;
`
export const StyledNote = styled.div`
width: 100px;
height: 150px;
border-radius: 10px;
background: white;
box-shadow: 5px 3px 10px -4px #9F9C9B;
position: relative;
margin: 15px;
display: flex;
align-items: center;
justify-content: center;
text-align: center;
overflow: hidden;

${StyledParaGraph}:hover ~ ${StyledSpan}{
    transition: 0.1s;
    background-color: lightblue;
        > ${StyledHoverText} {
        transition: 1s;
        display: block;
    }
} 
`
