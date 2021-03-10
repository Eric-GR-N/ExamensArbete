import React from 'react'
import styled from 'styled-components'

export const ToDoOverLay = styled.div`
width: 100%;
height: 100%;
position: absolute;
z-index: -1;
background-color: rgba(255, 255, 255, 0.8);
`;

export const ToDoContainer = styled.div`
height: 800px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
position: relative;
@media only screen and (max-width: 830px) {
    height: 100vh;
} 
`
export const InputWrapper = styled.div`
height: 200px;
width: 100%;
${'' /* border: solid 2px green; */}
position: absolute;
top: 80px;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`

export const StyledHeader = styled.h1`
position: absolute;
`

export const StyledInput = styled.input`
background: transparent;
border: none;
font-size: 2rem;
border-bottom: solid 1px black;
outline: none;
width: 400px;
position: absolute;
bottom: 20px;

`

