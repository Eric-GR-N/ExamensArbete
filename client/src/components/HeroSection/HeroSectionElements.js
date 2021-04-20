import React from 'react'
import styled, {css} from 'styled-components';
import {colors} from '../../colors';
import orchid from '../../resources/orchid3.jpg';
import sky from '../../resources/Sky1.jpg';
import { RiPlantFill } from 'react-icons/ri';
import {FaTemperatureHigh} from 'react-icons/fa';


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
flex-direction: column;
align-items: center;
justify-content: center;
border: solid black 2px;
position: relative;
`

export const Plant = styled(RiPlantFill)`
color: grey;
width: 60%;
height: 60%;
position: absolute;
`

export const Temp = styled(FaTemperatureHigh)`
color: grey;
width: 40%;
height: 40%;
position: absolute;
`

export const StyledSpan = styled.span`
border: solid grey 2px;
border-radius: 6px;
width: 100%;
height: 12%;
bottom: 0;
position: absolute;
overflow: hidden;
`
export const StyledSpanMeter = styled.div`
width: 100%;
height: 100%;
background-color: ${props => props.moist < 20 ? colors.red : colors.darkGreen};
`

export const OverLay = styled.div`
width: 100%;
height: 100%;
position: absolute;
z-index: -1;
background-color: rgba(255,255,255, 0.8);
`;


export const HeroHeader = styled.h1`
color: black;
font-weight: bold;
font-size: 3rem;
align-self: flex-start;
position: absolute;
`

