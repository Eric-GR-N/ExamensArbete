import React from 'react'
import styled from 'styled-components';


export const HeroContainer = styled.div`
height: 800px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
position: relative;
`
export const HeroVideoContainer = styled.div`
height: 100%;
width: 100%;
position: absolute;
overflow: hidden;
`

export const OverLay = styled.div`
width: 100%;
height: 100%;
position: absolute;
z-index: -1;
background-color: rgba(255,255,255, 0);
`;

export const HeroBackgroundVideo = styled.video`
height: 100%;
object-fit: cover;
width: 100%;
position: absolute;
z-index: -2;
`

export const HeroContent = styled.h1`
color: rgba(0, 0, 66, 1);
font-weight: bold;
font-size: 3rem;
`