import React from 'react'
import styled from 'styled-components';

export const OverLay = styled.div`
width: 100%;
height: 100%;
position: absolute;
z-index: -1;
background-color: rgba(0, 0, 0, 0);
`;

export const HeroContainer = styled.div`
height: 90vh;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`
export const HeroBackgroundVideo = styled.video`
height: 100%;
object-fit: cover;
width: 100%;
position: absolute;
z-index: -2;
`

export const HeroContent = styled.h1`
color: white;
font-weight: bold;
font-size: 3rem;
`