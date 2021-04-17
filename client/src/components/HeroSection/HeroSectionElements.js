import React from 'react'
import styled from 'styled-components';
import {colors} from '../../colors';
import orchid from '../../resources/orchid3.jpg';
import sky from '../../resources/Sky1.jpg';
import forest from '../../resources/forest2.jpg';


export const HeroContainer = styled.div`
height: 760px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
position: relative;
flex-direction: column;
`

export const InnerContainer = styled.div`
top: 55%;
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 45%;
position: absolute;
`
export const InnerContainerTop = styled.div`
top: 0;
background-image: url(${forest});
background-size: cover;
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 55%;
position: absolute;
`

export const IoTBox = styled.div`
display: flex;
width: 150px;
height: 225px;
margin: 0 30px;
overflow: hidden;
flex-direction: column;
`

export const IoTBoxImage = styled.div`
border-radius: 5px;
background-image: url(${orchid});
background-size: cover;
background-repeat: no-repeat;
width: 100%;
height: 91%;
display: block;
`

export const StyledSpan = styled.span`
border-radius: 5px;
width: ${props => props.moist}%;
margin-top: 3%;
height: 6%;
background-color: ${props => props.moist < 20 ? colors.red : colors.darkGreen};
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
background-color: rgba(255,255,255, 0.8);
`;

export const HeroBackgroundVideo = styled.video`
height: 100%;
object-fit: cover;
width: 100%;
position: absolute;
z-index: -2;
`

export const HeroHeader = styled.h1`
color: black;
font-weight: bold;
font-size: 3rem;
align-self: flex-start;
position: absolute;
`
export const IotLogo = styled.h1`
color: rgba(0, 0, 66, 1);
font-size: 3rem;
align-self: flex-start;
position: absolute;
margin-top: 50px;
`
