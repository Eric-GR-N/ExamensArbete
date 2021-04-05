import React from 'react'
import styled from 'styled-components'
import img from '../../resources/freddy-castro_Wood3.jpg';

export const ToDoOverLay = styled.div`
width: 100%;
height: 100%;
position: absolute;
background-color: rgba(0,0,0,0.3);
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
border-bottom: solid 1px white;
outline: none;
width: 400px;
color: white;
`
export const ToDoNotesWrapper = styled.div`
${'' /* border: solid yellow 3px; */}
flex-basis: 480px;
width: 50%;
display: flex;
justify-content: center;
position: relative;
align-content: center;
flex-wrap: wrap;
overflow: auto;
` 

export const StyledNote = styled.div`
width: 100px;
height: 150px;
border-radius: 10px;
background: white;
box-shadow: 3px 1px 8px -2px #9F9C9B;
position: relative;
margin: 15px;
display: flex;
align-items: center;
justify-content: center;
text-align: center;
`

export const SubmitButton = styled.button`
margin: 30px;
padding: 10px 40px;
border-radius: 5px;
background-color: green;
border: none;
color: white;
outline: none;
cursor: pointer;
`
