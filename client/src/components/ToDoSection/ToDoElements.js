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

export const ToDoBackgroundVideo = styled.video`
height: 100%;
object-fit: cover;
width: 100%;
position: absolute;
z-index: -2;
`

