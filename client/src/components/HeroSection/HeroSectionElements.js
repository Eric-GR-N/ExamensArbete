import React from 'react'
import styled, {css} from 'styled-components';
import {colors} from '../../colors';
import orchid from '../../resources/orchid3.jpg';
import sky from '../../resources/Sky1.jpg';
import { RiPlantFill } from 'react-icons/ri';


export const Plant = styled(RiPlantFill)`
color: grey;
width: 50%;
height: 50%;
`

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
top: 65%;
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 35%;
position: absolute;
`
export const InnerContainerTop = styled.div`
top: 0;
${props => css`
background-image: url(${props.img})
`};
background-size: cover;
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 65%;
position: absolute;
`

export const IoTBox = styled.div`
display: flex;
width: 150px;
height: 120px;
margin: 0 30px;
overflow: hidden;
flex-direction: column;
align-items: center;
`

export const IoTBoxImage = styled.div`
width: 100%;
height: 91%;
display: flex;
justify-content: center;
align-items: center;
`

export const StyledSpan = styled.span`
border: solid black 2px;
border-radius: 5px;
width: 96%;
height: 9%;
`
export const StyledSpanMeter = styled.div`
min-height: 100%;
width: 80%;
background-color: black;
${'' /* background-color: ${props => props.moist < 20 ? colors.red : colors.darkGreen}; */}
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

